import React from "react";

import { Button, Img, Text } from "components";

type C1HomeDesktopDjcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dateofbirth" | "language" | "description"
> &
  Partial<{ dateofbirth: string; language: string; description: string }>;

const C1HomeDesktopDjcard: React.FC<C1HomeDesktopDjcardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[345px] relative w-full">
          <Img
            className="absolute h-[345px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
            src="images/img_rectangle1028.png"
            alt="rectangle1028"
          />
          <Button className="absolute bg-gray-900 bottom-[1%] cursor-pointer font-bold font-clashgroteskvariable min-w-[146px] py-[27px] right-[34%] rounded-[10px] text-2xl tablet:text-[22px] text-center text-white-A700 mobile:text-xl">
            {props?.dateofbirth}
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start w-auto">
          <Text
            className="mobile:text-2xl tablet:text-[26px] text-[28px] text-white-A700 w-auto"
            size="txtClashGroteskVariableBold28"
          >
            {props?.language}
          </Text>
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtClashGroteskVariableMedium18"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

C1HomeDesktopDjcard.defaultProps = {
  dateofbirth: "11/11/1111",
  language: "Lorem ipsum dolor sit amet ",
  description: "Lorem ipsum dolor sit amet consectetur.",
};

export default C1HomeDesktopDjcard;
