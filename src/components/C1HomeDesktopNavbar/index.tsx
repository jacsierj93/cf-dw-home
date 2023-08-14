import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Text } from "components";

import { useLocation } from "react-router-dom";

type C1HomeDesktopNavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "hometext" | "cabinastext" | "lineuptext" | "influencersspontext"
>;

  const menuItems = [
    {
      item:'Home',
      tags: [''],
      to:'/'
    },
    {
      item:'Cabinas',
      tags: ['cabinas','cabina'],
      to: '/cabinas'
    },
    // {
    //   item:'Home',
    //   tags: ['']
    // },
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
            
          <Text
            className={`text-lg text-gray-50  w-auto ${(item.tags.indexOf(fullLocation[1])>=0)?'text-lime-A700':''}`}
            size="txtClashGroteskVariableBold18"
          >
            <Link to={item.to}>
            {item.item}
            </Link>
          </Text>
          ))
        }
      </div>
    </>
  );
};


export default C1HomeDesktopNavbar;
