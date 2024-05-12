const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    const newUser = User.register({ email }, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(401).json(info);
    }
    const token = authenticate.getToken({ _id: user._id });
    return res
      .status(200)
      .json({ token: token, message: 'Logged in successfully!', user: user });
  })(req, res, next);
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({ success: false, message: 'Login failed!' });
});

router.get('/login/success', (req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ success: true, message: 'Login succesful!', user: req.user });
  }
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(process.env.CLIENT_URL);
  });
});

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
