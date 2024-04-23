require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username });
        if (!user) {
          return done(null, false, { message: "Email doesn't exist" });
        }
        const result = await user.authenticate(password);
        if (result.user) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password Incorrect' });
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

const secretKey = process.env.SECRET_KEY;

exports.getToken = function (user) {
  return jwt.sign(user, secretKey, { expiresIn: 3600 }); // Expires in 1 hour
};

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// google auth
/* passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/users/auth/google/callback',
      session: false,
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        let user = await User.findOne({
          $or: [{ googleId: profile.id }, { email: profile.emails[0].value }],
        });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            picture: profile.photos[0].value,
          });
        } else {
          // Update googleId if it doesn't exist
          if (!user.googleId) {
            user.googleId = profile.id;
            user.picture = profile.photos[0].value; // Update picture as well, if needed
            await user.save();
          }
        }

        return cb(null, user);
      } catch (err) {
        return cb(err, null);
      }
    }
  )
); */

exports.verifyUser = passport.authenticate('jwt', { session: false });
