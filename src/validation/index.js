import * as Yup from 'yup';

export const loginValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export const registrationValidation = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
});
