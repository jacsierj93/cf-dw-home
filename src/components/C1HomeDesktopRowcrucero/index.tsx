import React from "react";

import { Button, Img, Text } from "components";

type C1HomeDesktopRowcruceroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "language" | "heading" | "description" | "reservebutton"
> &
  Partial<{
    language: string;
    heading: JSX.Element | string;
    description: string;
    reservebutton: string;
  }>;

const C1HomeDesktopRowcrucero: React.FC<C1HomeDesktopRowcruceroProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start rounded-[10px] w-[49%] md:w-full">
          <Img
            className="h-[264px] md:h-auto object-cover rounded-[10px] w-full"
            src="images/img_rectangle1028.png"
            alt="crucero"
          />
        </div>
        <div className="flex flex-col gap-[42px] items-end justify-start w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-[598px] md:w-full">
            <Text
              className="text-indigo-A100 text-lg w-full"
              size="txtClashDisplayVariableSemiBold18"
            >
              {props?.language}
            </Text>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                {props?.heading}
              </div>
              <Text
                className="leading-[27.00px] max-w-[598px] md:max-w-full text-gray-900 text-lg"
                size="txtClashDisplayVariableMedium18"
              >
                {props?.description}
              </Text>
            </div>
          </div>
          <Button className="bg-indigo-A100 cursor-pointer font-clashdisplayvariable font-medium py-3.5 rounded-lg text-base text-center text-white-A700 w-[196px]">
            {props?.reservebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

C1HomeDesktopRowcrucero.defaultProps = {
  language: "El crucero ",
  heading: (
    <Text
      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto"
      size="txtClashGroteskVariableBold28Gray50"
    >
      <span className="text-gray-900 font-clashgroteskvariable text-left font-bold">
        Experiencia de
      </span>
      <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
        {" "}
      </span>
      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
        primer nivel
      </span>
    </Text>
  ),
  description:
    "Lorem ipsum dolor sit amet consectetur. Aliquam purus varius cursus nibh in magna. Non amet erat mattis mattis integer aliquet amet morbi convallis. At commodo eu sit vitae cursus suspendisse. Tempor magna amet enim pulvinar nisl at velit mi aliquet.",
  reservebutton: "Reservar ahora",
};

export default C1HomeDesktopRowcrucero;
