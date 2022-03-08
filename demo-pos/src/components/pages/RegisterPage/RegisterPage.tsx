import * as React from "react";
import { Formik } from "formik";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  
  const showForm = () => {
    return (
      <form>
        <label>Username: </label>
        <input type="text" name="username" />
        <br />
        <label>Password: </label>
        <input type="text" name="password" /> <br />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {}}
        
      ></Formik>
    </>
  );
};

export default RegisterPage;
