import {
  STOCK_CLEAR,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../constants";
import { Product } from "../types/product.type";

export interface StockState {
  result: Product[];
  isFetching: boolean;
  isError: boolean;
}

const initialState: StockState = {
  result: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case first:
      return { ...state, ...payload };

    default:
      return state;
  }
};
