import { addToFavourite } from "../redux/actionDish";

export const setLocalstorage = (data: any) => {
  localStorage.setItem("favouriteDish", JSON.stringify(data));
};

export const getLocalstorage = (
  dispatch: Function,
  listFavouriteDish: any[]
) => {
  const savedDish = JSON.parse(localStorage.getItem("favouriteDish") || "[]");
  savedDish.map((dish: any[]) => {
    return (
      listFavouriteDish.includes(dish) ||
      (listFavouriteDish.length === 0 && dispatch(addToFavourite(dish)))
    );
  });
};
