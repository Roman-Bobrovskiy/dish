import React from "react";
import { Preloader } from "react-materialize";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { DishCardBtn } from "./DishCardBtn";

import styles from "./DishCard.module.css";

export const DishCard: React.FC = () => {
  const { data, loading } = useTypeSelector((state) => state.dish);

  return (
    <>
      {loading && <Preloader active color="blue" flashing={false} size="big" />}
      {data.length !== 0 && (
        <div className={styles.wrapCard}>
          <ul className={styles.cardBody}>
            <li className={styles.cardImg}>
              <img
                className={styles.cardImg}
                src={data[0].strMealThumb}
                alt={data[0].strMealThumb}
              />
            </li>
            <li className={styles.cardTitle}> {data[0].strMeal}</li>
            <li className={styles.cardInstructions}>
              {data[0].strInstructions}
            </li>
          </ul>
          <DishCardBtn />
        </div>
      )}
    </>
  );
};
