import axios from "axios";
import {
  CREATE_NEW_REGISTER,
  SEARCH_REGISTER_EMAIL,
  URL_CREATE_NEW_REGISTER,
  URL_SEARCH_REGISTER_EMAIL,
} from "./ActionsTypes";

export function searchRegisterEmail(email) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_SEARCH_REGISTER_EMAIL, { email });
      dispatch({ type: SEARCH_REGISTER_EMAIL, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function createNewRegister(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_CREATE_NEW_REGISTER, data, {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      });
      dispatch({ type: CREATE_NEW_REGISTER, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}
