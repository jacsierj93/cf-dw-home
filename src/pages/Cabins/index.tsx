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
import Footer from "components/Footer";

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
                
                Elige entre una cabina interior para poder desconectarte o una suite con vista panorámica al mar, y prepárate para una experiencia inolvidable. Recarga energías y regresa a la pista de baile. En nuestro crucero de música electrónica experimentaras la mejor sensación de estar en ALTA mar, donde la fiesta nunca se detiene.
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
                      src="https://i.imgur.com/L4Boasb.jpg"
                      alt="banner cabinas"
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
            
          <Footer/>
        </div>
            
      </div>


    </>
  );
};

export default CabinsPage;



