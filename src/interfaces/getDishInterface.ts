import { actionType } from "../redux/actionTypesDish";

interface getDishGetDishAction {
  type: actionType.GET_DISH;
  payload: any[];
}

interface addDishToFavouriteAction {
  type: actionType.ADD_TO_FAVOURITE;
  payload: any[];
}

interface getDishLoadingAction {
  type: actionType.LOADING;
  payload: boolean;
}
interface getDishErrorAction {
  type: actionType.ERROR;
  payload: string;
}

export type getDishAction =
  | getDishGetDishAction
  | getDishLoadingAction
  | getDishErrorAction
  | addDishToFavouriteAction;
