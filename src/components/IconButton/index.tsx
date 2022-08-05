import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element;
}

function IconButton({ icon, ...props }: IconButtonProps): JSX.Element {
  return (
    <button
      tw="w-32 h-32 flex items-center justify-center border border-lighter-black border-opacity-20 rounded-full"
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
