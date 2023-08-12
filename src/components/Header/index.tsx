import React from "react";

import { Img } from "components";

import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";
import { Link } from "react-router-dom";


const Header: React.FC<{}> = (props) => {
    return <>
        <div id="header" className="flex flex-row md:gap-10 items-center justify-between max-w-[1394px] mx-auto mb-[20px] md:px-5 w-full">
          <Link to="/">
            <Img
              className="h-[78px] md:h-[49px] object-cover cursor-pointer"
              src="/images/img_logocruisefestivalmesa.png"
              alt="logo_cruisefestival"
            />
          </Link>
          <C1HomeDesktopNavbar className="absolute flex sm:hidden flex-row gap-6 h-[89px] md:h-auto inset-x-[0] items-center justify-center mx-auto top-[0] w-auto" />
          <div className="flex"></div>
        </div>
    </>
}

export default Header;