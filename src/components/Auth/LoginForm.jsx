import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../../validation';
import { userLogin } from '../../redux/authentication';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => dispatch(userLogin(values)),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
      <span className="login100-form-title">Sign In</span>

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
          placeholder="password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <span className="focus-input100" />
      </div>

      <div className="container-login100-form-btn">
        <button type="submit" className="login100-form-btn">
          Sign in
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
