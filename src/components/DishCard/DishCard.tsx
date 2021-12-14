import React from "react";
import { useLocation } from "react-router-dom";
import { DishCardBtn } from "./DishCardBtn";
import { dishCardProps } from "../../interfaces/dishCardPropsInterface";
import routes from "../Routes";
import path from "../../utils/path.json";

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
            <img
              className={styles.cardImg}
              src={imgLink.length === 0 ? path.noImage : imgLink}
              alt={imgLink}
            />
          </li>
          <li className={styles.cardTitle}>{title}</li>
          <li className={styles.cardInstructions}>{instructions}</li>
        </ul>
        {location.pathname === routes.home && <DishCardBtn />}
      </div>
    </>
  );
};
