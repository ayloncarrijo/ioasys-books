import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";

function MessageBox(props: ComponentPropsWithoutRef<"div">): JSX.Element {
  return (
    <div
      tw="py-164 flex justify-center typography-title2 font-medium"
      {...props}
    />
  );
}

export default MessageBox;
