import React from "react";
import { DishCard } from "../components/DishCard/DishCard";
import { useTypeSelector } from "../hooks/useTypeSecector";

export const Favourite: React.FC = () => {
  const { listFavouriteDish } = useTypeSelector((state) => state.dish);

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
    </div>
  );
};
