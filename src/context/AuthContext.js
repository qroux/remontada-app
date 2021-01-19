import createDataContext from "./createDataContext";
import strapiApi from "../api/strapiApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { token: action.payload, errorMsg: "" };
    case "SIGNIN":
      return {
        token: action.payload,
        errorMsg: "",
      };
    case "SIGNOUT":
      return { ...state, token: null };
    case "ADD_ERROR":
      return { ...state, errorMsg: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMsg: "" };
    case "LOADED":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// actions
const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await strapiApi.post("/auth/local", {
      identifier: email,
      password,
    });

    const token = response.data.jwt;
    await AsyncStorage.setItem("remontada_token", token);

    dispatch({
      type: "SIGNIN",
      payload: { email, token },
    });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.message,
    });
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await strapiApi.post("/auth/local/register", {
      username: email,
      email,
      password,
    });

    const token = response.data.jwt;
    await AsyncStorage.setItem("remontada_token", token);

    dispatch({
      type: "SIGNUP",
      payload: { email, token },
    });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.message,
    });
  }
};

const signout = (dispatch) => async () => {
  dispatch({ type: "SIGNOUT" });
  await AsyncStorage.removeItem("remontada_token");
};

//UTILS
const getToken = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("remontada_token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
  }

  dispatch({ type: "LOADED" });
};

const clearError = (dispatch) => async () => {
  dispatch({ type: "CLEAR_ERROR" });
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { getToken, clearError, signin, signup, signout },
  { token: null, errorMsg: null }
);
