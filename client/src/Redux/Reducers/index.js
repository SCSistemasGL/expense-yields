import { combineReducers } from "redux";
import authReducer from "./Auth";
import registerReducer from "./Register";

const reducers = combineReducers({
  auth: authReducer,
  registers: registerReducer
});

export default reducers;
