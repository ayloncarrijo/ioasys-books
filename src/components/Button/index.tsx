import Loader from "public/icon/loader.svg";
import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";
import tw from "twin.macro";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
}

function Button({
  isLoading,
  disabled: isDisabled,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      tw="flex items-center justify-center relative min-h-36 px-20 py-4 rounded-full bg-white text-darker-pink typography-body1 font-medium select-none disabled:cursor-not-allowed"
      type="button"
      disabled={isLoading || isDisabled}
      {...props}
    >
      {isLoading && (
        <div tw="absolute inset-0 flex items-center justify-center">
          <Loader tw="w-24 h-24" />
        </div>
      )}

      <span css={[isLoading && tw`opacity-0`]}>{children}</span>
    </button>
  );
}

export default Button;
