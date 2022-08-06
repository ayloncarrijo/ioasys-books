import type { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const redirectIfLoggedIn: (destination: string) => GetServerSideProps =
  (destination: string) => async (ctx) => {
    const { token, user } = parseCookies(ctx);

    const isLoggedIn = token && user;

    if (isLoggedIn) {
      return {
        redirect: {
          destination,
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  };

export default redirectIfLoggedIn;
