const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    // 🔥 ADD THESE
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    phone: { type: String },

    role: {
      type: String,
      enum: ["superadmin", "admin"],
      default: "admin",
    },

    permissions: {
      solutions: { type: Boolean, default: true },
      pitches: { type: Boolean, default: true },
      press: { type: Boolean, default: true },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Admin", adminSchema);
