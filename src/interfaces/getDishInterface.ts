import { actionType } from "../redux/actionTypesDish";

interface getDishGetDishAction {
  type: actionType.GET_DISH;
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
  | getDishErrorAction;
