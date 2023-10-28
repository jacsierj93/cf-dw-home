import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";

interface SponsorSquareProps {
  bgImage : object,
}

const SponsorSquareComponent: React.FC<SponsorSquareProps> = (props) => {
  return (
    <>
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-end rounded-[20px] w-[90vw] h-[90vw]"
          style={{...props.bgImage}}
        >
          <div className="flex flex-col items-center justify-center max-w-[802px] pb-6 pt-24 sm:px-5 px-6 w-full">
            <div className="bg-gray-900 flex flex-col gap-3 justify-start items-center outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px]">
              <div className="flex flex-col gap-4 items-start justify-center ">
                <div className="flex flex-col items-start justify-start ">
                  <Text
                    className="text-xl w-auto text-white-A700"
                    size="txtClashGroteskVariableBold24"
                  >
                    Nombre y apellido
                  </Text>
                </div>
              </div>
              <div className="gap-[20px] grid grid-cols-3 items-center justify-center">
                <Img
                  className="h-6 w-6"
                  src="images/img_socialicon.svg"
                  alt="socialicon"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SponsorSquareComponent;
