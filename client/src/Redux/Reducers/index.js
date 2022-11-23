import { combineReducers } from "redux";
import authReducer from "./Auth";
import registerReducer from "./Register";
import superviceReducer from "./Supervisor"

const reducers = combineReducers({
  auth: authReducer,
  registers: registerReducer,
  supervisor: superviceReducer
});

export default reducers;
