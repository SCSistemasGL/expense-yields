import axios from "axios"
import { ALL_PROVINCE_PRICE, PROVINCE_NOT_PRICE, PROVINCE_WITH_PRICE, UPDATE_PROVINCE_PRICE, URL_ALL_PROVINCE_PRICE, URL_PROVINCE_NOT_PRICE, URL_PROVINCE_WITH_PRICE, URL_UPDATE_PROVINCE_PRICE } from "./ActionsTypes";

export function searchAllProvince() {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_ALL_PROVINCE_PRICE);
      dispatch({ type: ALL_PROVINCE_PRICE, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function searchProvinceWithPrice() {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_PROVINCE_WITH_PRICE);
      dispatch({ type: PROVINCE_WITH_PRICE, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function searchProvinceNotPrice() {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL_PROVINCE_NOT_PRICE);
      dispatch({ type: PROVINCE_NOT_PRICE, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}

export function updateProvincePrice(data) {
  return async (dispatch) => {
    try {
      const response = await axios.put(URL_UPDATE_PROVINCE_PRICE, data);
      dispatch({ type: UPDATE_PROVINCE_PRICE, payload: response });
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  };
}