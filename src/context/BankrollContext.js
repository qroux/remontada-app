import createDataContext from "./createDataContext";
import strapiApi from "../api/strapiApi";

// REDUCER
const BankrollReducer = (state, action) => {
  switch (action.type) {
    case "GET_BETS":
      return { ...state, bets: action.payload };
    case "ADD_ERROR":
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

// ACTIONS
const getBets = (dispatch) => async () => {
  try {
    const response = await strapiApi.get("/bets");
    dispatch({ type: "GET_BETS", payload: response.data });
  } catch (err) {
    dispatch({ type: "ADD_ERROR", payload: err });
  }
};

// UTILS

// EXPORT
export const { Context, Provider } = createDataContext(
  BankrollReducer,
  { getBets },
  {}
);
