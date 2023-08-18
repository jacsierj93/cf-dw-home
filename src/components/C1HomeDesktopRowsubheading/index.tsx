import React from "react";

import { Button, Img, Text } from "components";

type C1HomeDesktopRowsubheadingProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subheading" | "headingOne" | "descriptionTwo" | "reservarAhoraTwo"
> &
  Partial<{
    subheading: JSX.Element | string;
    headingOne: JSX.Element | string;
    descriptionTwo: JSX.Element | string;
    reservarAhoraTwo: string;
    imgUrl:string;
    cssImg:Object;
  }>;

const C1HomeDesktopRowsubheading: React.FC<C1HomeDesktopRowsubheadingProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className} style={{width:"100%",maxWidth:"1387px"}}>
        <div className="flex flex-col gap-[42px] items-start justify-end w-auto tablet:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-[598px] tablet:w-full">
            {(typeof props?.subheading === "string")?
              ( <Text
                className="text-indigo-A100 text-lg w-full"
                size="txtClashDisplayVariableSemiBold18"
              >
                {props?.subheading}
              </Text>):props.subheading
            }
           
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                {props?.headingOne}
              </div>
              {(typeof props?.descriptionTwo === "string")?
              (   <Text
                className="leading-[27.00px] max-w-[598px] tablet:max-w-full text-gray-900 text-lg font-normal"
                size="txtClashDisplayVariableMedium18"
              >
                {props?.descriptionTwo}
              </Text>):props.descriptionTwo
            }
            
            </div>
          </div>
          {/* <Button className="bg-indigo-A100 cursor-pointer font-clashdisplayvariable font-medium py-3.5 rounded-lg text-base text-center text-white-A700 w-[196px]">
            {props?.reservarAhoraTwo}
          </Button> */}
        </div>
        <div className="flex flex-col items-center justify-start rounded-[10px] w-[49%] tablet:w-full">
          <Img
            className="h-[350px] mobile:h-[250px] object-cover rounded-[10px] w-full "
            src={"images/"+props.imgUrl}
            alt="crucero_One"
            style={props.cssImg}
          />
        </div>
      </div>
    </>
  );
};

C1HomeDesktopRowsubheading.defaultProps = {
  subheading: "Habitaciones",
  headingOne: (
    <Text
      className="mobile:text-2xl tablet:text-[26px] text-[28px] text-indigo-A100 w-auto"
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
  imgUrl:'img_rectangle1028.png',
  cssImg:{}
};

export default C1HomeDesktopRowsubheading;
