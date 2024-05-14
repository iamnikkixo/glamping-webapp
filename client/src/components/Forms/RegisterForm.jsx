import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '../../utils/Textfield';
import registerSchema from '../../utils/registerSchema';
import { useModal } from '../../utils/ModalContext';
import FacebookOAuth from '../auth/FacebookOAuth';
import GoogleOAuth from '../auth/GoogleOAuth';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const server = import.meta.env.VITE_BASE_URL;

const RegisterForm = () => {
  const { toggleModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${server}/api/users/register`, values);
      resetForm();
      setIsSubmitting(false);
      toast.success('Registered Successfully! Please Sign In', {
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      });
      setTimeout(() => {
        toggleModal('registerModal');
      }, 950);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setFieldError('email', error.response.data.message);
      }
      setIsSubmitting(false);
      toast.error(error.response.data.message, {
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          termsConditions: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
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
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="password"
              icon
            />
            <div className="my-4">
              <label className="inline-flex items-start">
                <Field
                  type="checkbox"
                  name="termsConditions"
                  className="mr-3 mt-1"
                />
                <p className="text-xs">
                  By signing up, you are creating a Starlight Haven account, and
                  you agree to Starlight Haven’s{' '}
                  <span
                    onClick={() => (
                      toggleModal('registerModal'),
                      toggleModal('termsAndConditions')
                    )}
                    className="text-orange-500 font-semibold hover:cursor-pointer"
                  >
                    Terms and Conditions
                  </span>
                  .
                </p>
              </label>
              <ErrorMessage
                name="termsConditions"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex text-center border-2 text-sm font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 justify-center"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="mr-1"
                    aria-label="Registration form Submitting"
                  >
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
                'Create An Account'
              )}
            </button>
            <div className="font-poppins text-sm py-3 text-center flex mx-auto">
              <p>Already have an account?</p>
              <span
                className="text-orange-500 ml-1 cursor-pointer hover:font-semibold"
                onClick={() => (
                  toggleModal('registerModal'), toggleModal('loginModal')
                )}
              >
                Login
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

export default RegisterForm;
