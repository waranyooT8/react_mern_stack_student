import { combineReducers } from "redux";
import loginReducer, { LoginState } from "./login.reducer";
import registerReducer, { RegisterState } from "./register.reducer";
import stockReducer, { StockState } from "./stock.reducer";
import stockEditReducer, { StockEditState } from "./stock.edit.reducer";
import transactionReducer, { TransactionState } from "./transaction.reducer";
export default combineReducers({
  loginReducer,
  registerReducer,
  stockReducer,
  stockEditReducer,
  transactionReducer,
});

export interface RootReducer {
  loginReducer: LoginState;
  registerReducer: RegisterState;
  stockReducer: StockState;
  stockEditReducer: StockEditState;
  transactionReducer: TransactionState;
}
