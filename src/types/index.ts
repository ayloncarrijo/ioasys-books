import type { NextPage } from "next";

export type AppPage<
  Props = Record<string, unknown>,
  InitialProps = Props
> = NextPage<Props, InitialProps>;

export enum Cookie {
  TOKEN = "token",
  USER = "user",
}

export enum Status {
  IDLE,
  LOADING,
  ERROR,
  SUCCESS,
}
