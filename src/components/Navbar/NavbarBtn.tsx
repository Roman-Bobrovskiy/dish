import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/actionDish";

import styles from "./Navbar.module.css";

export const NavbarBtn: React.FC = () => {
  const dispatch = useDispatch();

  //open modal window
  const handleOpenModal = () => {
    dispatch(toggleModal(true));
  };

  return (
    <button onClick={handleOpenModal} className={styles.navbarBtn}>
      Add custom dish
    </button>
  );
};
