import { combineReducers } from "redux";
import loginReducer, { LoginState } from "./login.reducer";
// import registerReducer from "./register.reducer";

export default combineReducers({ loginReducer });

export interface RootReducer {
  loginReducer: LoginState;
}
