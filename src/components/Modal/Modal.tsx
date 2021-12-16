import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { addCustomDish, toggleModal } from "../../redux/actionDish";
import { setLocalstorage } from "../../utils/localstorage";
import path from "../../utils/path.json";

import styles from "./Modal.module.css";

export const Modal: React.FC = () => {
  const { listFavouriteDish } = useTypeSelector((state) => state.dish);
  const [dishTitle, setDishTitle] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const refTitle = useRef<HTMLInputElement>(null);
  const refDishDescription = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  //title value
  const handleTitle = () => {
    setDishTitle(refTitle.current!.value);
  };

  //description value
  const handleDishDescription = () => {
    setDishDescription(refDishDescription.current!.value);
  };

  //add custom dish
  const handleAddCustomDish = () => {
    //custom dish body
    const customDish = {
      idMeal: Date.now(),
      strMealThumb: path.noImage,
      strMeal: dishTitle,
      strInstructions: dishDescription,
    };

    //add custom dish to state
    dispatch(addCustomDish(customDish));
    //close modal window
    dispatch(toggleModal(false));
    //add to local storage
    setLocalstorage([...listFavouriteDish, customDish]);
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
                  onChange={handleTitle}
                />
                <textarea
                  ref={refDishDescription}
                  className={styles.inputDescription}
                  placeholder="Dish description..."
                  onChange={handleDishDescription}
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
