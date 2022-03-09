import {
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
} from "../constants";
import { RegisterResult } from "../types/auth-result.type";

export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload: RegisterResult) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterFailedToState = (payload: string) => ({
  type: REGISTER_FAILED,
  payload,
});


