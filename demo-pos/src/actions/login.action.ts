import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../constants";
import { LoginResult } from "../types/auth-result.type";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = (payload: LoginResult) => ({
  type: LOGIN_FAILED,
  payload,
});
