import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducerDish } from "./reducerDish";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let rootReducer = combineReducers({
  dish: reducerDish,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
