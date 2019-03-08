import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import axios from "axios";
import "../styles/styles.css";
import "../styles/form.css";
import logo from "../assets/logo.png";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "C'mon, your username is longer than that")
      .required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    // props.loginUser(payload);
    // const endpoint = "https://backend-art.herokuapp.com/api/login";
    // console.log(payload);
    // let cleanPayload = JSON.stringify(payload, null, 2);
    // axios
    //   .post(endpoint, payload)
    //   .then(res => {
    //     console.log(res.data);
    //     localStorage.setItem("token", res.data.token);
    //   })
    //   .catch(err => {
    //     console.error("ERROR", err);
    //   });
    setSubmitting(false);
  },
  displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  autoComplete,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        autoComplete="off"
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <div className="loginForm">
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={props.loginUser()}>
        <h1>Returning Members</h1>
        <TextInput
          id="username"
          type="text"
          label="Username"
          placeholder=""
          error={touched.username && errors.username}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="password"
          type="password"
          label="Password"
          placeholder=""
          error={touched.password && errors.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit" disabled={isSubmitting}>
          LOGIN
        </button>
        <div className="login-logo">
          <img src={logo} alt="artful logo" />{" "}
        </div>
      </form>
    </div>
  );
};

export const LoginForm = formikEnhancer(MyForm);
