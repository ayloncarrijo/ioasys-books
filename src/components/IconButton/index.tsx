import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";
import tw from "twin.macro";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element;
  variant?: "fill" | "outlined";
}

function IconButton({
  icon,
  variant = "outlined",
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <button
      tw="w-32 h-32 flex items-center justify-center border border-lighter-black text-lighter-black border-opacity-20 rounded-full disabled:(cursor-not-allowed text-opacity-40)"
      css={[
        variant === "fill"
          ? tw`bg-white`
          : tw`not-disabled:hover:(bg-lighter-black bg-opacity-5)`,
      ]}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
