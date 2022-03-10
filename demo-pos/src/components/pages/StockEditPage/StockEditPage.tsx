import * as React from "react";

type StockEditPageProps = {
  //
};

const StockEditPage: React.FC<any> = (props: any) => {
  React.useEffect(() => {
    let id = props.match.params.id;
    alert(id);
  }, []);

  return <div>StockEditPage</div>;
};

export default StockEditPage;
