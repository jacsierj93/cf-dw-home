import React from "react";

import { Button, Img, Line, Text } from "components";
import C1HomeDesktopDjcard from "components/C1HomeDesktopDjcard";
import C1HomeDesktopFooterlink from "components/C1HomeDesktopFooterlink";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";
import C1HomeDesktopRowcrucero from "components/C1HomeDesktopRowcrucero";
import C1HomeDesktopRowsubheading from "components/C1HomeDesktopRowsubheading";
import Header from "components/Header";
import ServicesSection from "components/ServicesSection/ServicesSection";

export type Services = {
  subTitle: string,
  title: string,
  image: string,
  text: string,
  extraCss?:Object
}

const HomeDesktopPage: React.FC = () => {
  const listServices: Services[] = [
    {
      subTitle: 'El crucero',
      title: 'Experiencia de lujo.',
      image: 'elCrucero.jpg',
      text:"¡Prepárate para una experiencia épica en alta mar! Cruise Festival es el crucero de lujo que lo tiene todo: espacios amplios, fiestas deslumbrantes y una personalidad que te dejará sin aliento. Desde elegantes restaurantes hasta bares exclusivos, cada rincón te sorprenderá. "
    },
    {
      subTitle: 'Camarotes',
      title: 'La mejor comodidad ',
      image: 'camarotes.webp',
      text:"Contamos con diversos camarotes, para que vivas esta experiencia como la quieres vivir, para que vayas con amigos a vivir la mejor experiencia de sus vidas, como también camarotes con vista panorámica para disfrutar en pareja.      ",
      
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
      text:"¡Fiesta sin fin con DJs de alta gama! Disfruta de música vibrante, ambientes enérgicos y noches llenas de diversión ininterrumpida en alta mar. 72 hs sin parar, a todo volúmen con personas como tú"
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
      title: 'Shows en vivo de los mejores Djs Internacionales. ',
      image: 'cf-dj.jpg',
      text:"¡Imagina esto! Estás a bordo de un crucero y de repente comienzas a escuchar la música de tu DJ favorito. En Cruise Festival, nada se nos escapa. "
    },
    {
      subTitle: 'Gastronomía',
      title: 'Comida Gourmet en Alta mar. ',
      image: 'cf-gastronomia.jpg',
      text:"Desde sabores internacionales hasta delicias locales, cada bocado será una explosión de sabor mientras navegas hacia destinos increíbles."
    },
    {
      subTitle: 'Drinks',
      title: '3,2,1…. SHOT',
      image: 'cf-bebidas.jpg',
      text:"En nuestro crucero temático podrás beber lo que quieras, desde cócteles hasta cerveza artesanal. La decisión es toda tuya. "
    }
  ]
  const [ServicesOpen,toggleServices] = React.useState(false);
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
                className="leading-[42.00px] max-w-[1124px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50"
                size="txtClashGroteskVariableMedium28"
              >
                Sé parte del primer festival de música electrónica a bordo de un crucero de lujo. 72 Horas NON-STOP con los mejores DJs internacionales. <span className="font-bold">Zarparás desde Buenos Aires,</span> recorriendo Punta del Este y Montevideo <span className="font-bold">la primera semana de Abril 2024.</span>
              </Text>
            }
          />
        </div>


        <div className="flex flex-col font-clashgroteskvariable md:gap-10 gap-[5400px] items-center justify-start w-full mt-8 max-w-[1387px] mx-auto mt-0">
              <div
                className="bg-contain bg-no-repeat flex flex-col h-[630px] md:h-auto items-center justify-center pb-[15px] px-[15px] w-full z-10"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <div className="md:h-[400px] sm:h-[180px] h-[615px] max-w-[1392px] mx-auto md:px-5 py-9 relative w-full">
                  <Img
                    className="absolute h-[527px] md:h-auto inset-y-[0] left-[6%] my-auto object-cover rounded-[10px] w-1/2"
                    src="images/img_rectangle1021.png"
                    alt="rectangle1021"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[3%] w-full">
                    <Text
                      className="leading-[60.00px] left-1/4 relative sm:text-sm md:text-4xl text-[70px] text-gray-50"
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
            <div className="p-[12px] max-w-[1387px] mx-auto">
               <div className="bg-gray-900 border border-gray-50 border-solid flex flex-row h-20 md:h-auto items-center justify-end max-w-[1372px] px-[15px] py-3 rounded w-full cursor-pointer" 
                onClick={()=>{toggleServices(!ServicesOpen)}}>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[63%] sm:w-[90%]">
                      <div className="flex flex-col items-start justify-center w-auto sm:w-full">
                        <Text
                          className="text-5xl sm:text-[24px] md:text-[44px] text-center text-gray-50 w-auto"
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
                        className="md:h-10 md:w-10 sm:h-[24px] sm:w-[24px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
            </div>

            <ServicesSection expanded={ServicesOpen}>
              {listServices.map((service, index)=>(
                (index%2 == 0)?
                (
                  <C1HomeDesktopRowcrucero
                  className="bg-gradient5  flex sm:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                  subheading={service.subTitle}
                  description={service.text}
                  imgUrl={service.image}
                  cssImg={service.extraCss}
                  heading={
                    <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                      <span className="text-gray-900 font-clashgroteskvariable text-left">
                      {service.title}
                      </span>
                      {/* <span className="text-gray-50 font-clashgroteskvariable text-left">
                        {" "}
                      </span>
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                        primer nivel
                      </span> */}
                    </Text>
                  }
                />
                ):
                (
                   <C1HomeDesktopRowsubheading
                    className="bg-gradient5  flex sm:flex-col-reverse flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                    subheading={service.subTitle}
                    descriptionTwo={service.text}
                    imgUrl={service.image}
                    cssImg={service.extraCss}
                    headingOne={
                      <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-indigo-A100 w-auto">
                        {/* <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                          Relájate{" "}
                        </span> */}
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
                    className="h-auto object-cover w-full"
                    src="images/Banner.png"
                    alt="CruiseFestivalBanner"
                  />
                </div>
                <div className="font-clashdisplayvariable bottom-[0] bg-black flex flex-col gap-[18px] inset-x-[0] items-center justify-end mx-auto p-[18px] w-full">
                  {
                    listMoods.map((mood, index) => (
                      (index%2 === 0)?
                      (
                        <C1HomeDesktopRowsubheading
                          className="bg-gradient4  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                          headingOne={
                            <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-lime-A700 w-auto">
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
                            className="leading-[27.00px] max-w-[598px] md:max-w-full text-white text-lg font-normal"
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
                          className="bg-gradient4  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                          heading={
                            <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
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
                            className="leading-[27.00px] max-w-[598px] md:max-w-full text-white text-lg font-normal"
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
            <div className="relative py-[12px] px-[24px] bg-black max-w-[1387px] mx-auto z-10">
              <Img
                  className="h-auto object-cover w-full"
                  src="images/CruiseFestivalAltoLineUp.png"
                  alt="CruiseFestivalBanner"
                />
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
                        <div className="flex flex-col items-start justify-start w-80">
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
                        {/* <Img
                          className="h-6 w-6"
                          src="images/img_socialicon.svg"
                          alt="socialicon"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_socialicon_blue_gray_300.svg"
                          alt="socialicon_One"
                        /> */}
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

export default HomeDesktopPage;



