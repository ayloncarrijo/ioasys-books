import type { PropsWithChildren } from "react";
import "twin.macro";

function SpeechBubble({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <div tw="ml-16 w-16 h-8">
        <div tw="-translate-y-1/2 w-0 h-0 border-r-8 border-l-8 border-t-8 border-b-8 border-r-transparent border-l-transparent border-t-transparent border-b-white opacity-40 backdrop-blur-sm" />
      </div>

      <div tw="inline-flex bg-white bg-opacity-40 backdrop-blur-sm rounded typography-body1 font-bold text-white px-16 py-12">
        {children}
      </div>
    </div>
  );
}

export default SpeechBubble;
