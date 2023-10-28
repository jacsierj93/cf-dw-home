// @ts-nocheck
import React from "react";
import { Img, Text, List } from "components";
import "react-awesome-slider/dist/styles.css";
import "styles/react-awesome-custom-style.css";
import C1HomeDesktopImgcentral from "components/C1HomeDesktopImgcentral";
import Header from "components/Header";
import Footer from "components/Footer";
import SponsorSquareComponent from "../../components/SponsorSquare";
const SponsorsPage: React.FC = () => {

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
                className="leading-[90.00px] tablet:text-5xl text-6xl text-gray-50 w-full"
                size="txtClashGroteskVariableBold60"
              >
                    <span className="text-lime-A700 font-clashgroteskvariable text-left font-bold">
                      <>
                        Eventos especiales <br />
                      </>
                    </span>
                <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                      con nuestros embajadores a bordo
                    </span>
              </Text>
            }
            description={
              <Text
                className="leading-[42.00px] mobile:text-2xl tablet:text-[26px] text-[28px] text-gray-50 w-full"
                size="txtClashGroteskVariableMedium28"
              >
                Únete a nuestras celebridades a bordo del crucero y
                experimenta una serie de eventos especiales exclusivos.
              </Text>
            }
          />
        </div>

        <div className="flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto w-full bg-gradient8 pt-[32px] px-[16px]">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start max-w-[1392px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start max-w-[1146px] w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-deep_orange-A400 sm:text-lg md:text-xl w-full"
                      size="txtClashDisplayVariableSemiBold22"
                    >
                      Embajadores
                    </Text>
                    <Text
                      className="leading-[72.00px] max-w-[1146px] tablet:max-w-full text-5xl mobile:text-[38px] tablet:text-[44px] text-gray-300"
                      size="txtClashGroteskVariableBold48"
                    >
                              <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                                ¡Descubre a los{" "}
                              </span>
                      <span className="text-deep_orange-A400 font-clashgroteskvariable text-left font-bold">
                                embajadores más hot
                              </span>
                      <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                                {" "}
                        que estarán a bordo de nuestro crucero!
                              </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full items-center justify-center w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="w-full overflow-auto desktop:hidden tablet:hidden mobile:block">

                    <div className="w-[750vw] flex flex-row gap-[8px]">
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_360x390.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_1.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_2.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_3.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_744x389.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_360x389.png')",
                        }}
                      />
                      <SponsorSquareComponent
                        bgImage={{
                          backgroundImage:
                            "url('images/img_teammember_744x803.png')",
                        }}
                      />
                    </div>
                  </div>
                  <div id="grid-sponsor" className="flex flex-col gap-6 items-center justify-start w-full mobile:hidden" >
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[744px] items-center justify-end pt-[430px] rounded-[20px] w-[66%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_teammember.png')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-center max-w-[802px] pb-6 pt-24 sm:px-5 px-6 w-full">
                          <div className="bg-gray-900 flex flex-col gap-3 items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                  size="txtClashGroteskVariableBold24"
                                >
                                  Nombre y apellido
                                </Text>
                              </div>
                              <div className="flex flex-col gap-1 items-start justify-start w-full">
                                <Text
                                  className="text-gray-50 text-lg w-full"
                                  size="txtClashGroteskVariableSemiBold18"
                                >
                                  Sub título
                                </Text>
                                <Text
                                  className="text-gray-50 text-lg w-full"
                                  size="txtClashGroteskVariableSemiBold18"
                                >
                                  Descripción tal como cantidad de
                                  seguidores, nicho, etc.
                                </Text>
                              </div>
                            </div>
                            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_socialicon.svg"
                                alt="socialicon"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_facebook.svg"
                                alt="facebook"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_instagram.svg"
                                alt="instagram"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-6 w-[33%]"
                        orientation="vertical"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[360px] items-center justify-start my-0 pt-[113px] rounded-[20px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_teammember_360x390.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                            <div className="bg-gray-900 flex flex-col items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                    size="txtClashGroteskVariableBold24"
                                  >
                                    Nombre y apellido
                                  </Text>
                                </div>
                                <Text
                                  className="text-gray-50 text-lg w-full"
                                  size="txtClashGroteskVariableSemiBold18"
                                >
                                  Sub título
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[360px] items-center justify-end my-0 pt-[113px] rounded-[20px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_teammember_1.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                            <div className="bg-gray-900 flex flex-col items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                    size="txtClashGroteskVariableBold24"
                                  >
                                    Nombre y apellido
                                  </Text>
                                </div>
                                <Text
                                  className="text-gray-50 text-lg w-full"
                                  size="txtClashGroteskVariableSemiBold18"
                                >
                                  Sub título
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[32%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[744px] items-center justify-end pt-[403px] rounded-[20px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_teammember_744x389.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                            <div className="bg-gray-900 flex flex-col gap-3 items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                    size="txtClashGroteskVariableBold24"
                                  >
                                    Nombre y apellido
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-1 items-start justify-start w-full">
                                  <Text
                                    className="text-gray-50 text-lg w-full"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Sub título
                                  </Text>
                                  <Text
                                    className="leading-[27.00px] max-w-[301px] md:max-w-full text-gray-50 text-lg"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Descripción tal como cantidad de
                                    seguidores, nicho, etc.
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-5 items-center justify-start w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_socialicon.svg"
                                  alt="socialicon_One"
                                />
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_facebook.svg"
                                  alt="facebook_One"
                                />
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_instagram.svg"
                                  alt="instagram_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[360px] items-center justify-end pt-[113px] rounded-[20px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_teammember_360x389.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                            <div className="bg-gray-900 flex flex-col items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                    size="txtClashGroteskVariableBold24"
                                  >
                                    Nombre y apellido
                                  </Text>
                                </div>
                                <Text
                                  className="text-gray-50 text-lg w-full"
                                  size="txtClashGroteskVariableSemiBold18"
                                >
                                  Sub título
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[67%] md:w-full">
                        <List
                          className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                          orientation="horizontal"
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 flex-col h-[360px] items-center justify-end sm:ml-[0] pt-[113px] rounded-[20px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_teammember_2.png')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                              <div className="bg-gray-900 flex flex-col items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                      size="txtClashGroteskVariableBold24"
                                    >
                                      Nombre y apellido
                                    </Text>
                                  </div>
                                  <Text
                                    className="text-gray-50 text-lg w-full"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Sub título
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 flex-col h-[360px] items-center justify-end sm:ml-[0] pt-[113px] rounded-[20px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_teammember_3.png')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center pb-6 pt-24 sm:px-5 px-6 w-auto sm:w-full">
                              <div className="bg-gray-900 flex flex-col items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                      size="txtClashGroteskVariableBold24"
                                    >
                                      Nombre y apellido
                                    </Text>
                                  </div>
                                  <Text
                                    className="text-gray-50 text-lg w-full"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Sub título
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[744px] items-center justify-end pt-[430px] rounded-[20px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_teammember_744x803.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center max-w-[803px] pb-6 pt-24 sm:px-5 px-6 w-full">
                            <div className="bg-gray-900 flex flex-col gap-3 items-start justify-start outline outline-[2px] outline-red-A400 px-5 py-6 rounded-[20px] w-full">
                              <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-50 sm:text-xl w-auto"
                                    size="txtClashGroteskVariableBold24"
                                  >
                                    Nombre y apellido
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-1 items-start justify-start w-full">
                                  <Text
                                    className="text-gray-50 text-lg w-full"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Sub título
                                  </Text>
                                  <Text
                                    className="text-gray-50 text-lg w-full"
                                    size="txtClashGroteskVariableSemiBold18"
                                  >
                                    Descripción tal como cantidad de
                                    seguidores, nicho, etc.
                                  </Text>
                                </div>
                              </div>
                              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_socialicon.svg"
                                  alt="socialicon_Two"
                                />
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_facebook.svg"
                                  alt="facebook_Two"
                                />
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_instagram.svg"
                                  alt="instagram_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1387px] w-full ">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-indigo-A100 mobile:text-lg tablet:text-xl w-full"
                      size="txtClashDisplayVariableSemiBold22IndigoA100"
                    >
                      Sponsors
                    </Text>
                    <Text
                      className="leading-[72.00px] max-w-[1146px] tablet:max-w-full text-5xl mobile:text-[38px] tablet:text-[44px] text-gray-300"
                      size="txtClashGroteskVariableBold48"
                    >
                              <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                                Agradecemos a nuestros
                              </span>
                      <span className="text-gray-300 font-clashgroteskvariable text-left font-bold">
                                {" "}
                              </span>
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                                sponsors
                              </span>
                      <span className="text-gray-300 font-clashgroteskvariable text-left font-bold">
                                {" "}
                              </span>
                      <span className="text-gray-50 font-clashgroteskvariable text-left font-bold">
                                por hacer posible este{" "}
                              </span>
                      <span className="text-indigo-A100 font-clashgroteskvariable text-left font-bold">
                                crucero épico de fiesta electrónica
                              </span>
                      <span className="text-gray-300 font-clashgroteskvariable text-left font-bold">
                                .
                              </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-auto desktop:hidden tablet:hidden mobile:block">
            <div className="w-[750vw] flex flex-row gap-[8px]">
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_250x250.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>

              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_250x250.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_1.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">

                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_100x100.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>

              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_80x80.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_2.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">
                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_3.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">

                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_4.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 items-center justify-center p-3 rounded-[20px] w-[95vw] h-[95vw]">

                <Img
                  className="h-auto object-cover rounded-[40px] w-[50%]"
                  src="images/img_avatar_4.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                    size="txtClashGroteskVariableBold28"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                    size="txtClashDisplayVariableSemiBold22IndigoA100"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-center justify-center max-w-[1409px] p-3 w-full  mobile:hidden">
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1392px] w-full"
                orientation="horizontal"
              >
                <div className="bg-indigo-A100_7f flex sm:flex-1 flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                      size="txtClashGroteskVariableBold28"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                      size="txtClashDisplayVariableSemiBold22IndigoA100"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo-A100_7f flex sm:flex-1 flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar_250x250.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                      size="txtClashGroteskVariableBold28"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                      size="txtClashDisplayVariableSemiBold22IndigoA100"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo-A100_7f flex sm:flex-1 flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar_1.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50 w-full"
                      size="txtClashGroteskVariableBold28"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-[22px] text-center text-indigo-A100 sm:text-lg md:text-xl w-full"
                      size="txtClashDisplayVariableSemiBold22IndigoA100"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1393px] w-full"
                orientation="horizontal"
              >
                <div className="bg-indigo-A100_7f flex flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-50 text-xl w-full"
                      size="txtClashGroteskVariableBold20"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-base text-center text-indigo-A100 w-full"
                      size="txtClashDisplayVariableSemiBold16"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo-A100_7f flex flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar_250x250.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-50 text-xl w-full"
                      size="txtClashGroteskVariableBold20"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-base text-center text-indigo-A100 w-full"
                      size="txtClashDisplayVariableSemiBold16"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo-A100_7f flex flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar_1.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-50 text-xl w-full"
                      size="txtClashGroteskVariableBold20"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-base text-center text-indigo-A100 w-full"
                      size="txtClashDisplayVariableSemiBold16"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo-A100_7f flex flex-col gap-5 h-auto items-center justify-center p-3 rounded-[20px] w-full">
                  <Img
                    className="h-auto object-cover rounded-[40px] w-full"
                    src="images/img_avatar_100x100.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-gray-50 text-xl w-full"
                      size="txtClashGroteskVariableBold20"
                    >
                      Nombre sponsor
                    </Text>
                    <Text
                      className="text-base text-center text-indigo-A100 w-full"
                      size="txtClashDisplayVariableSemiBold16"
                    >
                      Lorem ipsum
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1409px] w-full"
              orientation="horizontal"
            >
              <div className="bg-indigo-A100_7f flex flex-col gap-5 h-[196px] md:h-auto items-center justify-start p-3 rounded-[20px] w-full">
                <Img
                  className="h-20 rounded-[50%]"
                  src="images/img_avatar_80x80.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-gray-50 text-lg w-full"
                    size="txtClashGroteskVariableBold18"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-A100 w-full"
                    size="txtClashDisplayVariableSemiBold16"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 h-[196px] md:h-auto items-center justify-start p-3 rounded-[20px] w-full">
                <Img
                  className="h-20 rounded-[50%]"
                  src="images/img_avatar_2.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-gray-50 text-lg w-full"
                    size="txtClashGroteskVariableBold18"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-A100 w-full"
                    size="txtClashDisplayVariableSemiBold16"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 h-[196px] md:h-auto items-center justify-start p-3 rounded-[20px]">
                <Img
                  className="h-20 rounded-[50%]"
                  src="images/img_avatar_3.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-gray-50 text-lg w-full"
                    size="txtClashGroteskVariableBold18"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-A100 w-full"
                    size="txtClashDisplayVariableSemiBold16"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 h-[196px] md:h-auto items-center justify-start p-3 rounded-[20px] w-full">
                <Img
                  className="h-20 rounded-[50%]"
                  src="images/img_avatar_4.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-gray-50 text-lg w-full"
                    size="txtClashGroteskVariableBold18"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-A100 w-full"
                    size="txtClashDisplayVariableSemiBold16"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A100_7f flex flex-col gap-5 h-[196px] md:h-auto items-center justify-start p-3 rounded-[20px] w-full">
                <Img
                  className="h-20 rounded-[50%]"
                  src="images/img_avatar_4.png"
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-gray-50 text-lg w-full"
                    size="txtClashGroteskVariableBold18"
                  >
                    Nombre sponsor
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-A100 w-full"
                    size="txtClashDisplayVariableSemiBold16"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>

        <Footer />


      </div>


    </>
  );
};

export default SponsorsPage;



