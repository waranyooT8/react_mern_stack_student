import * as React from "react";
import { Formik } from "formik";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const [account, setAccount] = React.useState({ username: "", password: "" });

  return (
    <>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          
        }}
      >
        <form>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={(e) =>
              setAccount({ ...account, username: e.target.value })
            }
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />{" "}
          <br />
          <button type="button" onClick={() => alert(JSON.stringify(account))}>
            Submit
          </button>
        </form>
      </Formik>
    </>
  );
};

export default RegisterPage;
