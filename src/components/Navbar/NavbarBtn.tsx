import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/actionDish";

import styles from "./Navbar.module.css";

export const NavbarBtn = () => {
  const dispatch = useDispatch();

  const handleAddCustomDish = () => {
    dispatch(toggleModal(true));
  };

  return (
    <button onClick={handleAddCustomDish} className={styles.navbarBtn}>
      Add custom dish
    </button>
  );
};
