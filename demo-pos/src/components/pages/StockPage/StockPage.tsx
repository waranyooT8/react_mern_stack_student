import * as React from "react";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
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
