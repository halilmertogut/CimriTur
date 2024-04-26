// models/Tour.js
const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  description: String,
  imageUrl: String,
});

const tourSchema = new mongoose.Schema({
  name: String,
  type: String,
  region: String,
  description: String,
  price: Number,
  days: [daySchema],
});

module.exports = mongoose.model('Tour', tourSchema);
