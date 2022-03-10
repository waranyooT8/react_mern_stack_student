import { STOCK_FAILED, STOCK_FETCHING, STOCK_SUCCESS } from "../constants";

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

export const loadStock = () => {};
