// models/Press.js
const mongoose = require("mongoose");

const pressSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  description: String,
  content: String,

  isFeatured: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Press", pressSchema);
