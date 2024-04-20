import { Formik, Form, Field } from 'formik';
import TextField from '../../utils/Textfield';
import loginSchema from '../../utils/loginSchema';
import { useModal } from '../../utils/ModalContext';
import axios from 'axios';

const LoginForm = () => {
  const { toggleModal } = useModal();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    toggleModal('loginModal');
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
        //validationSchema={loginSchema}
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
                  <Field
                    type="checkbox"
                    name="termsConditions"
                    className="mr-3"
                  />
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
        <button onClick={() => console.log('Facebook button pressed')}>
          <i
            className="fab fa-facebook text-blue-600 px-2 text-md"
            style={{ fontSize: '30px' }}
          />
        </button>
        <button onClick={() => console.log('Google button presed')}>
          <i
            className="fab fa-google text-red-600 px-2"
            style={{ fontSize: '30px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
