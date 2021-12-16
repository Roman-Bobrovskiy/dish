import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../Routes";

import styles from "./Hamburger.module.css";

export const Hamburger: React.FC = () => {
  const menuBodyRef = useRef<HTMLUListElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  //open menu
  const openBurregMenu = () => {
    menuBodyRef.current!.style.left = "0";
    menuBtnRef.current!.style.opacity = "0";
  };

  //close menu
  const closeBurregMenu = () => {
    menuBodyRef.current!.style.left = "-300px";
    menuBtnRef.current!.style.opacity = "100";
  };

  return (
    <nav className={styles.wrapNavigation}>
      <button
        className={styles.menuBtn}
        type="button"
        ref={menuBtnRef}
        onClick={openBurregMenu}
      >
        <span className={styles.burgerBtnIcon}></span>
      </button>
      <ul ref={menuBodyRef} className={styles.wrapMenu}>
        <li>
          <button
            className={styles.burgerMenuCloseBtn}
            onClick={closeBurregMenu}
            type="button"
          >
            <svg width="32" height="32">
              <g>
                <path
                  d="m2,8l6,-6l8,8l8,-8l6,6l-8,8l8,8l-6,6l-8,-8l-8,8l-6,-6l8,-8l-8,-8z"
                  id="path1"
                  strokeWidth="2px"
                  stroke="#333333"
                  fillRule="evenodd"
                  fill="#777777"
                  opacity="0.75"
                />
              </g>
            </svg>
          </button>
        </li>
        <li className={styles.burgerMenuItems}>
          <NavLink className={styles.navbarLink} to={routes.home}>
            Random dish
          </NavLink>
        </li>
        <li className={styles.burgerMenuItems}>
          <NavLink className={styles.navbarLink} to={routes.favourite}>
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
