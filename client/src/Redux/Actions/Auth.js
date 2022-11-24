import axios from "axios";
import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  SIGNUP,
  URL_FORGOT_PASSWORD,
  URL_LOGIN,
  URL_SIGNUP,
} from "./ActionsTypes";

export function login(user) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_LOGIN, user);
      dispatch({ type: LOGIN, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function signup(user) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_SIGNUP, user);
      dispatch({ type: SIGNUP, payload: response });
    } catch (e) {
      console.log(e.response);
      return e.response;
    }
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: {},
    });
  };
}


