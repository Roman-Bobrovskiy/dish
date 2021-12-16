import React from "react";
import { Desktop } from "./DesktopMenu/Desktop";
import { Hamburger } from "./HamburgerMenu/Hamburger";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Navigation: React.FC = () => {
  const { width } = useWindowSize();

  return <header>{width > 762 ? <Desktop /> : <Hamburger />}</header>;
};
