import createDataContext from "./createDataContext";
import strapiApi from "../api/strapiApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../RootNavigation";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { token: action.payload, errorMsg: "" };
    case "SIGNIN":
      return {
        token: action.payload,
        errorMsg: "",
      };
    case "RESET_PASSWORD":
      return state;
    case "SIGNOUT":
      return { ...state, token: null };
    case "ADD_ERROR":
      return { ...state, errorMsg: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMsg: "" };
    case "LOADING":
      return { ...state, isLoading: true };
    case "LOADED":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// actions
const signin = (dispatch) => async ({ email, password }) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await strapiApi.post("/auth/local", {
      identifier: email.trim(),
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
      payload: err.response.data.data[0].messages[0].message,
    });
  }
  dispatch({ type: "LOADED" });
};

const signup = (dispatch) => async ({ email, password }) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await strapiApi.post("/auth/local/register", {
      username: email.trim(),
      email: email.trim(),
      password,
    });

    RootNavigation.navigate("AccountConfirmation", { email });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.response.data.data[0].messages[0].message,
    });
  }
  dispatch({ type: "LOADED" });
};

const signout = (dispatch) => async () => {
  dispatch({ type: "SIGNOUT" });
  await AsyncStorage.removeItem("remontada_token");
};

const askResetPassword = (dispatch) => async ({ email }) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await strapiApi.post("auth/forgot-password", {
      email: email.trim(),
    });
  } catch (err) {
    // console.log(err.response.data.data[0].messages[0].message);
  }

  dispatch({ type: "LOADED" });
  RootNavigation.navigate("PasswordConfirmation", { email });
};

const resetPassword = (dispatch) => async ({ code, password }) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await strapiApi.post("auth/reset-password", {
      code,
      password,
      passwordConfirmation: password,
    });

    dispatch({ type: "SIGNIN", payload: response.data.jwt });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: err.response.data.data[0].messages[0].message,
    });
    dispatch({ type: "LOADED" });
  }
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
  {
    getToken,
    clearError,
    signin,
    signup,
    signout,
    askResetPassword,
    resetPassword,
  },
  { token: null, errorMsg: null, isLoading: false }
);
