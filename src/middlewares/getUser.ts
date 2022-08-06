import type { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import type { User } from "types/api";

const getUser: GetServerSideProps = async (ctx) => {
  const { token, user } = parseCookies(ctx);

  const isLoggedIn = token && user;

  if (!isLoggedIn) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(user) as User,
    },
  };
};

export default getUser;
