import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../../validation';
import { userLogin, clearError } from '../../redux/authentication';
import { clearAll } from '../../redux/registration';

const initialValues = {
  email: '',
  password: '',
};

let setTimeOut;

const LoginForm = () => {
  const regState = useSelector(({ reg }) => reg);
  const authState = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (regState.registered) {
      setTimeout(() => {
        dispatch(clearAll());
      }, 3000);
    }
  }, []);

  useEffect(() => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }, [authState.error]);

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => dispatch(userLogin(values)),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="login100-form validate-form p-l-55 p-r-55 p-t-178"
    >
      <span className="login100-form-title">Sign In</span>

      {authState.error ? (
        <div className="wrap-input100 validate-input error-message m-b-25">
          {authState.error}
        </div>
      ) : null}

      {regState.registered ? (
        <div className="wrap-input100 validate-input success-message m-b-25">
          You are successfully registered
        </div>
      ) : null}

      <div
        className={`wrap-input100 validate-input m-b-16 ${
          formik.touched.email && formik.errors.email ? 'alert-validate' : ''
        }`}
        data-validate={formik.errors.email}
      >
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <span className="focus-input100" />
      </div>

      <div
        className={`wrap-input100 validate-input m-b-16 ${
          formik.touched.password && formik.errors.password
            ? 'alert-validate'
            : ''
        }`}
        data-validate={formik.errors.password}
      >
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <span className="focus-input100" />
      </div>

      <div className="container-login100-form-btn">
        <button
          type="submit"
          className="login100-form-btn"
          disabled={authState.loader}
        >
          Sign in
          {authState.loader ? <div className="lds-dual-ring" /> : null}
        </button>
      </div>

      <div className="flex-col-c p-t-100 p-b-40">
        <span className="txt1 p-b-9">Don’t have an account?</span>

        <Link to="/registration" className="txt3">
          Sign up now
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
