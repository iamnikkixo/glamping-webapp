require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

// connect to db
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log('Connecting to database error:', error));
db.once('open', async () => {
  console.log('Connected to MongoDB Database');
});

// accept json
app.use(express.json());

// cors
app.use(cors());

// passport configuration
app.use(passport.initialize());

// routes
const reservationsRouter = require('./routes/reservations');
const usersRouter = require('./routes/users');

app.use('/api/reservations', reservationsRouter);
app.use('/api/users', usersRouter);

app.listen(3000, () => console.log('Server started on Port 3000'));
