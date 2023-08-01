import React from "react";
import { Img } from "components/Img";

const ServicesSection: React.FC<{}> = (props) => {
    return (
        <div className="absolute bg-gradient2 h-[2327px] sm:h-[4600px] w-full" 
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
                className="absolute object-cover left-[0] sm:h-[529px]  sm:top-[3900px] hidden sm:block"
                src="images/onda2.svg"
                alt="bgfiguraonda_Two"
              />
            <div id="wrapper" className="relative p-[12px] flex flex-col gap-[18px] items-center justify-start w-full ">
                {props.children}
            </div>
        </div>
    )
}

export default ServicesSection;