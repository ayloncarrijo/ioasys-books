import IoasysLogo from "public/img/logo.svg";
import tw from "twin.macro";

interface LogoProps {
  variant?: "black" | "white";
}

function Logo({ variant = "white" }: LogoProps): JSX.Element {
  return (
    <div
      tw="inline-flex items-center gap-16 select-none"
      css={variant === "white" ? tw`text-white` : tw`text-lighter-black`}
    >
      <IoasysLogo tw="w-full h-36" />
      <span tw="typography-title1 font-thin">Books</span>
    </div>
  );
}

export default Logo;
