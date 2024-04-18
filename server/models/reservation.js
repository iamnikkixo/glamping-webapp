const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name required'],
      minlength: [2, 'Must be at least 2 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number required'],
      match: [/^[0-9]+$/, 'Phone number must be only digits'],
      minlength: [10, 'Must be at least 10 digits long'],
      maxlength: [15, 'Must be less than 15 digits long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Invalid email address',
      },
    },
    tent: {
      type: String,
      required: [true, 'Tent selection required'],
      enum: {
        values: ['rustic', 'oasis', 'zen'],
        message: 'Invalid tent selection',
      },
    },
    checkIn: {
      type: Date,
      required: [true, 'Check-in date required'],
      min: [new Date(), 'Cannot choose past dates'],
    },
    checkOut: {
      type: Date,
      required: [true, 'Check-out date required'],
      validate: {
        validator: function (value) {
          // Ensure check-out is at least one day after check-in
          const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
          const checkInDate = new Date(this.checkIn);
          const minCheckOutDate = new Date(checkInDate.getTime() + oneDay);
          return value >= minCheckOutDate;
        },
        message: 'Check-out date must be at least the day after check-in date',
      },
    },
    numGuest: {
      type: Number,
      required: [true, 'Number of guests is required'],
      min: [1, 'At least 1 guest required'],
      max: [4, 'Maximum of 4 guests allowed'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);
