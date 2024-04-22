import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../../utils/Textfield';
import Datefield from '../../utils/Datefield';
import { reservationSchema } from '../../utils/reservationSchema';
import { useModal } from '../../utils/ModalContext';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';

const server = import.meta.env.VITE_BASE_URL;

const ReserveForm = () => {
  const { toggleModal } = useModal();
  const { userEmail } = useAuth();

  const [tentType, setTentType] = useState('rustic');

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${server}/api/reservations`, values);
      resetForm();
      toggleModal('reserveModal');
      console.log('Succesfully submitted resservation,', values);
      return response.data;
    } catch (error) {
      console.error('Error Submitting Reservation:', error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        phone: '',
        email: userEmail,
        tent: 'rustic',
        checkIn: new Date(),
        checkOut: null,
        numGuest: '1',
        termsConditions: false,
      }}
      onSubmit={handleSubmit}
      //validationSchema={reservationSchema}
    >
      {({ setFieldValue }) => (
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
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="border-2 text-md font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  "
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReserveForm;