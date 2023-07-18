import React from "react";

import { Button, Img, Text } from "components";

type C1HomeDesktopRowsubheadingProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subheading" | "headingOne" | "descriptionTwo" | "reservarAhoraTwo"
> &
  Partial<{
    subheading: string;
    headingOne: JSX.Element | string;
    descriptionTwo: string;
    reservarAhoraTwo: string;
  }>;

const C1HomeDesktopRowsubheading: React.FC<C1HomeDesktopRowsubheadingProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[42px] items-start justify-end w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-[598px] md:w-full">
            <Text
              className="text-indigo-A100 text-lg w-full"
              size="txtClashDisplayVariableSemiBold18"
            >
              {props?.subheading}
            </Text>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                {props?.headingOne}
              </div>
              <Text
                className="leading-[27.00px] max-w-[598px] md:max-w-full text-gray-900 text-lg"
                size="txtClashDisplayVariableMedium18"
              >
                {props?.descriptionTwo}
              </Text>
            </div>
          </div>
          <Button className="bg-indigo-A100 cursor-pointer font-clashdisplayvariable font-medium py-3.5 rounded-lg text-base text-center text-white-A700 w-[196px]">
            {props?.reservarAhoraTwo}
          </Button>
        </div>
        <div className="h-[264px] relative rounded-[10px] w-[49%] md:w-full">
          <Img
            className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
            src="images/img_crucero.png"
            alt="crucero_One"
          />
          <div className="absolute h-[264px] inset-[0] justify-center m-auto rounded-[10px] w-full">
            <Img
              className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
              src="images/img_crucerorelax1.png"
              alt="crucerorelaxOne"
            />
            <div className="absolute h-[264px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                src="images/img_32770159403591.png"
                alt="32770159403591"
              />
              <div className="absolute h-[264px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                  src="images/img_relaxcrucero.png"
                  alt="relaxcrucero"
                />
                <div className="absolute h-[264px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                    src="images/img_spacrucero.png"
                    alt="spacrucero"
                  />
                  <div className="absolute h-[264px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                      src="images/img_gymcrucero.png"
                      alt="gymcrucero"
                    />
                    <Img
                      className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle1028.png"
                      alt="image_Four"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C1HomeDesktopRowsubheading.defaultProps = {
  subheading: "Habitaciones",
  headingOne: (
    <Text
      className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-A100 w-auto"
      size="txtClashGroteskVariableBold28IndigoA100"
    >
      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
        Relájate{" "}
      </span>
      <span className="text-gray-900 font-clashgroteskvariable text-left font-bold">
        con la brisa del mar
      </span>
    </Text>
  ),
  descriptionTwo:
    "Lorem ipsum dolor sit amet consectetur. Id euismod ullamcorper fames massa mi. Parturient fermentum sit senectus gravida eget proin tempus mus lorem. Aliquet at risus id donec. Rhoncus nulla venenatis libero ac in aenean in.",
  reservarAhoraTwo: "Reservar ahora",
};

export default C1HomeDesktopRowsubheading;
