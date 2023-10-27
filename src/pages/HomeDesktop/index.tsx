// @ts-nocheck
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Img, Text } from "components";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'styles/react-awesome-custom-style.css';
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import C1HomeDesktopRowcrucero from "components/C1HomeDesktopRowcrucero";
import C1HomeDesktopRowsubheading from "components/C1HomeDesktopRowsubheading";
import Header from "components/Header";
import ServicesSection from "components/ServicesSection/ServicesSection";
import Footer from "components/Footer";

export type Services = {
  subTitle: string,
  title: string,
  image: string,
  text: string,
  extraCss?:Object
}

const HomeDesktopPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('kt-widget-close', () => { 
      setShowWidget(false);
    });

   
  }, [])

  const AutoPlaySlider = withAutoplay(AwesomeSlider);

  const listServices: Services[] = [
    {
      subTitle: 'El crucero',
      title: 'Experiencia de lujo.',
      image: 'elCrucero.jpg',
      text:"¡Prepárate para una experiencia épica en alta mar! Cruise Festival es el crucero de lujo que lo tiene todo: espacios amplios, fiestas deslumbrantes y una personalidad que te dejará sin aliento. Desde elegantes restaurantes hasta bares exclusivos, cada rincón te sorprenderá. "
    },
    {
      subTitle: 'Cabinas',
      title: 'La mejor comodidad ',
      image: 'camarotes.webp',
      text:"Contamos con diversas cabinas, para que vivas esta experiencia como la quieres vivir, para que vayas con amigos a vivir la mejor experiencia de sus vidas, como también cabinas con vista panorámica para disfrutar en pareja.      ",
      
    },
    {
      subTitle: 'Beneficios',
      title: 'La Dualidad Cruise.',
      image: 'cf_dualidad.jpg',
      text:"Cruise Festival ofrece una experiencia única al combinar un emocionante festival de música con una experiencia en crucero. Todo en un ambiente festivo y exclusivo en alta mar.  ",
      
    },
    {
      subTitle: 'Fiestas y Djs Non-stop',
      title: '72 hs de diversión.',
      image: 'cf_fiesta.jpg',
      text:"¡Fiesta sin fin con DJs de alta gama! Disfruta de música vibrante, ambientes enérgicos y noches llenas de diversión ininterrumpida en alta mar. 72 hs sin parar, a todo volumen con personas como tú."
    },
    {
      subTitle: 'Spa',
      title: 'Conexión contigo mismo.',
      image: 'cf_spa.jpg',
      text:"Permítete desconectar y regalarte momentos de relax y cuidado personal en el spa de Cruise Festival, donde el lujo y la atención se fusionan en una experiencia inolvidable. No hay nada mejor que recuperarse de una fiesta en un spa de lujo. "
    },
    {
      subTitle: 'Bienestar Físico',
      title: 'Fitness & Wellness.',
      image: 'cf_gym.jpg',
      text:"En el GYM totalmente equipado podrás mantener tu cuerpo en forma. De esta manera puedes disfrutar de los destinos, las fiestas  y tu bienestar todo al mismo tiempo para así garantizar que siempre estés en alta.      "
    },
  ]

  const listMoods: Services[] = [
    {
      subTitle: 'Shows',
      title: 'Shows en vivo de los mejores Djs Nacionales e Internacionales. ',
      image: 'cf_dj_list.jpg',
      text:"¡Imagina esto! Estás a bordo de un crucero y de repente comienzas a escuchar la música de tu DJ favorito. En Cruise Festival, nada se nos escapa. "
    },
    {
      subTitle: 'Gastronomía',
      title: 'Comida Gourmet en Alta mar. ',
      image: 'cf_gastronomy.jpg',
      text:"Desde sabores internacionales hasta delicias locales, cada bocado será una explosión de sabor mientras navegas hacia destinos increíbles."
    },
    {
      subTitle: 'Drinks',
      title: '3,2,1…. SHOT',
      image: 'cf-bebidas.jpg',
      text:"Cuando hablamos de all inclusive, ES ALL INCLUSIVE, encontrarás bebidas alcohólicas y analcohólicas, la decisión es toda tuya."
    }
  ]
  const [ServicesOpen,toggleServices] = React.useState(false);
  const [showWidget, setShowWidget] = useState(false);
  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable mx-auto pt-[26px] relative w-full h-full">
        <Header/>
        <div className="relative font-clashgroteskvariable h-[694px] tablet:h-auto inset-x-[0] max-w-[1387px] mx-auto tablet:px-5 top-[0] w-full">
          
          <C1HomeDesktopImgcentral
            style={{ backgroundImage: "url('images/img_imgcentral.png')" }}
            buttontext="Reservar ahora desde USD 913 por persona."
            spantext={
              <Text className="font-bold leading-[90.00px] tablet:text-5xl text-6xl text-center text-gray-50">
                <span className="text-gray-50 font-clashgroteskvariable">
                  WELCOME TO <br />
                </span>
                <span className="text-gray-50 font-clashgroteskvariable">
                  CRUISE {" "}
                </span>
                <span className="text-lime-A700 font-clashgroteskvariable">
                  <>
                  FESTIVAL
                  </>
                </span>
              </Text>
            }
            description={
              <Text
                className="leading-[42.00px] max-w-[1124px] tablet:max-w-full mobile:text-2xl tablet:text-[26px] text-[28px] text-center text-gray-50"
                size="txtClashGroteskVariableMedium28"
              >
                Sé parte del primer festival de música electrónica a bordo de un crucero de lujo. 72 Horas NON-STOP con los mejores DJs internacionales. <span className="font-bold">Zarparás desde Buenos Aires,</span> recorriendo Punta del Este y Montevideo <span className="font-bold">la primera semana de Abril 2024.</span>
              </Text>
            }
            showWidget={setShowWidget}
          />
          <x-checkout workspace="f1b1c299-3c5f-4b76-8a22-952aa67a6255" hidden="true" active={showWidget} filter={4} onclose={() => { alert() }}></x-checkout>
        </div>


        {
          (isMobile)?
          (
            <AutoPlaySlider play={true} interval={6000} bullets={false} organic-arrow-color={'#FFF'} className="awwsld-mobile" >
              <div data-src="/images/sold_out_mobile.jpg" />
              <div data-src="/images/slide_mapa_mobile.jpg" />
            </AutoPlaySlider>
          )
          :
          (
            <AutoPlaySlider play={true} interval={6000} bullets={false} organic-arrow-color={'#FFF'}>
              <div className="flex flex-col font-clashgroteskvariable tablet:gap-10 gap-[5400px] items-center justify-start w-full mt-8 max-w-[1387px] mx-auto mt-0">
                <div
                  className="bg-contain bg-no-repeat flex flex-col h-[630px] tablet:h-auto items-center justify-center pb-[15px] px-[15px] w-full z-10"
                  style={{ backgroundImage: "url('images/img_group2.svg')" }}
                >
                  <div className="tablet:h-[400px] mobile:h-[180px] h-[615px] max-w-[1392px] mx-auto tablet:px-5 py-9 relative w-full">
                    <Img
                      className="absolute h-[527px] tablet:h-auto inset-y-[0] left-[6%] my-auto object-cover rounded-[10px] w-1/2"
                      src="images/img_rectangle1021.png"
                      alt="rectangle1021"
                    />
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[3%] w-full">
                      <Text
                        className="leading-[60.00px] left-1/4 relative mobile:text-sm tablet:text-4xl text-[70px] text-gray-50"
                        size="txtClashGroteskVariableBold100"
                      >
                        <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                          <>
                          En Alta mar,
                            <br />
                          </>
                        </span>
                        <span className="text-gray-50 font-clashgroteskvariable text-left font-normal">
                          <>
                            siéntelo todo en su <br />máxima expresión,
                            <br />
                            y mantente en alta.
                            <br />
                          </>
                        </span>
                        <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                          #
                        </span>
                        <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                        CruiseFestivalEnAlta
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div data-src="/images/sold_out_desktop.jpg" />
              <div data-src="/images/slide_mapa.jpg" />
            </AutoPlaySlider>
          )
        }
        


        
            <div className="p-[12px] max-w-[1387px] mx-auto flex flex-col items-center gap-[12px]">
               <div className="bg-gray-900 border border-gray-50 border-solid flex flex-row h-20 tablet:h-auto items-center justify-end max-w-[1372px] px-[15px] py-3 rounded w-full">
                    <div className="flex flex-row mobile:gap-10 items-center justify-between w-[63%] mobile:w-[90%]">
                      <div className="flex flex-col items-start justify-center w-auto mobile:w-full">
                        <Text
                          className="text-5xl mobile:text-[24px] tablet:text-[44px] text-center text-gray-50 w-auto"
                          size="txtClashGroteskVariableBold48"
                        >
                          <span className="text-gray-50 font-clashgroteskvariable font-bold">
                            Sobre{" "}
                          </span>
                          <span className="text-indigo-A100 font-clashgroteskvariable font-bold">
                            Cruise Festival
                          </span>
                        </Text>
                      </div>
                      <Img
                        className={`tablet:h-10 tablet:w-10 mobile:h-[24px] mobile:w-[24px] ${(ServicesOpen && 'rotate-90')}`}
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                </div>
                <div className={`rounded-full border border-white ${ServicesOpen?'px-[17px]':'px-[15px]'} cursor-pointer text-gray-50 hover:text-[#9381ff] hover:border-[#9381ff]`}
                 onClick={()=>{toggleServices(!ServicesOpen)}}>
                  <span className=" font-clashgroteskvariable text-[30px] select-none">{(ServicesOpen?'-':'+')}</span>
                </div>
            </div>

            <ServicesSection expanded={ServicesOpen}>
              {listServices.map((service, index)=>(
                (index%2 == 0)?
                (
                  <C1HomeDesktopRowcrucero
                  className="bg-gradient5  flex mobile:flex-col flex-row gap-8 items-center justify-center p-6 mobile:px-5 rounded-[10px] w-auto tablet:w-full"
                  subheading={service.subTitle}
                  description={service.text}
                  imgUrl={service.image}
                  cssImg={service.extraCss}
                  heading={
                    <Text className="font-bold mobile:text-2xl tablet:text-[26px] text-[28px] text-gray-50 w-auto">
                      <span className="text-gray-900 font-clashgroteskvariable text-left">
                      {service.title}
                      </span>
                    </Text>
                  }
                />
                ):
                (
                   <C1HomeDesktopRowsubheading
                    className="bg-gradient5  flex mobile:flex-col-reverse flex-row gap-8 items-center justify-center p-6 mobile:px-5 rounded-[10px] w-auto tablet:w-full"
                    subheading={service.subTitle}
                    descriptionTwo={service.text}
                    imgUrl={service.image}
                    cssImg={service.extraCss}
                    headingOne={
                      <Text className="font-bold mobile:text-2xl tablet:text-[26px] text-[28px] text-indigo-A100 w-auto">
                        <span className="text-gray-900 font-clashgroteskvariable text-left">
                          {service.title}
                        </span>
                      </Text>
                    }
                  />
                )
              ))}
                
                
            </ServicesSection>

            <div className={`relative w-full transition-all duration-300 ease-in-out transform pt-[30px]`}
            style={{backgroundColor:'black'}}>
              <div className="bg-no-repeat bg-contain bg-center"
              style={{backgroundImage:"url('images/CF-Figura onda expansiva.svg')"}}>
                 <div className="px-[12px] max-w-[1387px] mx-auto">
                    <Img
                    className="h-auto object-cover rounded-[12px] w-full"
                    src="images/collage_home.png"
                    alt="CruiseFestivalBanner"
                  />
                </div>
                <div className="font-clashdisplayvariable bottom-[0] bg-black flex flex-col gap-[18px] inset-x-[0] items-center justify-end mx-auto p-[18px] w-full">
                  {
                    listMoods.map((mood, index) => (
                      (index%2 === 0)?
                      (
                        <C1HomeDesktopRowsubheading
                          className="bg-gradient4  flex tablet:flex-col flex-row gap-8 items-center justify-center p-6 mobile:px-5 rounded-[10px] w-auto tablet:w-full"
                          headingOne={
                            <Text className="font-bold mobile:text-2xl tablet:text-[26px] text-[28px] text-lime-A700 w-auto">
                              <span className="text-white-A700 font-clashgroteskvariable text-left">
                                {mood.title}
                              </span>
                            </Text>
                          }
                          subheading={<Text
                            className="text-lime-A700 text-lg w-full"
                            size="txtClashDisplayVariableSemiBold18"
                          >
                            {mood.subTitle}
                          </Text>}
                          //
                          descriptionTwo={<Text
                            className="leading-[27.00px] max-w-[598px] tablet:max-w-full text-white text-lg font-normal"
                            style={{color:'#fff'}}
                            size="txtClashDisplayVariableMedium18"
                          >
                            {mood.text}
                          </Text>}
                          imgUrl={mood.image}
                        />
                      ):
                      (
                        <C1HomeDesktopRowcrucero
                          className="bg-gradient4  flex tablet:flex-col flex-row gap-8 items-center justify-center p-6 mobile:px-5 rounded-[10px] w-auto tablet:w-full"
                          heading={
                            <Text className="font-bold mobile:text-2xl tablet:text-[26px] text-[28px] text-gray-50 w-auto">
                              <span className="text-white-A700 font-clashgroteskvariable text-left">
                                {mood.title}
                              </span>
                            </Text>
                          }
                          subheading={<Text
                            className="text-lime-A700 text-lg w-full"
                            size="txtClashDisplayVariableSemiBold18"
                          >
                            {mood.subTitle}
                          </Text>}
                          description={<Text
                            className="leading-[27.00px] max-w-[598px] tablet:max-w-full text-white text-lg font-normal"
                            style={{color:'#fff'}}
                            size="txtClashDisplayVariableMedium18"
                          >
                            {mood.text}
                          </Text>}
                          imgUrl={mood.image}
                          />
                      )
                    ))
                  }
                
                  
                </div>
              </div>
            <div className="relative py-[12px] px-[24px] bg-black max-w-[1387px] mx-auto">
              <Img
                  className="h-auto object-cover w-full rounded-[12px]"
                  src="images/cf_dj.jpg"
                  alt="cruise festival lineup"
                />
            </div>

            <Footer/>
            
          </div>
            
      </div>


    </>
  );
};

export default HomeDesktopPage;



