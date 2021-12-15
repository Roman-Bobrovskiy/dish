import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomDish, toggleModal } from "../../redux/actionDish";
import path from "../../utils/path.json";

import styles from "./Modal.module.css";

export const Modal: React.FC = () => {
  const [dishTitle, setDishTitle] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const refTitle = useRef<HTMLInputElement>(null);
  const refDishDescription = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const handleTitle = () => {
    setDishTitle(refTitle.current!.value);
  };

  const handleDishDescription = () => {
    setDishDescription(refDishDescription.current!.value);
  };

  const handleAddCustomDish = () => {
    const customDish = {
      idMeal: Date.now(),
      strMealThumb: path.noImage,
      strMeal: dishTitle,
      strInstructions: dishDescription,
    };
    dispatch(addCustomDish(customDish));
    dispatch(toggleModal(false));
  };

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.wrapModal}>
          <form className={styles.modal}>
            <label className={styles.title}>
              Add custom dish
              <div className={styles.wrapInput}>
                <input
                  ref={refTitle}
                  className={styles.inputDishTitle}
                  type="text"
                  placeholder="Dish title"
                  onKeyPress={handleTitle}
                />
                <textarea
                  ref={refDishDescription}
                  className={styles.inputDescription}
                  placeholder="Dish description..."
                  onKeyPress={handleDishDescription}
                />
                <button
                  onClick={handleAddCustomDish}
                  className={styles.addBtn}
                  type="button"
                >
                  Add custom dish
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};
