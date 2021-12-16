import { Dispatch } from "redux";
import { getDishAction } from "../interfaces/getDishInterface";
import path from "../utils/path.json";
import { actionType } from "./actionTypesDish";

// fetch dish
export const getDish = () => {
  return async function (dispatch: Dispatch<getDishAction>) {
    await dispatch({ type: actionType.LOADING, payload: true });
    await fetch(path.url)
      .then((res) => res.json())
      .then((json) =>
        dispatch({ type: actionType.GET_DISH, payload: json.meals })
      )
      .catch((err) => dispatch({ type: actionType.ERROR, payload: err }))
      .finally(() => dispatch({ type: actionType.LOADING, payload: false }));
  };
};

export const addToFavourite = (dish: any[]) => {
  return async function (dispatch: Dispatch<getDishAction>) {
    await dispatch({ type: actionType.ADD_TO_FAVOURITE, payload: dish });
  };
};

export const addCustomDish = (customDish: any) => {
  return async function (dispatch: Dispatch<getDishAction>) {
    await dispatch({ type: actionType.ADD_CUSTOM_DISH, payload: customDish });
  };
};

export const toggleModal = (currentStateModalWindow: boolean) => {
  return async function (dispatch: Dispatch<getDishAction>) {
    await dispatch({
      type: actionType.TOGGLE_MODAL,
      payload: currentStateModalWindow,
    });
  };
};
