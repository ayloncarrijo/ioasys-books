import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import GlobalStyles from "../components/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
