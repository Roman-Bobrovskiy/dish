import React from "react";
import styles from "./DishCard.module.css";

export const DishCardBtn: React.FC = () => {
  return (
    <div className={styles.wrapCardBtn}>
      <button className={styles.cardBtn}>Skip</button>
      <button className={styles.cardBtn}>Like</button>
    </div>
  );
};
