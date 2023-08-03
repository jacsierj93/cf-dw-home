import React from "react";

import { Img } from "components";

import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";

const Header: React.FC<{}> = (props) => {
    return <>
        <div id="header" className="flex flex-row md:gap-10 items-center justify-between max-w-[1394px] mx-auto mb-[20px] md:px-5 w-full">
              <Img
                className="h-[78px] md:h-[49px] object-cover cursor-pointer"
                src="images/img_logocruisefestivalmesa.png"
                alt="logo_cruisefestival"
              />

              {/* <C1HomeDesktopNavbar className="absolute flex sm:flex-col flex-row gap-6 h-[89px] md:h-auto inset-x-[0] items-center justify-center mx-auto top-[0] w-auto" /> */}
              {/* <div className="flex sm:flex-1 sm:flex-col flex-row gap-1 items-start justify-center w-auto sm:w-full">
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
              </div> */}

              <div className="flex"></div>
            </div>
    </>
}

export default Header;