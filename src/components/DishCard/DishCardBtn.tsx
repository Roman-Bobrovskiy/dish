import React from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { addToFavourite, getDish } from "../../redux/actionDish";
import styles from "./DishCard.module.css";

export const DishCardBtn: React.FC = () => {
  const { data, listFavouriteDish } = useTypeSelector((state) => state.dish);
  const dispatch = useDispatch();

  //update dish
  const handleGetDish = () => {
    dispatch(getDish());
  };

  //add to favourite
  const handleAddToFavourite = () => {
    !listFavouriteDish.includes(data[0]) && dispatch(addToFavourite(data[0]));
  };

  return (
    <div className={styles.wrapCardBtn}>
      <button onClick={handleGetDish} className={styles.cardBtn}>
        Skip
      </button>
      <button onClick={handleAddToFavourite} className={styles.cardBtn}>
        Like
      </button>
    </div>
  );
};
