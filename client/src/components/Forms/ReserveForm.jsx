import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '../../utils/Textfield';
import Datefield from '../../utils/Datefield';
import { differenceInCalendarDays } from 'date-fns';
import { reservationSchema } from '../../utils/reservationSchema';
import { useModal } from '../../utils/ModalContext';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const server = import.meta.env.VITE_BASE_URL;

const tentPrices = {
  rustic: 50,
  oasis: 75,
  zen: 150,
};

const calculateDaysAndTotal = (checkIn, checkOut, tent) => {
  let days = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  days = days > 0 ? days : 1;
  const total = days * tentPrices[tent];
  return { days, total };
};

const ReserveForm = () => {
  const { toggleModal, modalState } = useModal();
  const { userName, userEmail } = useAuth();

  const [tentType, setTentType] = useState(modalState.tentName || 'rustic');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReservation = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${server}/api/reservations`, values);
      resetForm();
      setIsSubmitting(false);
      toast.success('Reservation Confirmed!', {
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      });
      setTimeout(() => {
        toggleModal('reserveModal', null);
      }, 950);
      return response.data;
    } catch (error) {
      console.error('Error Submitting Reservation:', error.message);
      setIsSubmitting(false);
      toast.error('400 Server Error', {
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      });
      setTimeout(() => {
        toggleModal('reserveModal', null);
      }, 950);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={{
          fullName: userName,
          phone: '',
          email: userEmail,
          tent: tentType,
          checkIn: new Date(),
          checkOut: null,
          days: '1',
          numGuest: '1',
          total: '',
          termsConditions: false,
        }}
        onSubmit={handleSubmitReservation}
        validationSchema={reservationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="grid gap-4 mb-4 grid-cols-4">
              <TextField
                label="Full Name"
                name="fullName"
                type="text"
                className="col-span-2"
                placeholder="John Doe"
              />
              <TextField
                label="Phone Number"
                name="phone"
                type="text"
                className="col-span-2"
                placeholder="+1 416 804 3046"
              />
              <TextField
                disabled
                label="Email Address"
                name="email"
                type="email"
                className="col-span-4"
                placeholder="email@example.com"
              />
              <Datefield label="Check-In" name="checkIn" />
              <Datefield label="Check-Out" name="checkOut" />
              <div className="col-span-1">
                <label
                  htmlFor="tent"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tent Type
                </label>
                <Field
                  as="select"
                  id="tent"
                  name="tent"
                  className="textfield"
                  onChange={(e) => {
                    setTentType(e.target.value);
                    setFieldValue('tent', e.target.value);
                    const { days, total } = calculateDaysAndTotal(
                      values.checkIn,
                      values.checkOut,
                      e.target.value
                    );
                    setFieldValue('days', days);
                    setFieldValue('total', total);
                  }}
                >
                  <option value="rustic">Rustic</option>
                  <option value="oasis">Oasis</option>
                  <option value="zen">Zen</option>
                </Field>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="numGuest"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Glampers
                </label>
                <Field
                  as="select"
                  id="numGuest"
                  name="numGuest"
                  className="textfield"
                  onChange={(e) => {
                    setFieldValue('numGuest', e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  {tentType !== 'rustic' && <option value="3">3</option>}
                  {tentType === 'zen' && <option value="4">4</option>}
                </Field>
              </div>

              <div className="col-span-4 text-sm ml-1">
                <label>
                  <Field
                    type="checkbox"
                    name="termsConditions"
                    className="mr-2"
                  />
                  <span>Accept Terms & Conditions</span>
                </label>
                <ErrorMessage
                  name="termsConditions"
                  component="div"
                  className="text-xs text-red-500"
                />
              </div>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 text-md font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-1" aria-label="Reservation Submitting">
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
                  'Reserve Now'
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ReserveForm;
