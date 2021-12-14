import React from "react";
import { DishCard } from "../components/DishCard/DishCard";
import { Modal } from "../components/Modal/Modal";
import { useTypeSelector } from "../hooks/useTypeSecector";

export const Favourite: React.FC = () => {
  const { listFavouriteDish, modal } = useTypeSelector((state) => state.dish);

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
