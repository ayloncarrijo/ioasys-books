import IconButton from "components/IconButton";
import Logo from "components/Logo";
import Logout from "public/icon/logout.svg";
import "twin.macro";

function Header(): JSX.Element {
  return (
    <header tw="flex justify-between items-center sm:gap-64">
      <div tw="flex-shrink-0">
        <Logo variant="black" />
      </div>

      <div tw="min-w-0 flex items-center gap-16">
        <h4 tw="whitespace-nowrap flex-1 overflow-hidden overflow-ellipsis hidden sm:block">
          Bem-vindo, <span tw="font-medium">Abc</span>!
        </h4>

        <IconButton icon={<Logout />} />
      </div>
    </header>
  );
}

export default Header;
