const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String },
  date_publ: { type: Date },
  date_act: { type: Date },
  status: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
