import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "twin.macro";

function Container(
  props: PropsWithChildren<ComponentPropsWithoutRef<"div">>
): JSX.Element {
  return <div tw="container" {...props} />;
}

export default Container;
