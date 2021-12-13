import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DishCard } from "../components/DishCard/DishCard";
import { getDish } from "../redux/actionDish";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish());
  }, [dispatch]);

  return (
    <div className="container center">
      <DishCard />
    </div>
  );
};
