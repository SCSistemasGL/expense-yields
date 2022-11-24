import Cookie from "universal-cookie";
import { saveLocal } from "../../Utils/storage";
import {
  LOGIN,
  LOGOUT,
} from "../Actions/ActionsTypes";
const cookie = new Cookie();
const initialState = cookie.get("admin") || {};

export default function root(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      saveLocal("admin", action.payload.data);
      cookie.set("admin", action.payload.data);
      return cookie.get("admin");

    case LOGOUT:
      cookie.remove("admin");
      return {};

    default:
      return state;
  }
}
