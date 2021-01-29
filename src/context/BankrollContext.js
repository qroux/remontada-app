import createDataContext from "./createDataContext";

// REDUCER
const BankrollReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ACTIONS
const getBets = (dispatch) => async () => {
  dispatch({ type: "GET_BETS", payload: { type: "vide" } });
};

// EXPORT
export const { Context, Provider } = createDataContext(BankrollReducer, {}, {});
