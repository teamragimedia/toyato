const express = require("express");
const router = express.Router();
const multer = require("multer");
const Pitch = require("../models/Pitch");

// 📂 Storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// ✅ POST API
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const {
      1: name,
      2: email,
      3: company,
      4: website,
      5: industry,
      6: description,
      7: stage,
      8: location,
      9: funding_raised,
      10: funding_required,
      11: team_size,
    } = req.body;

    const newPitch = new Pitch({
      name,
      email,
      company,
      website,
      industry,
      description,
      stage,
      location,
      funding_raised,
      funding_required,
      team_size,

      // 🔥 FIXED FILE STORAGE
      file: req.file
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : null,
    });

    await newPitch.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Pitch.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
