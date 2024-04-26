const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const nodemailer = require('nodemailer');


function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

// post
router.post('/', async (req, res) => {
  const reservation = new Reservation({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    tent: req.body.tent,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
    numGuest: parseInt(req.body.numGuest, 10),
  });

  const formattedCheckIn = formatDate(reservation.checkIn);
  const formattedCheckOut = formatDate(reservation.checkOut);

  // nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email options
  const mailToClient = {
    from: process.env.MAIL_FROM,
    to: reservation.email,
    subject: 'Starlight Haven Glamping: Reservation Successful',
    html: `
      <p>Hi ${reservation.fullName},</p>
      <p>Your reservation in the <span><b>${reservation.tent}</b></span> tent at Starlight Haven Glamping for <span><b>${reservation.numGuest}</b></span> guests from <span><b>${formattedCheckIn}</b></span> to <span><b>${formattedCheckOut}</b></span> was successful!</p>
      <p>Thank you for choosing our services.</p>
      <p>Best regards,</p>
      <p>Starlight Glamping Haven Team</p>
    `,
  };

  const mailToCompany = {
    from: reservation.email,
    to: process.env.MAIL_FROM,
    subject: `NEW RESERVATION! from ${reservation.fullName} <${reservation.email}>`,
    html: `
      <p>A new reservation has been made:</p>
      <ul>
        <li><strong>Name:</strong> ${reservation.fullName}</li>
        <li><strong>Phone:</strong> ${reservation.phone}</li>
        <li><strong>Email:</strong> ${reservation.email}</li>
        <li><strong>Check-In Date:</strong> ${formattedCheckIn}</li>
        <li><strong>Check-Out Date:</strong> ${formattedCheckOut}</li>
      </ul>
      <p>Please review the details and take necessary actions.</p>
    `,
  };

  try {
    const newReservation = await reservation.save();

    // sending email
    try {
      // sending email to the client
      await transporter.sendMail(mailToClient);
      console.log('Email sent to the client successfully.');

      // sending email to the company
      await transporter.sendMail(mailToCompany);
      console.log('Email sent to the company successfully.');
    } catch (emailError) {
      console.error('Error sending emails:', emailError.message);
    }

    res.status(200).json({
      message: 'Reservation successfully created!',
      message: newReservation,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
