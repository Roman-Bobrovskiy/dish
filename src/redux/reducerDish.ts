import { getDishAction } from "../interfaces/getDishInterface";
import { stateInterface } from "../interfaces/stateInreface";
import { actionType } from "./actionTypesDish";

const initialState: stateInterface = {
  data: [],
  listFavouriteDish: [],
  loading: false,
  error: null,
};

export const reducerDish = (
  state = initialState,
  action: getDishAction
): stateInterface => {
  switch (action.type) {
    case actionType.GET_DISH:
      return {
        data: action.payload,
        listFavouriteDish: state.listFavouriteDish,
        loading: state.loading,
        error: state.error,
      };

    case actionType.LOADING:
      return {
        data: state.data,
        listFavouriteDish: state.listFavouriteDish,
        loading: action.payload,
        error: state.error,
      };

    case actionType.ERROR:
      return {
        data: state.data,
        listFavouriteDish: state.listFavouriteDish,
        loading: state.loading,
        error: action.payload,
      };

    default:
      return state;
  }
};
