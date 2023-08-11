import React from "react";

import { Link } from "react-router-dom";

import { Text } from "components";

type C1HomeDesktopNavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "hometext" | "cabinastext" | "lineuptext" | "influencersspontext"
> &
  Partial<{
    hometext: string;
    cabinastext: string;
    lineuptext: string;
    influencersspontext: string;
  }>;

const C1HomeDesktopNavbar: React.FC<C1HomeDesktopNavbarProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-lg text-lime-A700 w-auto"
          size="txtClashGroteskVariableBold18"
        >
          <Link to="/">
          {props?.hometext}
          </Link>
        </Text>
        <Text
          className="text-gray-50 text-lg w-auto"
          size="txtClashGroteskVariableMedium18Gray50"
        >
          <Link to="/cabinas">
          {props?.cabinastext}
          </Link>
        </Text>
        <Text
          className="text-gray-50 text-lg w-auto"
          size="txtClashGroteskVariableMedium18Gray50"
        >
          {props?.lineuptext}
        </Text>
        <Text
          className="text-gray-50 text-lg w-auto"
          size="txtClashGroteskVariableMedium18Gray50"
        >
          {props?.influencersspontext}
        </Text>
      </div>
    </>
  );
};

C1HomeDesktopNavbar.defaultProps = {
  hometext: "Home",
  cabinastext: "Cabinas",
  lineuptext: "Line Up",
  influencersspontext: "Embajadores & Sponsors",
};

export default C1HomeDesktopNavbar;
