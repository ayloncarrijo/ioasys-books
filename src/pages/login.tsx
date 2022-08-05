import Button from "components/Button";
import Container from "components/Container";
import Logo from "components/Logo";
import SpeechBubble from "components/SpeechBubble";
import TextInput from "components/TextInput";
import "twin.macro";
import type { AppPage } from "types";

const Login: AppPage = () => {
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
          <form tw="w-full grid gap-16 sm:w-368">
            <TextInput
              type="email"
              label="Email"
              value="books@ioasys.com.br"
              onChange={() => {
                //
              }}
            />
            <TextInput
              type="password"
              label="Senha"
              value="abcde12345"
              onChange={() => {
                //
              }}
              endComponent={<Button type="submit">Entrar</Button>}
            />
          </form>

          <div tw="absolute pt-16">
            <SpeechBubble>
              <p>Email e/ou senha incorretos.</p>
            </SpeechBubble>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
