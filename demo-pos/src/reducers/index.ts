import { combineReducers } from "redux";
import loginReducer, { LoginState } from "./login.reducer";
import registerReducer, { RegisterState } from "./register.reducer";

export default combineReducers({ loginReducer, registerReducer });

export interface RootReducer {
  loginReducer: LoginState;
  registerReducer: RegisterState;
}
