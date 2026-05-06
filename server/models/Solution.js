const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  description: String,
  problem: String,
  solution: String,
  features: [String],
  sdgs: [Number],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  status: String,

  status: {
    type: String,
    enum: ["collaboration", "completed", "ongoing", "trial"],
    default: "ongoing",
  },
});

module.exports = mongoose.model("Solution", solutionSchema);
