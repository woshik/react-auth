import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationValidation } from '../../validation';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: registrationValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="login100-form validate-form p-l-55 p-r-55 p-t-178"
    >
      <span className="login100-form-title">Registration</span>

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
          placeholder="Email"
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
          formik.touched.password && formik.errors.password ? 'alert-validate' : ''
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
          formik.touched.confirmPassword && formik.errors.confirmPassword ? 'alert-validate' : ''
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
        <button type="submit" className="login100-form-btn">
          Sign up
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
