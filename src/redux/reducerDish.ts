import { getDishAction } from "../interfaces/getDishInterface";
import { stateInterface } from "../interfaces/stateInreface";
import { actionType } from "./actionTypesDish";

const initialState: stateInterface = {
  data: [],
  listFavouriteDish: [],
  modal: false,
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
        modal: state.modal,
        loading: state.loading,
        error: state.error,
      };

    case actionType.ADD_TO_FAVOURITE:
      return {
        data: state.data,
        listFavouriteDish: [...state.listFavouriteDish, action.payload],
        modal: state.modal,
        loading: state.loading,
        error: state.error,
      };
    case actionType.ADD_CUSTOM_DISH:
      return {
        data: state.data,
        listFavouriteDish: [...state.listFavouriteDish, action.payload],
        modal: state.modal,
        loading: state.loading,
        error: state.error,
      };

    case actionType.TOGGLE_MODAL:
      return {
        data: state.data,
        listFavouriteDish: state.listFavouriteDish,
        modal: action.payload,
        loading: state.loading,
        error: state.error,
      };

    case actionType.LOADING:
      return {
        data: state.data,
        listFavouriteDish: state.listFavouriteDish,
        modal: state.modal,
        loading: action.payload,
        error: state.error,
      };

    case actionType.ERROR:
      return {
        data: state.data,
        listFavouriteDish: state.listFavouriteDish,
        modal: state.modal,
        loading: state.loading,
        error: action.payload,
      };

    default:
      return state;
  }
};
