import { Formik, Form, Field } from 'formik';
import TextField from '../../utils/Textfield';
import registerSchema from '../../utils/registerSchema';
import { useModal } from '../../utils/ModalContext';
import FacebookOAuth from '../auth/FacebookOAuth';
import GoogleOAuth from '../auth/GoogleOAuth';
import axios from 'axios';

const server = import.meta.env.VITE_BASE_URL;

const RegisterForm = () => {
  const { toggleModal } = useModal();

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    try {
      const response = await axios.post(`${server}/api/users/register`, values);
      resetForm();
      toggleModal('registerModal');
      console.log('Registration Successful!', values);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setFieldError('email', error.response.data.message);
      }
    }
  };

  return (
    <div>
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
                  <span className="text-orange-500 font-semibold">
                    Terms of Use
                  </span>{' '}
                  and{' '}
                  <span className="text-orange-500 font-semibold">
                    Privacy Policy
                  </span>
                  .
                </p>
              </label>
            </div>
            <button
              type="submit"
              className="border-2 text-sm font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  "
            >
              Create An Account
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
