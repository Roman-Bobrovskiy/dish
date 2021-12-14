import { actionType } from "../redux/actionTypesDish";

interface getDishGetDishAction {
  type: actionType.GET_DISH;
  payload: any[];
}

interface addDishToFavouriteAction {
  type: actionType.ADD_TO_FAVOURITE;
  payload: any[];
}

interface addCustomDishAction {
  type: actionType.ADD_CUSTOM_DISH;
  payload: customDish;
}

export interface customDish {
  imgLink: string;
  title: string;
  instructions: string;
}

interface toggleModalAction {
  type: actionType.TOGGLE_MODAL;
  payload: boolean;
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
  | addDishToFavouriteAction
  | toggleModalAction
  | addCustomDishAction;
