import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Text } from "components";

import { useLocation } from "react-router-dom";
import { listCabins } from "utils/lists";

type C1HomeDesktopNavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "hometext" | "cabinastext" | "lineuptext" | "influencersspontext"
>;

  const menuItems = [
    {
      item:'Home',
      tags: [''],
      to:'/',
    },
    {
      item:'Cabinas',
      tags: ['cabinas','cabina'],
      to: '/cabinas',
      subItems: listCabins.map((cabin)=> {return {item:`${cabin.name} - USD ${cabin.price}`,to:cabin.slug}})
    },
    {
      item:'Line Up',
      tags: ['lineup'],
      to: '/lineup'
    },
    // {
    //   item:'Home',
    //   tags: ['']
    // }
  ]

const C1HomeDesktopNavbar: React.FC<C1HomeDesktopNavbarProps> = (props) => {
  const fullLocation = useLocation().pathname.split('/');

  return (
    <>
      <div className={props.className}>
        {
          menuItems.map((item)=>(
            <div className="flex flex-col justify-start items-start h-[28px] overflow-hidden  bg-[#111111] hover:h-auto px-[16px] rounded-b-lg pb-[8px] mobile:items-center gap-[8px]">
              <div>
                <Text
                  className={`text-lg text-gray-50  w-auto ${(item.tags.indexOf(fullLocation[1])>=0)?'text-lime-A700':''}`}
                  size="txtClashGroteskVariableBold18"
                >
                  <Link to={item.to}>
                  {item.item}
                  </Link>
                </Text>
              </div>
              {
                (item.subItems)?
                  (
                    item.subItems.map((subitem)=>(
                        <div className="flex flex-col justify-start items-start">
                          <Text
                            className={`text-lg text-gray-50  w-full hover:text-[#9381ff] mobile:text-sm`}
                            size="txtClashGroteskVariableBold18"
                          >
                            <Link to={`/cabina/${subitem.to}`}>
                            {subitem.item}
                            </Link>
                          </Text>
                        </div>
                    ))
                  ):''
              }

            </div>


          ))
        }
      </div>
    </>
  );
};


export default C1HomeDesktopNavbar;
