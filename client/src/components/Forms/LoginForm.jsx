import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../../utils/Textfield';
import loginSchema from '../../utils/loginSchema';
import { useModal } from '../../utils/ModalContext';
import { useAuth } from '../../utils/AuthContext';
import GoogleOAuth from '../auth/GoogleOAuth';
import FacebookOAuth from '../auth/FacebookOAuth';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const server = import.meta.env.VITE_BASE_URL;

const LoginForm = () => {
  const { toggleModal } = useModal();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${server}/api/users/login`, values);
      login(response.data);
      resetForm();
      setIsSubmitting(false);
      toast.success('Login Successfully!', {
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      });
      setTimeout(() => {
        toggleModal('loginModal');
      }, 1000);

      return response.data;
    } catch (error) {
      console.error(error.message);
      if (error.response && error.response.data) {
        setIsSubmitting(false);
        if (error.response.status === 401) {
          const field = error.response.data.message.includes('Email')
            ? 'email'
            : 'password';
          setFieldError(field, error.response.data.message);
          toast.error(error.response.data.message, {
            style: {
              borderRadius: '5px',
              background: '#333',
              color: '#fff',
            },
          });
        } else if (!error.response.data.user) {
          console.error('Login error: User data not returned from the server');
        }
      }
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
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
              disabled={isSubmitting}
              className="flex text-center border-2 text-sm font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 justify-center"
            >
              {isSubmitting ? (
                <>
                  <span className="mr-1" aria-label="Signing in loading">
                    Loading ...
                  </span>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                'Sign In'
              )}
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
