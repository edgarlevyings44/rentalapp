const mongoose = require('mongoose');

const chairSchema = new mongoose.Schema({
  description: String,
  no: Number,
  date: { type: Date, default: Date.now }
});

const Chair = mongoose.model('Chair', chairSchema);

module.exports = Chair;