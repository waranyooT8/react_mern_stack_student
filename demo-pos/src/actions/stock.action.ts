import {
  server,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../constants";
import { Product } from "../types/product.type";
import { httpClient } from "../utils/HttpClient";

export const setStockFetchingToState = () => ({
  type: STOCK_FETCHING,
});

export const setStockSuccessToState = (payload: Product[]) => ({
  type: STOCK_SUCCESS,
  payload,
});

export const setStockFailedToState = (payload: string) => ({
  type: STOCK_FAILED,
  payload,
});

export const loadStock = () => {
  return async (dispatch: any) => {
    try {
      dispatch(setStockFetchingToState());
      const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
      dispatch(setStockSuccessToState(result.data));
    } catch (e) {
      dispatch(setStockFailedToState("Failed"));
    }
  };
};
