import IconButton from "components/IconButton";
import Close from "public/icon/close.svg";
import React, { useEffect } from "react";
import "twin.macro";

interface ModalProps {
  onDismiss: () => void;
}

function Modal({
  onDismiss,
  children,
}: React.PropsWithChildren<ModalProps>): JSX.Element {
  useEffect(() => {
    window.document.body.classList.add("is-modal-open");

    return () => {
      window.document.body.classList.remove("is-modal-open");
    };
  }, []);

  return (
    <div tw="z-50 fixed inset-0 bg-black bg-opacity-40 p-16 flex flex-col">
      <div tw="absolute inset-0" onClick={onDismiss} />

      <div tw="mb-16 md:mb-32 flex justify-end">
        <div tw="relative">
          <IconButton onClick={onDismiss} variant="fill" icon={<Close />} />
        </div>
      </div>

      <div tw="min-h-0 flex-1 flex flex-col justify-center items-center">
        <div tw="overflow-auto relative bg-white shadow-card-hover rounded max-w-768">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
