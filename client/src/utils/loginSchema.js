import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
});

export default loginSchema;
