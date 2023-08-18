import React from "react";

import { Text } from "components";

type C1HomeDesktopFooterlinkProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "buttontext"
> &
  Partial<{ buttontext: string }>;

const C1HomeDesktopFooterlink: React.FC<C1HomeDesktopFooterlinkProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto tablet:w-full">
          <div className="flex flex-col items-center justify-center w-auto tablet:w-full">
            <Text
              className="text-base text-gray-50 w-auto"
              size="txtInterSemiBold16"
            >
              {props?.buttontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C1HomeDesktopFooterlink.defaultProps = { buttontext: "Home" };

export default C1HomeDesktopFooterlink;
