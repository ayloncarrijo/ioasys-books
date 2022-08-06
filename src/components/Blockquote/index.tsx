import Quotes from "public/icon/quotes.svg";
import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";

function Blockquote({
  children,
  ...props
}: ComponentPropsWithoutRef<"blockquote">): JSX.Element {
  return (
    <blockquote tw="relative" {...props}>
      <div tw="absolute">
        <Quotes />
      </div>
      <p tw="text-indent[24px] text-gray">{children}</p>
    </blockquote>
  );
}

export default Blockquote;
