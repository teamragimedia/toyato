const mongoose = require("mongoose");

const pitchSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    company: String,
    website: String,
    industry: String,
    description: String,
    stage: String,
    location: String,
    funding_raised: String,
    funding_required: String,
    team_size: String,
    file: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Pitch", pitchSchema);
