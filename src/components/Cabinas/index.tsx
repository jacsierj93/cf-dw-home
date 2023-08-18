import React from "react";
import { Button, Img, Text, Line } from "components";
import { Link } from "react-router-dom";


interface CabinsProps {
    slug?: string,
    name: string,
    cover:string,
    images:string[],
    price:number
}

const CabinasComponent: React.FC<CabinsProps> = (props) => {

    return (
        <>
            <div className="flex mobile:flex-col flex-row items-start justify-start my-0 shadow-bs3 w-auto mobile:w-full mobile:max-w-screen-sm tablet:px-[20px]">
                <div className="relative w-[36%] mobile:w-full">
                  <Img
                    className=" m-auto object-cover rounded-bl-[12px] mobile:rounded-bl-none  rounded-tl-[12px]  mobile:rounded-tr-[12px] w-[300px] h-[268px] mobile:w-full mobile:h-full "
                    src={"images/"+props.cover}
                    alt={props.name}
                  />
                  <Button className="absolute bg-black-900_7f cursor-pointer font-medium h-8 leading-[normal] min-w-[87px] py-2 right-[2%] rounded-lg text-center text-lime-A700_9e text-xs top-[3%]">
                    {props.images.length}
                  </Button>
                </div>
                <div className="bg-black-900_02 flex flex-col font-clashgroteskvariable gap-6 items-start justify-start p-6 mobile:px-5 rounded-br-[12px] mobile:rounded-bl-[12px] rounded-tr-[12px] mobile:rounded-tr-none w-[540px] mobile:w-full">
                  <div className="flex flex-row mobile:flex-col gap-6 mobile:gap-4 items-start mobile:items-end justify-start w-full">
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-50 text-xl w-full"
                        size="txtClashGroteskVariableSemiBold20"
                      >
                        {props.name}
                      </Text>
                      <div className="flex flex-col font-montserrat gap-[17px] items-start justify-start w-auto mt-[30px] mobile:mt-0">
                        <div className="flex flex-row gap-8 mobile:gap-0 items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 mobile:gap-5 items-center justify-start w-auto">
                            <div className="flex flex-row items-start justify-start w-auto">
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_One"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Two"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Three"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Four"
                              />
                            </div>
                            <Text
                              className="text-gray-50 text-xs w-auto"
                              size="txtMontserratMedium12"
                            >
                              Estadía All Inclusive
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-8 mobile:gap-0 items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 mobile:gap-5 items-center justify-start w-auto">
                            <div className="flex flex-row items-start justify-start w-auto">
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_One"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Two"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Three"
                              />
                              <Img
                                className="h-4 w-4"
                                src="images/img_star.svg"
                                alt="star_Four"
                              />
                            </div>
                            <Text
                              className="text-gray-50 text-xs w-auto"
                              size="txtMontserratMedium12"
                            >
                              All Inclusive Drinks {(props.slug == 'cruise-festival-suite-vip')?' En ALTA':''}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start w-auto">
                      <Text
                        className="text-lime-A700_9e text-sm mobile:text-right w-full"
                        size="txtClashDisplayVariableMedium14"
                      >
                        Desde
                      </Text>
                      <Text
                        className="text-[22px] text-purple-600 text-right mobile:text-xl w-auto"
                        size="txtMontserratBold24"
                      >
                        <span className="text-indigo-A100 font-clashgroteskvariable font-bold text-left">
                          USD {props.price}
                        </span>
                        {/* <span className="text-indigo-A100 font-clashgroteskvariable text-sm font-bold">
                          
                        </span> */}
                      </Text>
                      <Text
                        className="text-lime-A700_9e mobile:text-right text-sm w-full "
                        size="txtClashDisplayVariableMedium14"
                      >
                        por persona
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-lime-A700_71 h-px w-full" />
                  <div className="flex flex-col font-clashdisplayvariable items-start justify-start w-[492px] mobile:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                        <Link to={`/cabina/${props.slug}`} className="w-full">
                            <Button className="bg-lime-A700 cursor-pointer font-medium h-12 py-[15px] rounded text-black-900 text-center text-sm w-full">
                                
                                    Más detalles
                               
                            </Button>
                         </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default CabinasComponent;