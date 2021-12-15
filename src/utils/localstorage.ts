import { addToFavourite } from "../redux/actionDish";

export const setLocalstorage = (data: any) => {
  localStorage.setItem("favouriteDish", JSON.stringify(data));
};

export const getLocalstorage = (dispatch: Function) => {
  const savedDish = JSON.parse(localStorage.getItem("favouriteDish") || "[]");
  savedDish.map((dish: any[]) => {
    dispatch(addToFavourite(dish));
  });
};
