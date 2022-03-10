import * as React from "react";
import { useRouteMatch } from "react-router-dom";

type StockEditPageProps = {
  //
};

const StockEditPage: React.FC<any> = () => {
  const match = useRouteMatch<any>();
  React.useEffect(() => {
    let id = match.params.id;
    alert(id);
  }, []);

  return <div>StockEditPage</div>;
};

export default StockEditPage;
