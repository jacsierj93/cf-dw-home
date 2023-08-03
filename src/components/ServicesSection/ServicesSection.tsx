import React from "react";
import { Img, Text } from "components/";


const ServicesSection: React.FC<{expanded?:boolean}> = (props) => {
    return (
    <div className={`absolute bg-gradient2 ${(props.expanded)?'h-auto' : 'h-0'} w-full transition-all py-[50px] duration-300 ease-in-out transform overflow-hidden`}
            style={{backgroundColor:'black'}}>
              <Img
                  className="absolute h-[1133px] sm:h-[529px] right-[0] object-cover top-[-62px] sm:top-[-32px]"
                  src="images/onda_1.svg"
                  alt="bgfiguraonda_One"
                />
              <Img
                className="absolute h-[1109px] object-cover left-[0] sm:h-[529px]  top-[1120px]"
                src="images/onda2.svg"
                alt="bgfiguraonda_Two"
              />
              <Img
                  className="absolute sm:h-[529px] right-[0] object-cover sm:top-[2200px] hidden sm:block"
                  src="images/onda_1.svg"
                  alt="bgfiguraonda_One"
                />
              <Img
                className="absolute object-cover left-[0] sm:h-[529px]  sm:top-[3600px] hidden sm:block"
                src="images/onda2.svg"
                alt="bgfiguraonda_Two"
              />
            <div id="wrapper" className="relative p-[12px] flex flex-col gap-[18px] items-center justify-start w-full ">
            <div className="flex flex-col gap-2 h-[116px] md:h-auto items-start justify-start max-w-[1392px] w-full">
                <div className="flex flex-col h-fulljustify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold22"
                  >
                    No somos un crucero común, somos festival, moda, electrónica, locura.
                  </Text>
                </div>
                <div className="flex flex-col font-clashgroteskvariable justify-start">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                    size="txtClashGroteskVariableBold48Black90001"
                  >
                    La máxima experiencia de lujo y diversión en un crucero.
                  </Text>
                </div>
              </div>
                {props.children}
            </div>
        </div>
    )
}

ServicesSection.defaultProps = {
  expanded:false,
}

export default ServicesSection;