import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavbarBtn } from "./NavbarBtn";
import routes from "../Routes";

import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className={styles.wrapNavbar}>
          <ul>
            <li>
              <NavLink className={styles.navbarLink} to={routes.home}>
                Random dish
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navbarLink} to={routes.favourite}>
                Favourites
              </NavLink>
            </li>
          </ul>
          {location.pathname !== routes.home && <NavbarBtn />}
        </div>
      </nav>
    </header>
  );
};
