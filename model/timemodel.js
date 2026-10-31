const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

module.exports = mongoose.model('time', timeSchema);