import * as React from "react";
import { useHistory } from "react-router-dom";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const history = useHistory();

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
};

export default LoginPage;
