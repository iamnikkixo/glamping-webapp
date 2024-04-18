require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

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

// routes
const reservationsRouter = require('./routes/reservations');
app.use('/api/reservations', reservationsRouter);

app.listen(3000, () => console.log('Server started on Port 3000'));
