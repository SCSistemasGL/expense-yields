import { combineReducers } from "redux";
import auth from "./Auth";


const reducers = combineReducers({
  auth: auth,
});

export default reducers;
