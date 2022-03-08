import * as React from "react";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const [account, setAccount] = React.useState({ username: "", password: "" });

  return (
    <>
      <h1>RegisterPage</h1>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setAccount({ username: e.target.value, password: "" })
          }
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          onChange={(e) =>
            setAccount({ username: "", password: e.target.value })
          }
        />{" "}
        <br />
      </form>

      <span>Debug: {JSON.stringify(account)}</span>
    </>
  );
};

export default RegisterPage;
