import React from "react";

import { Button, Img, Line, Text } from "components";
import C1HomeDesktopDjcard from "components/C1HomeDesktopDjcard";
import C1HomeDesktopFooterlink from "components/C1HomeDesktopFooterlink";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";
import C1HomeDesktopRowcrucero from "components/C1HomeDesktopRowcrucero";
import C1HomeDesktopRowsubheading from "components/C1HomeDesktopRowsubheading";

const HomeDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-clashdisplayvariable h-[9526px] mx-auto pt-[11px] relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[635px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1394px] mx-auto md:px-5 w-full">
              <Img
                className="h-[78px] md:h-auto object-cover"
                src="images/img_logocruisefestivalmesa.png"
                alt="logocruisefesti"
              />
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-1 items-start justify-center w-auto sm:w-full">
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="flex flex-col items-start justify-center sm:px-5 px-6 py-3 w-[196px]">
                    <Text
                      className="text-base text-lime-A700 w-auto"
                      size="txtClashDisplayVariableMedium16"
                    >
                      Ingresar
                    </Text>
                  </div>
                </div>
                <Button className="bg-lime-A700 cursor-pointer font-medium py-3.5 rounded-lg text-base text-black-900 text-center w-[196px]">
                  Registrarme
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-clashgroteskvariable md:gap-10 gap-[5400px] items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[630px] items-center justify-start pb-[15px] px-[15px] w-full"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <div className="md:h-[527px] h-[615px] max-w-[1392px] mx-auto md:px-5 py-9 relative w-full">
                  <Img
                    className="absolute h-[527px] inset-y-[0] left-[6%] my-auto object-cover rounded-[10px] w-1/2"
                    src="images/img_rectangle1021.png"
                    alt="rectangle1021"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[3%] w-full">
                    <Text
                      className="leading-[90.00px] left-1/4 relative md:text-5xl text-[100px] text-gray-50"
                      size="txtClashGroteskVariableBold100"
                    >
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                        <>
                          En alta mar.
                          <br />
                        </>
                      </span>
                      <span className="text-gray-50 font-clashgroteskvariable text-left font-normal">
                        <>
                          Con alta música.
                          <br />
                          En alta fiesta.
                          <br />
                        </>
                      </span>
                      <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                        #
                      </span>
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                        EnAlta
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="sm:h-[2098px] h-[2767px] md:h-[4122px] md:px-5 relative w-full">
                <Img
                  className="absolute bottom-[1%] h-[786px] inset-x-[0] mx-auto object-cover"
                  src="images/img_bgfiguraonda.png"
                  alt="bgfiguraonda"
                />
                <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-center max-w-[1392px] mx-auto top-[0] w-full">
                  <div className="flex flex-col items-center justify-center max-w-[1346px] p-4 w-full">
                    <div className="flex flex-col h-[2094px] md:h-auto items-center justify-start max-w-[1345px] w-full">
                      <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[90%]">
                        {new Array(8).fill({}).map((props, index) => (
                          <React.Fragment key={`C1HomeDesktopDjcard${index}`}>
                            <C1HomeDesktopDjcard
                              className="bg-gradient  flex flex-col gap-4 items-center justify-center p-6 sm:px-5 rounded-[20px] w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_orange-A400 flex flex-col font-clashdisplayvariable items-end justify-start p-[22px] sm:px-5 rounded w-[33%] md:w-full">
                    <div className="flex flex-col items-center justify-start mr-[92px] w-[45%] md:w-full">
                      <div className="flex flex-row gap-1 items-center justify-center w-auto">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtClashDisplayVariableMedium16WhiteA700"
                        >
                          Explora el line up
                        </Text>
                        <Img
                          className="h-6 w-[26px]"
                          src="images/img_firrarrowright.svg"
                          alt="firrarrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col font-inter md:gap-10 gap-16 h-[466px] md:h-auto inset-x-[0] items-center justify-end max-w-[1440px] mx-auto pb-12 pt-16 w-full">
                  <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-[28%] md:w-full">
                          <Img
                            className="h-[95px] md:h-auto object-cover w-full"
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
                        <div className="flex sm:flex-col flex-row gap-8 items-start justify-end w-full">
                          <C1HomeDesktopFooterlink className="flex flex-col gap-2 items-center justify-start w-auto" />
                          <C1HomeDesktopFooterlink
                            className="flex flex-col gap-2 items-center justify-start w-auto"
                            buttontext="Cabinas"
                          />
                          <C1HomeDesktopFooterlink
                            className="flex flex-col gap-2 items-center justify-start w-auto"
                            buttontext="Line Up"
                          />
                          <C1HomeDesktopFooterlink
                            className="flex flex-col gap-2 items-center justify-start w-auto"
                            buttontext="Influencers"
                          />
                          <C1HomeDesktopFooterlink
                            className="flex flex-col gap-2 items-center justify-start w-auto"
                            buttontext="Sponsors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start sm:px-5 px-8 w-auto md:w-full">
                    <Line className="bg-gray-900_01 h-px w-full" />
                    <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-full">
                      <Text
                        className="flex-1 text-base text-blue_gray-300 w-auto"
                        size="txtInterRegular16Bluegray300"
                      >
                        © Uxability World. Todos los derechos reservados
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <Img
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
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-clashgroteskvariable h-[694px] md:h-[704px] inset-x-[0] max-w-[1387px] mx-auto md:px-5 top-[0] w-full">
          <C1HomeDesktopNavbar className="absolute flex sm:flex-col flex-row gap-6 h-[89px] md:h-auto inset-x-[0] items-center justify-center mx-auto top-[0] w-auto" />
          <C1HomeDesktopImgcentral
            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[607px] md:h-auto inset-x-[0] items-center justify-center max-w-[1387px] mx-auto p-[150px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_imgcentral.png')" }}
            spantext={
              <Text className="font-bold leading-[90.00px] md:text-5xl text-6xl text-center text-gray-50">
                <span className="text-gray-50 font-clashgroteskvariable">
                  Disfruta de{" "}
                </span>
                <span className="text-lime-A700 font-clashgroteskvariable">
                  <>
                    DJs de talla mundial <br />
                  </>
                </span>
                <span className="text-gray-50 font-clashgroteskvariable">
                  en un solo crucero
                </span>
              </Text>
            }
          />
        </div>
        <div className="absolute font-clashgroteskvariable sm:h-[2449px] h-[2458px] md:h-[3981px] inset-x-[0] mx-auto md:px-5 top-[14%] w-full">
          <div className="md:h-[2449px] h-[2458px] m-auto w-full">
            <div className="absolute md:h-[2449px] h-[2458px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                  <div className="bg-gray-900 border border-gray-50 border-solid flex flex-row h-20 md:h-auto items-center justify-end max-w-[1372px] px-[15px] py-3 rounded w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[63%]">
                      <div className="flex flex-col items-start justify-center w-auto sm:w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-50 w-auto"
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
                        className="h-10 w-10"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient2  h-[2327px] w-full"></div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[1133px] left-[0] object-cover"
                src="images/img_bgfiguraonda.png"
                alt="bgfiguraonda_One"
              />
            </div>
            <Img
              className="absolute h-[1109px] object-cover right-[0] top-[1%]"
              src="images/img_bgfiguraonda.png"
              alt="bgfiguraonda_Two"
            />
          </div>
          <div className="absolute bottom-[1%] flex flex-col font-clashdisplayvariable gap-6 inset-x-[0] items-center justify-start mx-auto w-[97%]">
            <div className="flex flex-col gap-2 h-[116px] md:h-auto items-start justify-start max-w-[1392px] w-full">
              <div className="flex flex-col h-full items-center justify-start w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold22"
                >
                  Una experiencia para toda la vida
                </Text>
              </div>
              <div className="flex flex-col font-clashgroteskvariable items-center justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
                  size="txtClashGroteskVariableBold48Black90001"
                >
                  Una aventura de lujo, relajación y diversión sin igual
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-start w-[92%] md:w-full">
              <C1HomeDesktopRowcrucero
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                heading={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      Experiencia de
                    </span>
                    <span className="text-gray-50 font-clashgroteskvariable text-left">
                      {" "}
                    </span>
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      primer nivel
                    </span>
                  </Text>
                }
              />
              <C1HomeDesktopRowsubheading
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                headingOne={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-indigo-A100 w-auto">
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      Relájate{" "}
                    </span>
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      con la brisa del mar
                    </span>
                  </Text>
                }
              />
              <C1HomeDesktopRowcrucero
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                heading={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      Experiencia de
                    </span>
                    <span className="text-gray-50 font-clashgroteskvariable text-left">
                      {" "}
                    </span>
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      primer nivel
                    </span>
                  </Text>
                }
                description="Lorem ipsum dolor sit amet consectetur. Habitant lacus faucibus mattis diam natoque ut. Arcu ipsum elit molestie nullam turpis cursus in eu velit. Amet mi nibh faucibus amet et nunc tellus. Egestas eu ut molestie nibh quis dignissim etiam convallis vivamus."
              />
              <C1HomeDesktopRowsubheading
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                headingOne={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-lime-A700 w-auto">
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      Comida gourmet{" "}
                    </span>
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      en alta mar
                    </span>
                  </Text>
                }
                subheading="Gastronomía"
                descriptionTwo="Lorem ipsum dolor sit amet consectetur. Lorem vel faucibus nisl nisl. Vulputate facilisis habitasse lacus orci sollicitudin. Ut pellentesque amet sed massa hendrerit. Ipsum vitae amet cursus auctor auctor molestie nibh."
              />
              <C1HomeDesktopRowcrucero
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                heading={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      Experiencia de
                    </span>
                    <span className="text-gray-50 font-clashgroteskvariable text-left">
                      {" "}
                    </span>
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      primer nivel
                    </span>
                  </Text>
                }
                description="Lorem ipsum dolor sit amet consectetur. Risus pellentesque aliquam interdum nisi vitae diam non. Tincidunt tempus ut suspendisse ut vitae eleifend pellentesque vel. Lacus sit nibh nibh magnis bibendum massa iaculis. Sit integer commodo lorem tempor enim varius gravida tempus."
              />
              <C1HomeDesktopRowsubheading
                className="bg-gradient1  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                headingOne={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-lime-A700 w-auto">
                    <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                      Comida gourmet{" "}
                    </span>
                    <span className="text-gray-900 font-clashgroteskvariable text-left">
                      en alta mar
                    </span>
                  </Text>
                }
                subheading="Gastronomía"
                descriptionTwo="Lorem ipsum dolor sit amet consectetur. Varius blandit egestas semper tempor sit. Aliquam leo risus tristique risus lobortis augue. Massa consectetur a mi lorem quam mauris eget vulputate tempor. Et sed praesent molestie fermentum arcu id fusce purus."
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[29%] flex flex-col font-tanker gap-8 inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start max-w-[1252px] mx-auto md:px-5 w-full">
              <div className="md:h-[1734px] h-[863px] relative w-full">
                <div className="md:h-[1734px] h-[863px] m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[55%] md:w-full">
                        <Img
                          className="h-[462px] md:h-auto object-cover rounded-[20px] w-full"
                          src="images/img_pool11.png"
                          alt="poolEleven"
                        />
                        <Img
                          className="h-[379px] md:h-auto object-cover rounded-[20px] w-full"
                          src="images/img_goa1.png"
                          alt="goaOne"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start w-[45%] md:w-full">
                        <Img
                          className="h-[418px] md:h-auto object-cover w-full"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
                        <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                          <Img
                            className="h-[418px] md:h-auto object-cover rounded-[20px]"
                            src="images/img_comidacrucero.png"
                            alt="comidacrucero"
                          />
                          <Img
                            className="h-[418px] md:h-auto object-cover rounded-[20px]"
                            src="images/img_mujerfelizsen.png"
                            alt="mujerfelizsen"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute h-max inset-[0] justify-center leading-[150.00px] m-auto md:text-5xl text-[150px] text-white-A700"
                    size="txtTankerRegular150"
                  >
                    <>
                      PRENDETE
                      <br />
                      AL FESTIVAL.
                    </>
                  </Text>
                </div>
                <Img
                  className="absolute h-[182px] right-[18%] top-[21%] w-[181px]"
                  src="images/img_figuraestrellamesa.svg"
                  alt="figuraestrellam"
                />
              </div>
            </div>
            <div className="font-clashdisplayvariable sm:h-[1018px] h-[1071px] md:h-[1588px] md:px-5 relative w-full">
              <div className="absolute bg-gradient3  bottom-[0] flex flex-col gap-[18px] inset-x-[0] items-center justify-end mx-auto p-[18px] w-full">
                <C1HomeDesktopRowsubheading
                  className="bg-gradient4  flex md:flex-col flex-row gap-8 items-center justify-center mt-[286px] p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                  headingOne={
                    <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-lime-A700 w-auto">
                      <span className="text-white-A700 font-clashgroteskvariable text-left">
                        Comida gourmet
                      </span>
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left">
                        {" "}
                      </span>
                      <span className="text-lime-A700 font-clashgroteskvariable text-left">
                        en alta mar
                      </span>
                    </Text>
                  }
                  subheading="Gastronomía"
                  descriptionTwo="Lorem ipsum dolor sit amet consectetur. Natoque eu ac facilisis eget viverra a et in tortor. Ullamcorper ut facilisis ut nulla sed. Nec neque consectetur fermentum non. Congue consectetur et nulla sed pellentesque sagittis amet tempus."
                />
                <C1HomeDesktopRowcrucero
                  className="bg-gradient4  flex md:flex-col flex-row gap-8 items-center justify-center p-6 sm:px-5 rounded-[10px] w-auto md:w-full"
                  heading={
                    <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                      <span className="text-white-A700 font-clashgroteskvariable text-left">
                        Experiencia de
                      </span>
                      <span className="text-gray-50 font-clashgroteskvariable text-left">
                        {" "}
                      </span>
                      <span className="text-lime-A700 font-clashgroteskvariable text-left">
                        primer nivel
                      </span>
                    </Text>
                  }
                  description="Lorem ipsum dolor sit amet consectetur. Metus rutrum et est tellus cursus. Dolor egestas faucibus euismod at id augue aliquam in. Turpis eleifend convallis accumsan adipiscing amet luctus mi cursus. Tincidunt at id sit semper risus mauris ipsum."
                />
              </div>
              <C1HomeDesktopRowcrucero
                className="absolute bg-gradient4  flex md:flex-col flex-row gap-8 inset-x-[0] items-center justify-center mx-auto p-6 sm:px-5 rounded-[10px] top-[0] w-auto"
                heading={
                  <Text className="font-bold sm:text-2xl md:text-[26px] text-[28px] text-gray-50 w-auto">
                    <span className="text-white-A700 font-clashgroteskvariable text-left">
                      Experiencia de
                    </span>
                    <span className="text-gray-50 font-clashgroteskvariable text-left">
                      {" "}
                    </span>
                    <span className="text-lime-A700 font-clashgroteskvariable text-left">
                      primer nivel
                    </span>
                  </Text>
                }
                description="Lorem ipsum dolor sit amet consectetur. Fermentum nam felis venenatis nulla gravida. Sed mauris faucibus in mattis enim at ut tempus risus. Nec iaculis ornare adipiscing posuere. Amet porttitor nisl non at hac ac sed."
              />
            </div>
            <div className="h-[668px] max-w-[1255px] mx-auto md:px-5 relative w-full">
              <div className="h-[668px] m-auto w-full">
                <Img
                  className="absolute h-[667px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                  src="images/img_wikipediaspaceibiza03.png"
                  alt="wikipediaspacei"
                />
                <Img
                  className="absolute h-[668px] inset-[0] justify-center m-auto"
                  src="images/img_group2.svg"
                  alt="figuracolores3m"
                />
              </div>
              <Img
                className="absolute h-[272px] inset-[0] justify-center m-auto object-cover w-[77%]"
                src="images/img_logocruisefestivalmesa.png"
                alt="logocruisefesti_Two"
              />
            </div>
          </div>
          <div className="flex flex-col font-clashdisplayvariable gap-[9px] h-[180px] md:h-auto items-start justify-start max-w-[1392px] md:px-5 w-full">
            <div className="flex flex-col h-full items-center justify-start w-full">
              <Text
                className="text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold22DeeporangeA400"
              >
                Cruise Festival
              </Text>
            </div>
            <div className="flex flex-col font-clashgroteskvariable items-center justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50"
                size="txtClashGroteskVariableBold48"
              >
                <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                  Alta experiencia only means one thing:{" "}
                </span>
                <span className="text-deep_orange-A400 font-clashgroteskvariable text-left font-bold">
                  ALTO LINE UP
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDesktopPage;
