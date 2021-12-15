import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { getDish } from "../redux/actionDish";
import { setLocalstorage } from "../utils/localstorage";

export const Home = () => {
  const { data, listFavouriteDish, loading } = useTypeSelector(
    (state) => state.dish
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDish());
  }, [dispatch]);

  useEffect(() => {
    setLocalstorage(listFavouriteDish);
  }, [listFavouriteDish]);

  return (
    <>
      <div className="container">
        {data.length !== 0 && (
          <DishCard
            imgLink={data[0].strMealThumb}
            title={data[0].strMeal}
            instructions={data[0].strInstructions}
          />
        )}
      </div>
      {/* {loading && <Preloader active color="blue" flashing={false} size="big" />} */}
    </>
  );
};
