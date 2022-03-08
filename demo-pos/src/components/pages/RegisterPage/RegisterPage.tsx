import * as React from "react";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      <form>
        <label>Username: </label>
        <input type="text" name="username" /> <br />
        <label>Password: </label>
        <input type="text" name="password" /> <br />
      </form>
    </>
  );
};

export default RegisterPage;
