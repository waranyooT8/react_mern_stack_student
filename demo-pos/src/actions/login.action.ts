import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
} from "../constants";
import { LoginResult } from "../types/auth-result.type";
import { User } from "../types/user.type";
import { httpClient } from "../utils/HttpClient";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = (payload: string) => ({
  type: LOGIN_FAILED,
  payload,
});

export const login = (user: User) => {
  try {
    setLoginFetchingToState();
    const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
  } catch (error) {
    setLoginFailedToState(JSON.stringify(error));
  }
};
