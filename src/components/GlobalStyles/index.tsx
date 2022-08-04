import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle``;

function GlobalStyles(): JSX.Element {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
