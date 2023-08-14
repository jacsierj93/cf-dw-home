import React from "react";

import { Button, Text } from "components";

type C1HomeDesktopImgcentralProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "spantext" | "description" | "buttontext"
> &
  Partial<{
    spantext: JSX.Element | string;
    description: JSX.Element | string;
    buttontext: string;
    background: {type: 'image' | 'video', sources: {format:string, source:string}[]}
  }>;

const C1HomeDesktopImgcentral: React.FC<C1HomeDesktopImgcentralProps> = (
  props,
) => {
  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat bottom-[0] flex flex-col h-full inset-x-[0] items-center justify-center max-w-[1387px] mx-auto lg:p-[150px] md:p-10 sm:p-5 w-full"
        style={{ backgroundImage: (props.background.type != 'image')?"url('/images/img_imgcentral.png')":`url('${props.background.sources[0].source}')` }}
      >
        {
          (props.background.type == 'video')?
           <div className="w-full h-full object-cover absolute">
              <video className="w-full max-w-none h-full object-cover" playsInline autoPlay muted loop id="video-desktop">
                {
                  props.background.sources.map((value)=>(
                    <source src={value.source} type={value.format}/>
                  ))
                }
                
                Your browser does not support the video tag.
              </video>
          </div>: ''
        }
       
        <div className="bg-gray-900_7f flex flex-col gap-8 items-center justify-center p-12 md:px-10 sm:px-5 rounded-[10px] w-auto md:w-full z-10">
          {props?.spantext}
          {
            (typeof props?.description == 'string')?
              (<Text
                className="leading-[42.00px] max-w-[1124px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50"
                size="txtClashGroteskVariableMedium28"
              >
                {props?.description}
              </Text>)
            :props?.description
          }
          
        </div>
      </div>
    </>
  );
};

C1HomeDesktopImgcentral.defaultProps = {
  spantext: (
    <Text
      className="leading-[90.00px] max-w-[1076px] md:max-w-full md:text-5xl text-6xl text-center text-gray-50"
      size="txtClashGroteskVariableBold60"
    >
      <span className="text-gray-50 font-clashgroteskvariable font-bold">
        Disfruta de{" "}
      </span>
      <span className="text-lime-A700 font-clashgroteskvariable font-bold">
        <>
          DJs de talla mundial <br />
        </>
      </span>
      <span className="text-gray-50 font-clashgroteskvariable font-bold">
        en un solo crucero
      </span>
    </Text>
  ),
  description:
    "La música del mundo es una mezcla ecléctica de sonidos tradicionales y contemporáneos de todo el planeta. Es una forma estupenda de explorar y apreciar diferentes culturas.",
  buttontext: "Reservar ahora",
  background:{
    type:'video',
    sources:[
      {
        format:'video/mp4',
        source:'/images/cf_home.mp4'
      }
    ]
  }
};

export default C1HomeDesktopImgcentral;
