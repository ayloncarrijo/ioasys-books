import React from "react";
import { Status } from "types";

interface Options {
  initialState?: {
    status?: Status;
  };
}

interface Return {
  (): void;
  abort: () => void;
  controller: React.MutableRefObject<AbortController | null>;
  status: Status;
}

interface Args {
  signal: AbortSignal;
  resolve: () => void;
  reject: () => void;
}

function useAsyncCallback(
  callback: (args: Args) => Promise<void>,
  options?: Options
): Return {
  const controller = React.useRef<AbortController | null>(null);

  const [status, setStatus] = React.useState(
    options?.initialState?.status ?? Status.IDLE
  );

  return Object.assign(
    React.useCallback(() => {
      controller.current?.abort();
      controller.current = new AbortController();

      const { signal } = controller.current;

      setStatus(Status.LOADING);

      new Promise<void>((resolve, reject) => {
        callback({ signal, resolve, reject }).then(resolve).catch(reject);
      })
        .then(() => {
          if (signal.aborted) {
            return;
          }

          setStatus(Status.SUCCESS);
        })
        .catch(() => {
          if (signal.aborted) {
            return;
          }

          setStatus(Status.ERROR);
        });
    }, [callback]),
    {
      abort: React.useCallback(() => {
        controller.current?.abort();
      }, []),
      controller,
      status,
      setStatus,
    }
  );
}

export default useAsyncCallback;
