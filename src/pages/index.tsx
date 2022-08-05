import Container from "components/Container";
import Header from "containers/Header";
import "twin.macro";
import type { AppPage } from "types";

const Home: AppPage = () => {
  return (
    <div
      tw="min-h-screen bg-no-repeat bg-top bg-cover bg-fixed"
      css={{ backgroundImage: "url(/img/home-bg.png)" }}
    >
      <Container>
        <div tw="py-40">
          <Header />
        </div>
      </Container>
    </div>
  );
};

export default Home;
