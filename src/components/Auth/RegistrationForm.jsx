import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationValidation } from '../../validation';
import { userRegistration, clearError } from '../../redux/registration';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

let setTimeOut = null;

const RegistrationForm = () => {
  const regState = useSelector(({ reg }) => reg);
  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }, [regState.error]);

  const formik = useFormik({
    initialValues,
    validationSchema: registrationValidation,
    onSubmit: (values) => dispatch(userRegistration(values)),
  });

  return regState.registered ? (
    <Redirect to="/login" />
  ) : (
    <form
      onSubmit={formik.handleSubmit}
      className="login100-form validate-form p-l-55 p-r-55 p-t-178"
    >
      <span className="login100-form-title">Registration</span>

      {regState.error ? (
        <div className="wrap-input100 validate-input error-message m-b-25">
          {regState.error}
        </div>
      ) : null}

      <div
        className={`wrap-input100 validate-input m-b-16 ${
          formik.touched.name && formik.errors.name ? 'alert-validate' : ''
        }`}
        data-validate={formik.errors.name}
      >
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <span className="focus-input100" />
      </div>

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
          placeholder="Password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <span className="focus-input100" />
      </div>

      <div
        className={`wrap-input100 validate-input m-b-25 ${
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? 'alert-validate'
            : ''
        }`}
        data-validate={formik.errors.confirmPassword}
      >
        <input
          className="input100"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        <span className="focus-input100" />
      </div>

      <div className="container-login100-form-btn">
        <button
          type="submit"
          className="login100-form-btn"
          disabled={regState.loader}
        >
          Sign up
          {regState.loader ? <div className="lds-dual-ring" /> : null}
        </button>
      </div>

      <div className="flex-col-c p-t-100 p-b-40">
        <Link to="/login" className="txt3">
          Back To Login
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
