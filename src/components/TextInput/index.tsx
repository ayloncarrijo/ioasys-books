import { ComponentPropsWithoutRef, MouseEvent, useRef } from "react";
import "twin.macro";
import tw from "twin.macro";

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  startComponent?: JSX.Element;
  endComponent?: JSX.Element;
}

function TextInput({
  label,
  startComponent,
  endComponent,
  ...props
}: TextInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const stopPropagation = (event: MouseEvent) => event.stopPropagation();

  return (
    <div
      tw="flex items-center px-16 py-8 rounded cursor-text text-white bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {startComponent && <div onClick={stopPropagation}>{startComponent}</div>}

      <div
        tw="flex-1"
        css={[startComponent && tw`pl-16`, endComponent && tw`pr-16`]}
      >
        {label && (
          <label
            htmlFor={props.id}
            tw="mb-4 block typography-body2 opacity-50 cursor-text"
          >
            {label}
          </label>
        )}

        <input
          ref={inputRef}
          tw="w-full typography-body1 bg-transparent outline-none"
          {...props}
        />
      </div>

      {endComponent && <div onClick={stopPropagation}>{endComponent}</div>}
    </div>
  );
}

export default TextInput;
