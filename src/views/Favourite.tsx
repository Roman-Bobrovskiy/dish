import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { Modal } from "../components/Modal/Modal";
import { NavbarBtn } from "../components/Navbar/NavbarBtn";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { useWindowSize } from "../hooks/useWindowSize";
import { getLocalstorage } from "../utils/localstorage";

export const Favourite: React.FC = () => {
  const { listFavouriteDish, modal } = useTypeSelector((state) => state.dish);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  useEffect(() => {
    getLocalstorage(dispatch, listFavouriteDish);
  }, [dispatch, listFavouriteDish]);

  return (
    <div className="justify-content-center">
      <div className="mt-5 d-flex flex-wrap p-2">
        {listFavouriteDish.length !== 0 &&
          listFavouriteDish.map((dish) => (
            <DishCard
              key={dish.idMeal}
              imgLink={dish.strMealThumb}
              title={dish.strMeal}
              instructions={dish.strInstructions}
            />
          ))}
        {width < 762 && (
          <div className="fixed-bottom bg-light wrapNavbarBtn">
            <NavbarBtn />
          </div>
        )}
      </div>

      {modal && <Modal />}
    </div>
  );
};
