import { actionTypes } from "./action.js";
import { createStore } from "redux";

const initialState = [];

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];
    case actionTypes.REMOVE:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return [...state];
  }
};

//Create store
export const makeStore = initialState => {
  return createStore(reducer, initialState);
};
