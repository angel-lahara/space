const mongoose = require('mongoose');

const connection = process.env.MONGO_URI;

mongoose.connect(connection)
  .then(() => {
    console.log('MongoDB connected successfully');
    const startFetching = require('../controllers/timecontroller');
    startFetching();
  })
  .catch((err) => {
    console.log('MongoDB connection failed:', err);
  });

module.exports = mongoose;