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

import { useParams } from "react-router-dom";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const CabinsDetailsPage: React.FC = () => {

  const {id} = useParams(); 

  const listFeatures : string[] = [
    "Outdoor pool",
    "Indoor pool",
    "Spa & wellness",
    "Restaurant",
    "Room service",
    "Fitness center",
    "Bar/Lounge",
    "Free Wi-Fi",
  ]

  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable mx-auto pt-[26px] relative w-full h-full">
        <Header/>
        <div className="relative font-clashgroteskvariable h-[694px] md:h-auto inset-x-[0] max-w-[1387px] mx-auto md:px-5 top-[0] w-full">
          
          <C1HomeDesktopImgcentral
            className="relative bg-cover bg-no-repeat bottom-[0] flex flex-col h-full inset-x-[0] items-center justify-center max-w-[1387px] mx-auto lg:p-[150px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('/images/img_imgcentral.png')" }}
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
                Ya sea que elijas un camarote interior acogedor o una suite con vista al mar, te garantizamos una experiencia de alojamiento excepcional. Descansa, relájate y alístate para volver a la fiesta.  Nuestro crucero de música electrónica te ofrece la mejor experiencia en alta mar. 
              </Text>
            }
          />
        </div>




        <div className={`relative w-full transition-all duration-300 ease-in-out transform pt-[30px]`}
            style={{backgroundColor:'black'}}>
          <div className="bg-gradient7  flex flex-col gap-[27px] items-center justify-start p-[15px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1408px] mt-[17px] px-4 w-full">
                <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full sm:items-center">
                <div className="flex md:flex-col flex-row gap-4 items-end justify-start w-auto md:w-full">
                    <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 w-auto"
                    size="txtClashGroteskVariableBold48"
                    >
                    <>{listCabins[id].name}</>
                    </Text>
                    <div className="flex sm:flex-col flex-row font-clashdisplayvariable gap-8 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <div className="flex flex-row items-start justify-start w-auto">
                        <Img
                            className="h-4 w-4"
                            src="/images/img_star.svg"
                            alt="star"
                        />
                        <Img
                            className="h-4 w-4"
                            src="/images/img_star.svg"
                            alt="star_One"
                        />
                        <Img
                            className="h-4 w-4"
                            src="/images/img_star.svg"
                            alt="star_Two"
                        />
                        <Img
                            className="h-4 w-4"
                            src="/images/img_star.svg"
                            alt="star_Three"
                        />
                        <Img
                            className="h-4 w-4"
                            src="/images/img_star.svg"
                            alt="star_Four"
                        />
                        </div>
                        <Text
                        className="text-base text-gray-50 w-auto"
                        size="txtClashDisplayVariableMedium16Gray50"
                        >
                        Estadía All Inclusive
                        </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Img
                        className="h-4 w-4"
                        src="/images/img_cafe.svg"
                        alt="cafe"
                        />
                        <Text
                        className="text-base text-gray-50 w-auto"
                        size="txtClashDisplayVariableMedium16Gray50"
                        >
                        <span className="text-gray-50 font-clashdisplayvariable text-left font-medium">
                            20+
                        </span>
                        <span className="text-gray-50 font-clashdisplayvariable text-left font-medium">
                            {" "}
                            Amenities
                        </span>
                        </Text>
                    </div>
                    </div>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <div className="flex flex-col font-clashdisplayvariable items-start justify-start w-10">
                    <Button className="border border-lime-A700 border-solid cursor-pointer font-semibold h-8 py-[7px] rounded text-center text-lime-A700 text-sm w-full">
                        5.0
                    </Button>
                    </div>
                    <Text
                    className="text-lime-A700 text-sm w-auto"
                    size="txtMontserratMedium14"
                    >
                    <span className="text-lime-A700 font-clashdisplayvariable text-left font-semibold">
                        Muy bueno
                    </span>
                    <span className="text-lime-A700 font-montserrat text-left font-medium">
                        {" "}
                    </span>
                    <span className="text-lime-A700 font-clashdisplayvariable text-left font-medium">
                        371 reseñas
                    </span>
                    </Text>
                </div>
                </div>
                <div className="flex flex-col font-montserrat gap-4 items-end justify-start w-auto sm:items-center">
                <Text
                    className="text-2xl md:text-[22px] text-gray-50_fa text-right sm:text-xl w-auto"
                    size="txtMontserratBold24"
                >
                    <span className="md:text-3xl sm:text-[28px] text-gray-50_fa font-clashgroteskvariable text-[32px] font-bold">
                      
                    {listCabins[id].price}
                    </span>
                    <span className="text-gray-50_fa font-clashgroteskvariable text-base font-bold">
                    /persona
                    </span>
                </Text>
                <div className="flex flex-row font-clashdisplayvariable gap-[15px] items-start justify-start w-auto">
                    <List
                    className="sm:flex-col flex-row gap-[15px] grid grid-cols-2 w-[35%]"
                    orientation="horizontal"
                    >
                    <div className="flex flex-col items-start justify-start w-full">
                        <Button className="border border-gray-50 border-solid flex h-12 items-center justify-center p-3.5 rounded w-12">
                        <Img
                            className="h-5"
                            src="/images/img_heart.svg"
                            alt="heart"
                        />
                        </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <Button className="border border-gray-50 border-solid flex h-12 items-center justify-center p-3.5 rounded w-12">
                        <Img
                            className="h-5"
                            src="/images/img_search.svg"
                            alt="search"
                        />
                        </Button>
                    </div>
                    </List>
                    <Button className="bg-lime-A700 cursor-pointer font-medium py-3.5 rounded-lg text-base text-black-900 text-center w-[196px]">
                    Reservar ahora
                    </Button>
                </div>
                </div>
            </div>
            <div className="flex md:flex-col flex-row font-clashdisplayvariable gap-2 md:h-auto items-start justify-start max-w-[1392px] mb-3.5 w-full">
                <div className="grid grid-rows-4 grid-flow-col gap-4 sm:hidden">
                    <div className="row-span-4 col-span-2">
                        <Img
                        className="flex-1 md:flex-none md:h-auto sm:h-auto h-full max-h-[685px] object-cover rounded-bl-[12px] rounded-tl-[12px] sm:w-[] md:w-[]"
                        src={`/images/${listCabins[id].images[1]}`}
                        alt="rectangleThree"
                        />
                    </div>
                    <div className="row-span-2">
                        <Img
                        className="flex-1  h-full max-h-[338px] object-cover sm:w-[]"
                        src={`/images/${listCabins[id].images[2]}`}
                        alt="rectangleFive"
                        />
                    </div>
                    <div className="row-span-2">
                        <Img
                        className="flex-1 h-full max-h-[338px] object-cover  sm:w-[]"
                        src={`/images/${listCabins[id].images[3]}`}
                        alt="rectangleSix"
                        />
                    </div>
                    <div className="row-span-2 ">
                        <Img
                        className="flex-1 md:flex-none h-full max-h-[338px] rounded-tr-[12px] object-cover sm:w-[] md:w-[]"
                        src={`/images/${listCabins[id].images[4]}`}
                        alt="rectangleFive_One"
                        />
                    </div>
                    <div className="row-span-2 ">
                        <Img
                            className="h-full m-auto object-cover rounded-br-[12px] w-full"
                            src={`/images/${listCabins[id].images[5]}`}
                            alt="rectangleSix_One"
                        />
                    </div>
                </div>
                <div className="hidden sm:block w-full h-full">
                  <AwesomeSlider bullets={false} >
                    {listCabins[id].images.map((image)=>(
                      <div data-src={`/images/${image}`} />
                    ))}
                  </AwesomeSlider>
                </div>
                
            </div>
            
          </div>
          <div className="flex flex-col gap-8 items-left justify-start max-w-[1392px] mx-auto w-full">
               <Img
                    className="h-auto m-auto object-contain w-1/3 absolute m-l-0 sm:w-[80%] mt-[-10%]"
                    src="/images/frame.svg"
                    alt="cabina_detalle"
                />
              <div className="w-full flex flex-col items-center justify-start z-10 sm:px-5">
                <Line className="bg-gray-300_71 h-px w-[89%] my-[35px]" />
                <div className="bg-gray-900_bf flex flex-col items-start justify-start md:px-10 px-12 sm:px-5 py-6 rounded-[20px] w-auto md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1262px] w-full">
                        <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 w-auto"
                            size="txtClashGroteskVariableBold32"
                        >
                            Detalles
                        </Text>
                        <Text
                            className="leading-[24.00px] max-w-[1232px] md:max-w-full text-lg text-white-A700_9e"
                            size="txtClashDisplayVariableSemiBold18"
                        >
                            <span className="text-white-A700 font-clashdisplayvariable text-left font-normal  ">
                            {listCabins[id].description}
                            </span>
                            {/* <span className="text-white-A700 font-clashdisplayvariable text-left font-semibold">
                            .{" "}
                            </span>
                            <span className="text-white-A700 font-clashdisplayvariable text-left font-semibold">
                            {" "}
                            </span> */}
                            {/* <span className="text-white-A700 font-clashdisplayvariable text-left font-bold">
                            El precio esta expresado por noche, por persona,
                            para toda la estadía all inclusive.
                            </span> */}
                        </Text>
                        </div>
                        {/* <div className="flex flex-col items-start justify-start w-auto">
                        <div className="bg-indigo-A100 flex flex-col h-[130px] md:h-auto items-center justify-start p-4 rounded-[12px] w-[166px]">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                            <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 w-auto"
                                size="txtClashGroteskVariableSemiBold32"
                            >
                                4.2
                            </Text>
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                <Text
                                className="text-base text-gray-50_01 w-auto"
                                size="txtClashGroteskVariableBold16"
                                >
                                Very good
                                </Text>
                                <Text
                                className="text-base text-gray-50_01 w-auto"
                                size="txtClashGroteskVariableMedium16"
                                >
                                371 reviews
                                </Text>
                            </div>
                            </div>
                        </div>
                        </div> */}
                    </div>

                    <div className="snap-x bg-gray-900_bf overflow-x-auto flex font-clashdisplayvariable gap-3 justify-start max-w-[1256px] px-3 py-1.5 rounded-[20px] mt-[32px] w-full">
                      {
                        listFeatures.map((value)=>(
                          <div className="snap-start border border-lime-A700 border-solid flex flex-col h-[98px] md:h-auto items-start justify-start pl-4 md:pr-10 pr-16 sm:pr-5 py-4 rounded-[12px] shrink-0 w-[143px]">
                            <div className="flex flex-col h-[66px] md:h-auto items-start justify-between">
                              <Img
                                className="h-8 w-8"
                                src="/images/img_user.svg"
                                alt="user"
                              />
                              <Text
                                className="text-gray-50_01 text-sm w-auto"
                                size="txtClashDisplayVariableMedium14"
                              >
                                {value}
                              </Text>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                </div>
              </div>

              
              
        </div>
        <div className="bg-gradient7 w-full min-h-[493px]">
                
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1256px] mt-[32px] mx-auto md:px-[20px]  w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 w-auto"
              size="txtClashGroteskVariableBold32"
            >
              Recorrido del crucero
            </Text>
            <Button className="bg-lime-A700 cursor-pointer font-clashdisplayvariable font-medium py-3.5 rounded-lg text-base text-black-900 text-center w-[196px]">
              Ver en Google Maps
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <Img
              className="h-[450px] object-cover rounded-[16px]  w-[1232px] md:w-full"
              src="/images/img_rectangle19.png"
              alt="rectangleNineteen"
            />
          </div>
        </div>
            <div className="relative bottom-[0] flex flex-col font-inter md:gap-10 gap-16 h-[786px] md:h-auto inset-x-[0] items-center justify-end  max-w-[1387px] mx-auto pb-12 pt-16 w-full">
              <Img
                  className="absolute h-[786px] sm:h-auto md:h-full md:w-full mx-auto object-cover"
                  src="/images/img_bgfiguraonda.png"
                  alt="bgfiguraonda"
                />
                  <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full z-10">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-[28%] md:w-full md:w-auto">
                          <Img
                            className="h-[95px] md:h-[65px] md:h-auto object-cover w-full"
                            src="/images/img_logocruisefestivalmesa.png"
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
                          <a href="mailto:Info@cruise-festival.com" target="_blank">
                            <img className="h-[26px] w-[26px] cursor-pointer"
                            src="/images/email.png"
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

export default CabinsDetailsPage;



