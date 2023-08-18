import React, { useEffect } from "react";

import { Img, Text, List } from "components";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import CabinasComponent from "components/Cabinas";
import Header from "components/Header";
import { listCabins } from "utils/lists";
import Footer from "components/Footer";

const CabinsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable mx-auto pt-[26px] relative w-full h-full">
        <Header/>
        <div className="relative font-clashgroteskvariable h-[694px] tablet:h-auto inset-x-[0] max-w-[1387px] mx-auto tablet:px-5 top-[0] w-full">
          
          <C1HomeDesktopImgcentral
            className="relative bg-cover bg-no-repeat bottom-[0] flex flex-col h-full inset-x-[0] items-center justify-center max-w-[1387px] mx-auto lg:p-[150px] tablet:px-10 mobile:px-5 w-full"
            style={{ backgroundImage: "url('images/img_imgcentral.png')" }}
            buttontext={false}
            spantext={
              <Text className="font-bold leading-[90.00px] tablet:text-5xl text-6xl text-center text-gray-50">
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
                className="leading-[42.00px] max-w-[1124px] tablet:max-w-full mobile:text-2xl tablet:text-[26px] text-[28px] text-center text-gray-50"
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
          <div className="w-full">
            <Img src="images/ondas_cabins.svg"
                className=" absolute top-[40px] object-cover tablet:w-[50%] mobile:w-[70%] desktop:hidden "
                />
            <Img src="images/ondas_cabin2.svg"
                className="absolute top-[40px] tablet:top-1/3 mobile:1/2 object-cover w-full"
                />
            
            <div className="flex flex-row gap-[18px] items-start justify-center w-full bg-gradient6 py-[54px] z-10">
              <div className="flex flex-col gap-10 h-[416px] tablet:h-auto items-start justify-between mb-[470px] p-3 w-[435px] tablet:hidden ">
                  
                  <div className="flex flex-col">
                    <Img
                      className="mx-auto object-cover z-10"
                      src="https://i.imgur.com/ex3uDLC.png"
                      alt="banner cabinas"
                    />
                  </div>
              </div>
              <List
                className="flex flex-col gap-6 items-start tablet:w-full items-center z-10"
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



