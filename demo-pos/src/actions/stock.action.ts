import {
  server,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setStockFetchingToState = () => ({
  type: STOCK_FETCHING,
});

export const setStockSuccessToState = (payload: any) => ({
  type: STOCK_SUCCESS,
  payload,
});

export const setStockFailedToState = (payload: string) => ({
  type: STOCK_FAILED,
  payload,
});

export const loadStock = () => {
  return async (dispatch: any) => {
    dispatch(setStockFetchingToState());
    const result = await httpClient.get<any>(server.PRODUCT_URL);
  };
};
