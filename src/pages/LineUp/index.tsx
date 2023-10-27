// @ts-nocheck
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Img, Text } from "components";
import "react-awesome-slider/dist/styles.css";
import "styles/react-awesome-custom-style.css";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import C1HomeDesktopRowcrucero from "components/C1HomeDesktopRowcrucero";
import C1HomeDesktopRowsubheading from "components/C1HomeDesktopRowsubheading";
import Header from "components/Header";
import ServicesSection from "components/ServicesSection/ServicesSection";
import Footer from "components/Footer";
const LineUpPage: React.FC = () => {

  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable mx-auto pt-[26px] relative w-full h-full">
        <Header />
        <div
          className="relative font-clashgroteskvariable h-[694px] tablet:h-auto inset-x-[0] max-w-[1387px] mx-auto tablet:px-5 top-[0] w-full">

          <C1HomeDesktopImgcentral
            style={{ backgroundImage: "url('images/img_imgcentral.png')" }}
            spantext={
              <Text
                className="leading-[90.00px] md:text-5xl text-6xl text-gray-50 w-full"
                size="txtClashGroteskVariableBold60"
              >
                    <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                      <>
                        ¡Preparate para vibrar! <br />
                        Conocé el
                      </>
                    </span>
                <span className="text-lime-A700 font-clashgroteskvariable text-left font-bold">
                      {" "}
                  line up{" "}
                    </span>
                <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                      de esta{" "}
                    </span>
                <span className="text-lime-A700 font-clashgroteskvariable text-left font-bold">
                      ALTA fiesta
                    </span>
              </Text>
            }
            description={
              <Text
                className="leading-[42.00px] sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-full"
                size="txtClashGroteskVariableMedium28"
              >
                Mantente en sintonía con los ritmos más intensos y los beats
                más frenéticos de la escena electrónica mundial, con el line
                up de artistas que te llevarán al éxtasis en el crucero
                temático más vibrante del mundo.
              </Text>
            }
          />
        </div>
        <div className="w-full  bg-gradient8 bg-[#000]">

          <div className=" flex flex-col font-clashdisplayvariable md:gap-10 gap-24 inset-x-[0] items-center justify-start mx-auto top-[2%] w-full max-w-[1387px]">
            <div className="w-full">
              <Text
                className="leading-[55.00px] md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-50"
                size="txtClashDisplayVariableRegular56"
              >
                <span className="text-gray-50 font-clashdisplayvariable font-normal">
                  <>
                    <br />
                  </>
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-gray-50 font-clashdisplayvariable text-[50px] font-normal">
                  Un elenco de{" "}
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-amber-600 font-clashdisplayvariable text-[50px] font-bold">
                  estrellas internacionales
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-gray-50 font-clashdisplayvariable text-[50px] font-normal">
                  {" "}
                  del techno y la música electrónica se unen para llevarte a
                  un{" "}
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-amber-600 font-clashdisplayvariable text-[50px] font-bold">
                  viaje sonoro sin igual
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-gray-50 font-clashdisplayvariable text-[50px] font-normal">
                  <>
                    {" "}
                    en el <br />
                  </>
                </span>
                <span className="md:text-[46px] sm:text-[40px] text-amber-600 font-clashdisplayvariable text-[50px] font-bold">
                  <>
                    crucero más exclusivo del mundo
                    <br />
                  </>
                </span>
              </Text>
            </div>

            <div className="w-full overflow-x-auto">
              <div className="font-clashgroteskvariable flex flex-col tablet:flex-row flex-wrap min-h-[auto] w-full tablet:w-[150%] mobile:w-[300%] gap-[30px]"  style={{backgroundImage:"url('images/ondas_2_horizontal.png')"}}>
                {
                  [...Array(3).keys()].map((v)=>(
                    <div className="flex justify-center flex-row tablet:flex-col h-[295px] tablet:h-auto gap-[4px]">
                      <div className="flex tablet:w-full">
                        <div className=" border-[5px] border-lime-A700 border-solid bg-[#000] flex flex-col gap-1 md:h-auto h-full inset-[0] items-center justify-center m-auto p-5 rounded-[20px] w-[232px] tablet:w-full">
                          <div className="flex flex-col items-start justify-start w-[194px]">
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-lime-A700 w-auto"
                              size="txtClashGroteskVariableBold48"
                            >
                              SÁBADO
                            </Text>
                          </div>
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-lime-A700 w-auto"
                            size="txtClashGroteskVariableBold48"
                          >
                            11.11.1111
                          </Text>
                          <Img
                            className="h-[99px] w-[185px]"
                            src="images/img_sound.svg"
                            alt="sound"
                          />
                        </div>
                      </div>
                      <div className="flex bg-red-A400 rounded-[20px] py-[8px] pl-[20px] pr-[8px] bg-contain bg-no-repeat bg-left mobile:flex-col-reverse"
                           style={{backgroundImage:"url('images/ondas_cabins.svg')"}}>

                        <div className="flex flex-col gap-[5px] inset-x-[0] items-start justify-start mx-auto pt-[20px] w-[230px]">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                            size="txtClashGroteskVariableBold28"
                          >
                            Lorem ipsum dolor{" "}
                          </Text>
                          <div className="flex flex-col font-clashdisplayvariable items-start justify-start w-full">
                            <Text
                              className="leading-[21.00px] max-w-[255px] md:max-w-full text-sm text-white-A700"
                              size="txtClashDisplayVariableMedium14"
                            >
                              Lorem ipsum dolor sit amet consectetur. Cras
                              consectetur est et et sed est. Cras velit ornare
                              cras massa.{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-center w-[135px]">
                            <Text
                              className="text-base text-gray-50_fa w-auto"
                              size="txtClashDisplayVariableMedium16Gray50fa"
                            >
                              Hora
                            </Text>
                            <Text
                              className="text-base text-right text-white-A700 w-auto"
                              size="txtClashDisplayVariableMedium16WhiteA700"
                            >
                              00.00 a 03:00am
                            </Text>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-start">
                          <Img
                            className="h-full rounded-bl-[20px] rounded-br-[20px] w-[230px]"
                            src="images/img_imageplaceholder.png"
                            alt="imageplaceholde"
                          />
                        </div>
                      </div>
                      <div className="flex bg-red-A400 rounded-[20px] py-[8px] pl-[20px] pr-[8px] bg-contain bg-no-repeat bg-left mobile:flex-col-reverse"
                           style={{backgroundImage:"url('images/ondas_cabins.svg')"}}>

                        <div className="flex flex-col gap-[5px] inset-x-[0] items-start justify-start mx-auto pt-[20px] w-[230px]">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                            size="txtClashGroteskVariableBold28"
                          >
                            Lorem ipsum dolor{" "}
                          </Text>
                          <div className="flex flex-col font-clashdisplayvariable items-start justify-start w-full">
                            <Text
                              className="leading-[21.00px] max-w-[255px] md:max-w-full text-sm text-white-A700"
                              size="txtClashDisplayVariableMedium14"
                            >
                              Lorem ipsum dolor sit amet consectetur. Cras
                              consectetur est et et sed est. Cras velit ornare
                              cras massa.{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-center w-[135px]">
                            <Text
                              className="text-base text-gray-50_fa w-auto"
                              size="txtClashDisplayVariableMedium16Gray50fa"
                            >
                              Hora
                            </Text>
                            <Text
                              className="text-base text-right text-white-A700 w-auto"
                              size="txtClashDisplayVariableMedium16WhiteA700"
                            >
                              00.00 a 03:00am
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Img
                            className="h-full rounded-bl-[20px] rounded-br-[20px] w-[230px]"
                            src="images/img_imageplaceholder.png"
                            alt="imageplaceholde"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <Footer />


      </div>


    </>
  );
};

export default LineUpPage;



