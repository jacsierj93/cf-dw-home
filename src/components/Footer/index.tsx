import React from "react";

import { Img, Text } from "components";

const Footer: React.FC<{}> = (props) => {

    return <>
        <div className="relative bottom-[0] flex flex-col font-inter tablet:gap-10 gap-16 h-[786px] tablet:h-auto inset-x-[0] items-center justify-end  max-w-[1387px] mx-auto pb-12 pt-16 w-full">
            <Img
                className="absolute h-[786px] mobile:h-auto tablet:h-full tablet:w-full mx-auto object-cover"
                src="/images/img_bgfiguraonda.png"
                alt="bgfiguraonda"
            />
            <div className="flex flex-col items-start justify-start max-w-7xl mobile:px-5 px-8 w-full z-10">
                <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-[28%] tablet:w-full tablet:w-auto">
                            <Img
                            className="h-[95px] tablet:h-[55px] tablet:h-auto object-contain"
                            src="/images/img_logocruisefestivalmesa.png"
                            alt="logocruisefesti_One"
                            />
                            
                            <div className="flex w-full justify-center items-center">
                                <span>
                                    <Text
                                        className="leading-[24.00px] tablet:max-w-full max-w-xs text-sm text-gray-50"
                                        size="txtInterRegular16"
                                        >
                                            Organizador por: 
                                    </Text>
                                    
                                </span>
                                <Img
                                    className="h-[95px] tablet:h-[65px] tablet:h-auto object-contain"
                                    src="/images/hps_wo_slogan.png"
                                    alt="logohpsbeat_One"
                                />
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-start justify-start w-80 mobile:w-auto">
                            <Text
                            className="leading-[24.00px] tablet:max-w-full max-w-xs text-base text-gray-50"
                            size="txtInterRegular16"
                            >
                            ¡Súmate a la experiencia que va a ser un antes y un
                            después en tu vida!
                            </Text>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start mobile:px-5 px-8 w-auto tablet:w-full">
                <div className="flex flex-row mobile:flex-col gap-8 items-center justify-start w-full">
                <Text
                className="flex-1 text-base text-blue_gray-300 w-auto"
                size="txtInterRegular16Bluegray300"
                >
                © Uxability World. Todos los derechos reservados
                </Text>
                <div className="flex flex-row gap-6 items-center justify-start w-auto z-10">
                
                    <a href="https://instagram.com/cruise.festival?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <img className="h-[26px] w-[26px] cursor-pointer"
                    src="/images/img_camera.svg"
                    alt="camera"/>
                    </a>
                    <a href="https://open.spotify.com/user/31yrnfwmobp5omwu7dyn37rsxxri?si=tvj-hXr0SaODAADBkucUpA" target="_blank">
                    <img className="h-[24px] w-[24px] cursor-pointer"
                    src="/images/spotify.png"
                    alt="spotify"/>
                    </a>
                    <a href="https://www.tiktok.com/@cruise.festival?_t=8eXZM7eVrMr&_r=1" target="_blank">
                        <img className="h-[24px] w-[24px] cursor-pointer"
                        src="/images/tik-tok.png"
                        alt="tiktok"/>
                    </a>
                    <a href="https://www.linkedin.com/company/cruise-festival/" target="_blank">
                        <img className="h-[24px] w-[24px] cursor-pointer"
                        src="/images/linkedin.png"
                        alt="linkedin"/>
                    </a>
                    <a href="mailto:Info@cruise-festival.com" target="_blank">
                        <img className="h-[26px] w-[26px] cursor-pointer"
                        src="/images/email.png"
                        alt="mail"/>
                    </a>
                    <a href="https://wa.me/56933562715?text=¡Hola! Quiero saber cómo estar %23EnAlta" target="_blank">
                        <img className="h-[26px] w-[26px] cursor-pointer"
                        src="/images/whatsapp.png"
                        alt="whatsapp"/>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </>
}

export default Footer;