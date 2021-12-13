import React, { useEffect } from "react";
import { Preloader } from "react-materialize";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { getDish } from "../redux/actionDish";

export const Home = () => {
  const { data, loading } = useTypeSelector((state) => state.dish);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish());
  }, [dispatch]);

  return (
    <>
      <div className="container center">
        {data.length !== 0 && (
          <DishCard
            imgLink={data[0].strMealThumb}
            title={data[0].strMeal}
            instructions={data[0].strInstructions}
          />
        )}
      </div>
      {loading && <Preloader active color="blue" flashing={false} size="big" />}
    </>
  );
};
