import Api from "api";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { Cookie } from "types";
import type { User } from "types/api";

class AppUtil {
  public static async signIn(email: string, password: string) {
    const {
      data,
      headers: { authorization },
    } = await Api.DEFAULT.post<User>("/auth/sign-in", {
      email,
      password,
    });

    if (!authorization) {
      return;
    }

    setCookie(null, Cookie.TOKEN, authorization, {
      maxAge: 86400 * 7,
    });

    setCookie(null, Cookie.USER, JSON.stringify(data), {
      maxAge: 86400 * 7,
    });

    await Router.push("/");
  }

  public static signOut() {
    destroyCookie(null, Cookie.TOKEN);
    destroyCookie(null, Cookie.USER);

    window.location.href = "/signin";

    return new Promise(() => {
      // ...
    });
  }
}

export default AppUtil;
