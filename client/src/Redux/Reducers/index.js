import { combineReducers } from "redux";
import authReducer from "./Auth";
import registerReducer from "./Register";
import superviceReducer from "./Supervisor"
import accountReducer from "./Account"

const reducers = combineReducers({
  auth: authReducer,
  registers: registerReducer,
  supervisor: superviceReducer,
  account: accountReducer
});

export default reducers;
