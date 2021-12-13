import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavbarBtn } from "./NavbarBtn";

import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <div className={styles.wrapNavbar}>
        <ul>
          <li>
            <NavLink className={styles.navbarLink} to="/">
              Random dish
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navbarLink} to="/favourite">
              Favourites
            </NavLink>
          </li>
        </ul>
        {location.pathname !== "/" && <NavbarBtn />}
      </div>
    </nav>
  );
};
