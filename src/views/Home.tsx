import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { getDish } from "../redux/actionDish";
import { getLocalstorage, setLocalstorage } from "../utils/localstorage";

export const Home = () => {
  const { data, listFavouriteDish, loading } = useTypeSelector(
    (state) => state.dish
  );
  const dispatch = useDispatch();

  useEffect(() => {
    data.length === 0 && dispatch(getDish());
  }, [dispatch, data.length]);

  useEffect(() => {
    getLocalstorage(dispatch, listFavouriteDish);
  }, [dispatch, listFavouriteDish]);

  useEffect(() => {
    setLocalstorage(listFavouriteDish);
  }, [listFavouriteDish]);

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center vh-100">
        {loading && (
          <div className="Width 100% d-flex justify-content-center">
            <Spinner animation="grow" variant="secondary" />
          </div>
        )}
        {data.length !== 0 && (
          <DishCard
            imgLink={data[0].strMealThumb}
            title={data[0].strMeal}
            instructions={data[0].strInstructions}
          />
        )}
      </div>
    </>
  );
};
