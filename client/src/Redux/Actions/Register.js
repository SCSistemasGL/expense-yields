import axios from "axios"
import { SEARCH_REGISTER_EMAIL, URL_SEARCH_REGISTER_EMAIL } from "./ActionsTypes"

export function searchRegisterEmail(email) {
    return async (dispatch) => {
      try {
        const response = await axios.post(URL_SEARCH_REGISTER_EMAIL, email);
        dispatch({ type: SEARCH_REGISTER_EMAIL, payload: response });
      } catch (e) {
        console.log(e.response.data);
        return e.response.data;
      }
    };
  }
  