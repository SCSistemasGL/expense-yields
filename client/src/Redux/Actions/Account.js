import axios from "axios";
import { ACCOUNTS, ENABLE_ACCOUNT, FORGOT_PASSWORD_ACCOUNT, NEW_ACCOUNT_NOT_PASSWORD, URL_ACCOUNTS, URL_ENABLE_ACCOUNT, URL_FORGOT_PASSWORD_ACCOUNT, URL_NEW_ACCOUNT_NOT_PASSWORD } from "./ActionsTypes";

export function newAccountNotPassword(account) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_NEW_ACCOUNT_NOT_PASSWORD, account);
      dispatch({ type: NEW_ACCOUNT_NOT_PASSWORD, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function enableAccount(account) {
  return async (dispatch) => {
    try {
      const response = await axios.put(URL_ENABLE_ACCOUNT, account);
      dispatch({ type: ENABLE_ACCOUNT, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function forgotPasswordAccount(data) {
  return async (dispatch) => {
    try {
      const response = await axios.put(URL_FORGOT_PASSWORD_ACCOUNT, data);
      dispatch({ type: FORGOT_PASSWORD_ACCOUNT, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function searchAccounts(idAccount) {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_ACCOUNTS, idAccount);
      dispatch({ type: ACCOUNTS, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}