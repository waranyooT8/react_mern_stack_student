import {
  STOCK_EDIT_FAILED,
  STOCK_EDIT_FETCHING,
  STOCK_EDIT_SUCCESS,
} from "../constants";

export interface StockEditState {
  result: any;
  isFetching: boolean;
  isError: boolean;
}

const initialState: StockEditState = {
  result: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case STOCK_EDIT_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case STOCK_EDIT_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case STOCK_EDIT_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    default:
      return state;
  }
};
