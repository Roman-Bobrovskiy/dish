import { Dispatch } from "redux";
import { getDishAction } from "../interfaces/getDishInterface";
import path from "../utils/path.json";
import { actionType } from "./actionTypesDish";

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
