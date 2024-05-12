require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

// connect to db
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log('Connecting to database error:', error));
db.once('open', async () => {
  console.log('Connected to MongoDB Database');
});

// accept json
app.use(express.json());

const allowedOrigins = process.env.CORS_ADDITIONAL_ORIGIN
  ? ['http://localhost:5173', process.env.CORS_ADDITIONAL_ORIGIN].filter(
      Boolean
    )
  : ['http://localhost:5173'];

// cors
app.use(
  cors({
    origin: allowedOrigins,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
  })
);

// passport configuration
app.use(passport.initialize());
app.use(passport.session());

// routes
const reservationsRouter = require('./routes/reservations');
const usersRouter = require('./routes/users');

app.use('/api/reservations', reservationsRouter);
app.use('/api/users', usersRouter);

app.listen(3000, () => console.log('Server started on Port 3000'));
