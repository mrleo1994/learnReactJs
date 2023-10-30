const initialState = {
  number: 999,
};

export const demoReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER": {
      state.number += action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
