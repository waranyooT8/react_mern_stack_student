import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as stockActions from "../../../actions/stock.action";
import { RootReducer } from "../../../reducers";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const stockReducer = useSelector((state: RootReducer) => state.stockReducer);

  React.useEffect(() => {
    dispatch(stockActions.loadStock());
  }, []);

  return (
    <>
      <h1>StockPage</h1>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default StockPage;
