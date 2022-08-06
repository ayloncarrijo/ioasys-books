import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    ${tw`typography-body2 text-lighter-black`}
  }

  .is-modal-open {
    ${tw`overflow-hidden`}
  }
`;

function GlobalStyles(): JSX.Element {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
