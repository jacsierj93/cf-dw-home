import React, { useEffect, useRef, useState } from "react";

import { Button, Img, Line, Text, List } from "components";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import Header from "components/Header";
import { Cabins, listCabins } from "utils/lists";

import { Link, useParams } from "react-router-dom";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Footer from "components/Footer";
import Stars from "components/Stars";


const getCabin = async (slug) => {
  return listCabins.find((elem) => elem.slug == slug);
}
const CabinsDetailsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {slug} = useParams(); 
  
  const [cabin, setCabin] = useState<Cabins | undefined>();

  const [copyOk,setCopyOk] = useState(false);

  const target = useRef(null);

  useEffect(()=>{
    getCabin(slug).then((cabina)=>setCabin(cabina));
  },[])

  const executeScroll = () => target.current.scrollIntoView();
  
  const copyText = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopyOk(true);
    setTimeout(()=>{
      setCopyOk(false)
    },2000)
  }

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
      <div className={`p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 fixed top-[60px] right-[40px] sm:top-[30px] sm:right-[20px] z-30 ${(!copyOk)?'hidden':''}`}>
        Copiado al portapapeles
      </div>
        <Header/>
        <div className="relative font-clashgroteskvariable h-[694px] md:h-auto inset-x-[0] max-w-[1387px] mx-auto md:px-5 top-[0] w-full">
          
          <C1HomeDesktopImgcentral
            className="relative bg-cover bg-no-repeat bottom-[0] flex flex-col h-full inset-x-[0] items-center justify-center max-w-[1387px] mx-auto lg:p-[150px] md:px-10 sm:px-5 w-full"
            
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
                
                Elige entre una cabina interior para poder desconectarte o una suite con vista panorámica al mar, y prepárate para una experiencia inolvidable. Recarga energías y regresa a la pista de baile. En nuestro crucero de música electrónica experimentarás la mejor sensación de estar en ALTA mar, donde la fiesta nunca se detiene.
              </Text>
            }
            background={{type:'image',sources:[{format:'jpg',source:'/images/cf_cabinas_bg.jpg'}]}}
          />
        </div>




        <div className={`relative w-full transition-all duration-300 ease-in-out transform pt-[30px]`}
            style={{backgroundColor:'black'}}>
          <div className="bg-gradient7  flex flex-col gap-[27px] items-center justify-start p-[15px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1408px] mt-[17px] px-4 w-full">
                <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full sm:items-center">
                <div className="flex md:flex-col flex-row gap-4 items-center md:items-start sm:items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50 w-auto sm:text-center"
                      size="txtClashGroteskVariableBold48"
                      >
                      <>{cabin?.name}</>
                    </Text>
                    
                    <div className="flex flex-col grow">

                      <Stars description={cabin?.mini_desc}/>

                      <Stars description="Estadía All Inclusive"/>
                      <Stars description={`All Inclusive Drinks ${(cabin?.slug == 'cruise-festival-suite-vip')?' En ALTA':''}`}/>
                    </div>
                </div>
                
                </div>
                <div className="flex flex-col font-montserrat gap-4 items-end justify-start w-auto sm:items-ends sm:w-full">
                  <Text
                      className="text-2xl md:text-[22px] text-gray-50_fa text-right sm:text-xl w-auto"
                      size="txtMontserratBold24"
                  >
                    <span className="text-gray-50_fa font-clashgroteskvariable text-base font-bold">
                      desde {" "}<br/>
                      </span>
                      <span className="md:text-3xl sm:text-[28px] text-gray-50_fa font-clashgroteskvariable text-[32px] font-bold">
                      
                      {" USD "+cabin?.price}<br/>
                      </span>
                      <span className="text-gray-50_fa font-clashgroteskvariable text-base font-bold">
                      {" "} por persona
                      </span>
                      <br/>
                      
                  </Text>
                  <Text
                    className="text-[8px] leading-[10px] text-gray-50_fa text-right w-auto text-light"
                  >
                    Cruise Festival no incluye:<br/>
                    impuesto portuario.<br/>
                    Tasas de servicios.<br/>
                    Valor: USD 175
                  </Text>
                <div className="flex flex-row font-clashdisplayvariable gap-[15px] items-center justify-center w-full">
                    <List
                    className="sm:flex-col flex-row gap-[15px] w-auto"
                    orientation="horizontal"
                    >
                    <div className="flex flex-col items-start justify-start w-full">
                        <Button className="border border-gray-50 border-solid flex h-12 items-center justify-center p-3.5 rounded w-12"
                        onClick={copyText}>
                        <Img
                            className="h-5"
                            src="/images/img_search.svg"
                            alt="search"
                        />
                        </Button>
                    </div>
                    </List>
                    <Button className="bg-lime-A700 cursor-pointer font-medium py-3.5 rounded-lg text-base text-black-900 text-center w-[196px]" onClick={executeScroll}>
                    Reservar ahora
                    </Button>
                </div>
                </div>
            </div>
            <div className="flex flex-col font-clashdisplayvariable gap-2 md:h-auto items-start justify-start max-w-[1392px] mb-3.5 w-full">
                <div className="grid grid-rows-4 grid-flow-col gap-4 sm:hidden">
                    <div className="row-span-4 col-span-2">
                        <Img
                        className="flex-1 md:flex-none md:h-auto sm:h-auto h-full max-h-[685px] object-cover rounded-bl-[12px] rounded-tl-[12px] sm:w-[] md:w-[]"
                        src={`/images/${cabin?.images[1]}`}
                        alt="rectangleThree"
                        />
                    </div>
                    <div className="row-span-2">
                        <Img
                        className="flex-1  h-full max-h-[338px] object-cover sm:w-[]"
                        src={`/images/${cabin?.images[2]}`}
                        alt="rectangleFive"
                        />
                    </div>
                    <div className="row-span-2">
                        <Img
                        className="flex-1 h-full max-h-[338px] object-cover  sm:w-[]"
                        src={`/images/${cabin?.images[3]}`}
                        alt="rectangleSix"
                        />
                    </div>
                    <div className="row-span-2 ">
                        <Img
                        className="flex-1 md:flex-none h-full max-h-[338px] rounded-tr-[12px] object-cover sm:w-[] md:w-[]"
                        src={`/images/${cabin?.images[4]}`}
                        alt="rectangleFive_One"
                        />
                    </div>
                    <div className="row-span-2 ">
                        <Img
                            className="h-full m-auto object-cover rounded-br-[12px] w-full"
                            src={`/images/${cabin?.images[5]}`}
                            alt="rectangleSix_One"
                        />
                    </div>
                </div>
                {
                  (typeof cabin != 'undefined')?
                  (
                    <div className="hidden sm:block w-full h-full">
                      <AwesomeSlider bullets={false} >
                        {cabin?.images.map((image)=>(
                          <div data-src={`/images/${image}`} />
                        ))}
                      </AwesomeSlider>
                    </div>
                  ):""
                }
                <p className="text-sm text-normal self-end">
                  * Todas las imágenes son referenciales
                </p>
                
            </div>
            
          </div>
          <div className="flex flex-col gap-8 items-left justify-start max-w-[1392px] mx-auto w-full">
               <Img
                    className="h-auto m-auto object-contain w-1/3 absolute m-l-0 sm:w-[80%] mt-[-10%]"
                    src="/images/frame.svg"
                    alt="cabina_detalle"
                />
              <div className="w-full flex flex-col items-center justify-start z-10 sm:px-5 mb-[35px]">
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
                            {cabin?.description}
                            </span>
                            <br/>
                            <br/>
                            <br/>
                            <ul className="list-disc text-white-A700">  
                              {
                                (typeof cabin != 'undefined')?
                                  cabin.features.map((feature)=>(
                                    <li>
                                      <span className="text-white-A700 font-clashdisplayvariable text-left font-normal  ">
                                        {feature}
                                      </span>
                                    </li>
                                  )):(<li></li>)
                              }
                            </ul>
                        </Text>
                        </div>
                    </div>
                </div>
                <div className="flex w-full max-w-[1302px] items-left justify-left">
                   <div className="w-auto  flex  self-left mt-[20px] bg-gray-900_bf p-[12px] rounded-[12px]">
                    <Link to="/cabinas">
                      <Text
                          className="text-xl text-semibold text-gray-50_01 w-auto cursor-pointer"
                          size="txtClashGroteskVariableBold32"
                      >
                          {"< "}Más Cabinas
                      </Text>
                    </Link>
                    
                  </div>
                </div>
               
              </div>

              
              
        </div>
        <div ref={target} className="bg-gradient7 w-full min-h-[493px]">
                
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1256px] mt-[32px] mx-auto md:px-[20px]  w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 w-auto"
              size="txtClashGroteskVariableBold32"
            >
              Recorrido del crucero
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <Img
              className="h-auto object-cover rounded-[16px]  w-[1232px] md:w-full sm:hidden"
              src="/images/mapa_desktop.jpg"
              alt="rectangleNineteen"
            />
            <Img
              className="h-auto object-cover rounded-[16px]  w-[1232px] md:w-full hidden sm:block"
              src="/images/mapa_mobile.jpg"
              alt="rectangleNineteen"
            />
          </div>
        </div>

        <Footer/>    
            
      </div>
            
    </div>


    </>
  );
};

export default CabinsDetailsPage;



