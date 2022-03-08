import * as React from "react";
import { Formik } from "formik";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }: any) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        {/* username */}
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        {/* password */}
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    );
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={{ username: "lek", password: "555" }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));

          setTimeout(() => {
            setSubmitting(false);
          }, 5000);
        }}
      >
        {showForm}
      </Formik>
    </>
  );
};

export default RegisterPage;
