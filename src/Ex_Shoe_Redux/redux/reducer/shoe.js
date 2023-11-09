import { shoeArr } from "../../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL": {
      state.detail = action.payload;
      return { ...state };
    }
    // case "ADD_SHOE": {
    //   state.cart = action.payload;
    //   return { ...state };
    // }
    default:
      return state;
  }
};
