import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { Modal } from "../components/Modal/Modal";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { getLocalstorage } from "../utils/localstorage";

export const Favourite: React.FC = () => {
  const { listFavouriteDish, modal } = useTypeSelector((state) => state.dish);
  const dispatch = useDispatch();

  useEffect(() => {
    listFavouriteDish.length === 0 && getLocalstorage(dispatch);
  }, []);

  return (
    <div className="container">
      {listFavouriteDish.length !== 0 &&
        listFavouriteDish.map((dish) => (
          <DishCard
            key={dish.idMeal}
            imgLink={dish.strMealThumb}
            title={dish.strMeal}
            instructions={dish.strInstructions}
          />
        ))}
      {modal && <Modal />}
    </div>
  );
};
