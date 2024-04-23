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

/* router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false,
  }),
  function (req, res) {
    if (req.user) {
      const token = authenticate.getToken({ _id: req.user._id });
      res.redirect(`http://localhost:5173/`);
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  }
);
 */
module.exports = router;
