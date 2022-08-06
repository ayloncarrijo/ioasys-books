import axios from "axios";
import Button from "components/Button";
import Container from "components/Container";
import Logo from "components/Logo";
import SpeechBubble from "components/SpeechBubble";
import TextInput from "components/TextInput";
import redirectIfLoggedIn from "middlewares/redirectIfLoggedIn";
import type { GetServerSideProps } from "next";
import { FormEvent, useState } from "react";
import "twin.macro";
import { AppPage, Status } from "types";
import AppUtil from "utils/AppUtil";

const SignIn: AppPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(Status.IDLE);

  const [speech, setSpeech] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus(Status.LOADING);
    setSpeech("");

    await AppUtil.signIn(email, password).catch((error) => {
      setStatus(Status.ERROR);
      setSpeech(
        axios.isAxiosError(error) && error.response?.status === 401
          ? "E-mail e/ou senha incorretos."
          : "Algo deu errado. Por favor, tente novamente."
      );
    });
  };

  return (
    <div
      tw="min-h-screen bg-no-repeat bg-top bg-cover bg-fixed flex items-center"
      css={{ backgroundImage: "url(/img/auth-bg.png)" }}
    >
      <Container>
        <div tw="mb-48">
          <Logo />
        </div>

        <div>
          <form onSubmit={submit} tw="w-full grid gap-16 sm:w-368">
            <TextInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              label="E-mail"
              required
              placeholder="Insira seu e-mail"
            />
            <TextInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              label="Senha"
              required
              placeholder="Insira sua senha"
              endComponent={
                <Button type="submit" isLoading={status === Status.LOADING}>
                  Entrar
                </Button>
              }
            />
          </form>

          {speech && (
            <div tw="absolute pt-16">
              <SpeechBubble>
                <p>{speech}</p>
              </SpeechBubble>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = redirectIfLoggedIn("/");

export { getServerSideProps };
export default SignIn;
