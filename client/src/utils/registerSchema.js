import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
  termsConditions: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});

export default registerSchema;
