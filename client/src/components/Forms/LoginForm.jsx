import { Formik, Form, Field } from 'formik';
import TextField from '../../utils/Textfield';
import loginSchema from '../../utils/loginSchema';
import { useModal } from '../../utils/ModalContext';
import { useAuth } from '../../utils/AuthContext';
import GoogleOAuth from '../auth/GoogleOAuth';
import FacebookOAuth from '../auth/FacebookOAuth';
import axios from 'axios';

const server = import.meta.env.VITE_BASE_URL;

const LoginForm = () => {
  const { toggleModal } = useModal();
  const { login } = useAuth();

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    try {
      const response = await axios.post(`${server}/api/users/login`, values);
      login(response.data);
      console.log(response.data)
      resetForm();
      toggleModal('loginModal');
      return response.data;
    } catch (error) {
      console.error(error.message);
      if (error.response && error.response.data) {
        if (error.response.status === 401) {
          const field = error.response.data.message.includes('Email')
            ? 'email'
            : 'password';
          setFieldError(field, error.response.data.message);
        } else if (!error.response.data.user) {
          console.error('Login error: User data not returned from the server');
        }
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form>
          <div className="grid grid-cols-1 gap-2">
            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="email@example.com"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              icon
            />
            <div className="flex justify-between px-1 mt-1">
              <div>
                <label className="inline-flex items-center">
                  <Field type="checkbox" name="rememberMe" className="mr-3" />
                  <p className="text-xs">Remember me?</p>
                </label>
              </div>
              <p className="text-xs font-medium font-poppins text-orange-500">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="mt-3 border-2 text-sm font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105"
            >
              Sign in
            </button>
            <div className="font-poppins text-sm py-2 text-center flex mx-auto">
              <p> Don't have an account? </p>
              <span
                className="text-orange-500 ml-1 cursor-pointer hover:font-semibold"
                onClick={() => (
                  toggleModal('loginModal'), toggleModal('registerModal')
                )}
              >
                Sign up
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="text-sm font-poppins text-gray-500">or</span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="mt-3 text-center py-1">
        <FacebookOAuth />
        <GoogleOAuth />
      </div>
    </div>
  );
};

export default LoginForm;
