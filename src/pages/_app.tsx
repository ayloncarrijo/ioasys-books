import GlobalStyles from "components/GlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import type {} from "styled-components/cssprop";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Head>
        <title>Ioasys Books</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
