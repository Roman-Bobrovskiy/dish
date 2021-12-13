import React from "react";
import { useLocation } from "react-router-dom";
import { DishCardBtn } from "./DishCardBtn";
import { dishCardProps } from "../../interfaces/DishCardProps";

import styles from "./DishCard.module.css";

export const DishCard: React.FC<dishCardProps> = ({
  imgLink,
  title,
  instructions,
}) => {
  const location = useLocation();
  return (
    <>
      <div className={styles.wrapCard}>
        <ul className={styles.cardBody}>
          <li className={styles.cardImg}>
            <img className={styles.cardImg} src={imgLink} alt={imgLink} />
          </li>
          <li className={styles.cardTitle}> {title}</li>
          <li className={styles.cardInstructions}>{instructions}</li>
        </ul>
        {location.pathname === "/" && <DishCardBtn />}
      </div>
    </>
  );
};
