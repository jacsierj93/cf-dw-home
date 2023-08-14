import React from "react";

import { Button, Img, Line, Text, List } from "components";
import C1HomeDesktopDjcard from "components/C1HomeDesktopDjcard";
import C1HomeDesktopFooterlink from "components/C1HomeDesktopFooterlink";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";
import C1HomeDesktopRowcrucero from "components/C1HomeDesktopRowcrucero";
import C1HomeDesktopRowsubheading from "components/C1HomeDesktopRowsubheading";
import CabinasComponent from "components/Cabinas";
import Header from "components/Header";
import ServicesSection from "components/ServicesSection/ServicesSection";
import { listCabins } from "utils/lists";

const CabinsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable mx-auto pt-[26px] relative w-full h-full">
        <Header/>
        <div className="relative font-clashgroteskvariable h-[694px] md:h-auto inset-x-[0] max-w-[1387px] mx-auto md:px-5 top-[0] w-full">
          
          <C1HomeDesktopImgcentral
            className="relative bg-cover bg-no-repeat bottom-[0] flex flex-col h-full inset-x-[0] items-center justify-center max-w-[1387px] mx-auto lg:p-[150px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_imgcentral.png')" }}
            spantext={
              <Text className="font-bold leading-[90.00px] md:text-5xl text-6xl text-center text-gray-50">
                <span className="text-gray-50 font-clashgroteskvariable">
                  CONOCE <br/>
                </span>
                <span className="text-gray-50 font-clashgroteskvariable">
                  NUESTRAS {" "}
                </span>
                <span className="text-lime-A700 font-clashgroteskvariable">
                  <>
                  CABINAS
                  </>
                </span>
              </Text>
            }
            description={
              <Text
                className="leading-[42.00px] max-w-[1124px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50"
                size="txtClashGroteskVariableMedium28"
              >
                Ya sea que elijas un cabina interior acogedor o una suite con vista al mar, te garantizamos una experiencia de alojamiento excepcional. Descansa, relájate y alístate para volver a la fiesta.  Nuestro crucero de música electrónica te ofrece la mejor experiencia en alta mar. 
              </Text>
            }
            background={{type:'image',sources:[{format:'jpg',source:'/images/cf_cabinas_bg.jpg'}]}}
          />
        </div>




        <div className={`relative w-full transition-all duration-300 ease-in-out transform pt-[30px]`}
            style={{backgroundColor:'black'}}>
          <div className="w-full">
            <Img src="images/ondas_cabins.svg"
                className=" absolute top-[40px] object-cover md:w-[50%] sm:w-[70%] xl:hidden "
                />
            <Img src="images/ondas_cabin2.svg"
                className="absolute top-[40px] md:top-1/3 sm:1/2 object-cover w-full"
                />
            
            <div className="flex flex-row gap-[18px] items-start justify-center w-full bg-gradient6 py-[54px] z-10">
              <div className="flex flex-col gap-10 h-[416px] md:h-auto items-start justify-between mb-[470px] p-3 w-[435px] md:hidden ">
                  
                  <div className="flex flex-col">
                    <Img
                      className="mx-auto object-cover z-10"
                      src="images/banner_cabinas.png"
                      alt="bgfiguraonda"
                    />
                  </div>
              </div>
              <List
                className="flex flex-col gap-6 items-start md:w-full items-center z-10"
                orientation="vertical"
              >
                {
                  listCabins.map((value,index)=>
                    (
                      <CabinasComponent
                        slug={value.slug}
                        name={value.name}
                        cover={value.images[0]}
                        images={value.images}
                        price={value.price}
                      />
                    )
                  )
                }
              
              </List>
            </div>
          </div>
            <div className="relative bottom-[0] flex flex-col font-inter md:gap-10 gap-16 h-[786px] md:h-auto inset-x-[0] items-center justify-end  max-w-[1387px] mx-auto pb-12 pt-16 w-full">
              <Img
                  className="absolute h-[786px] sm:h-auto md:h-full md:w-full mx-auto object-cover"
                  src="images/img_bgfiguraonda.png"
                  alt="bgfiguraonda"
                />
                  <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full z-10">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-[28%] md:w-full md:w-auto">
                          <Img
                            className="h-[95px] md:h-[65px] md:h-auto object-cover w-full"
                            src="images/img_logocruisefestivalmesa.png"
                            alt="logocruisefesti_One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-80 sm:w-full">
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-xs text-base text-gray-50"
                            size="txtInterRegular16"
                          >
                            Sumate a la experiencia que va a ser un antes y un
                            después en tu vida!
                          </Text>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start sm:px-5 px-8 w-auto md:w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-base text-blue_gray-300 w-auto"
                        size="txtInterRegular16Bluegray300"
                      >
                        © Uxability World. Todos los derechos reservados
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-auto z-10">
                      
                          <a href="https://instagram.com/cruise.festival?igshid=MzRlODBiNWFlZA==" target="_blank">
                            <img className="h-[26px] w-[26px] cursor-pointer"
                            src="images/img_camera.svg"
                            alt="camera"/>
                          </a>
                          <a href="https://open.spotify.com/user/31yrnfwmobp5omwu7dyn37rsxxri?si=tvj-hXr0SaODAADBkucUpA" target="_blank">
                            <img className="h-[24px] w-[24px] cursor-pointer"
                            src="images/spotify.png"
                            alt="spotify"/>
                          </a>
                          <a href="https://www.tiktok.com/@cruise.festival?_t=8eXZM7eVrMr&_r=1" target="_blank">
                            <img className="h-[24px] w-[24px] cursor-pointer"
                            src="images/tik-tok.png"
                            alt="tiktok"/>
                          </a>
                          <a href="mailto:Info@cruise-festival.com" target="_blank">
                            <img className="h-[26px] w-[26px] cursor-pointer"
                            src="images/email.png"
                            alt="mail"/>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
            
      </div>


    </>
  );
};

export default CabinsPage;



