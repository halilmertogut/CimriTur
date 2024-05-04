const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  blogType: { type: String, required: true },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', BlogSchema);
