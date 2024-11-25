import React from "react";
// ---------------------------------------------
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { Login } from "../API/users";

const LoginUser = () => {
  const mutation = useMutation({
    mutationFn: (newUser) => Login(newUser),
  });

  function submit(values) {
    console.log(values);
    mutation.mutate(values);
  }

  return (
    <div>
      <Formik initialValues={{ username: "", password: "" }} onSubmit={submit}>
        <Form>
          <Field
            as="input"
            name="username"
            type="text"
            placeholder="Username"
          />
          <Field
            as="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginUser;
