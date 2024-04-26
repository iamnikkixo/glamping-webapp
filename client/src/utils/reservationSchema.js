import * as Yup from 'yup';
import { startOfDay, addDays } from 'date-fns';

export const reservationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name required')
    .min(2, 'Must be at least 2 characters'),

  phone: Yup.string()
    .required('Phone number required')
    .min(10, 'Must be at least 10 digits long')
    .max(15, 'Must be less than 15 digits long'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  checkIn: Yup.date()
    .required('Check-in date required')
    .min(startOfDay(new Date()), 'Cannot choose past dates'),
  checkOut: Yup.date()
    .required('Check-out date required')
    .min(
      Yup.ref('checkIn'),
      'Check-out date must be at least the day after check-in date'
    )
    .test(
      'is-at-least-next-day',
      'Check-out date must be at least the day after check-in date',
      function (value) {
        const checkInDate = this.resolve(Yup.ref('checkIn'));
        const nextDay = addDays(new Date(checkInDate), 1);
        return value >= nextDay;
      }
    ),

  days: Yup.number(),

  total: Yup.number(),

  tent: Yup.string()
    .required('Tent selection required')
    .oneOf(['rustic', 'oasis', 'zen'], 'Invalid tent selection'),

  numGuest: Yup.string()
    .required('Number of guests is required')
    .oneOf(['1', '2', '3', '4'], 'Invalid number of guests'),

  termsConditions: Yup.boolean()
    .required('The terms and conditions must be accepted')
    .oneOf([true], 'You must accept the terms and conditions'),
});
