import React, { useState } from "react";

import { Img } from "components";

import C1HomeDesktopNavbar from "components/C1HomeDesktopNavbar";
import { Link } from "react-router-dom";



const Header: React.FC<{}> = (props) => {
  const [isMenuMobileOpen,setMenuMobileOpen] = useState(false);
  const toogleMenu = (state:boolean)=>{
    setMenuMobileOpen(state)
  }
  return <>
      <div id="header" className="flex flex-row tablet:gap-10 items-center justify-between max-w-[1394px] mx-auto mb-[20px] tablet:px-5 w-full">
        <Link to="/">
          <Img
            className="h-[78px] tablet:h-[49px] object-cover cursor-pointer"
            src="/images/img_logocruisefestivalmesa.png"
            alt="logo_cruisefestival"
          />
        </Link>
        <C1HomeDesktopNavbar className={`relative flex grow flex-row gap-6 h-[28px] tablet:h-auto inset-x-[0] items-start  mobile:items-center justify-center mx-auto top-[0] w-auto z-20 mobile:flex-col mobile:width-2/3 mobile:ml-0 mobile:mt-[80px] mobile:py-[20px] mobile:rounded-b-[12px] mobile:absolute mobile:bg-gray-900 ${(!isMenuMobileOpen)?'mobile:hidden':''}`} />
        <div className="flex grow justify-end">
          <div className="hidden mobile:block">
            <button className="navbar-burger flex items-center text-lime-A700 p-3" onClick={()=>toogleMenu(!isMenuMobileOpen)}>
              <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
  </>
}

export default Header;