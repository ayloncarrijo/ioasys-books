import GlobalStyles from "components/GlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import UserProvider from "providers/UserProvider";
import type {} from "styled-components/cssprop";
import type { User } from "types/api";

function App({ Component, pageProps: { user, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Head>
        <title>Ioasys Books</title>
      </Head>

      <UserProvider user={user as User}>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default App;
