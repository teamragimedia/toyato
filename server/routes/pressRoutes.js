const express = require("express");
const router = express.Router();
const Press = require("../models/Press");

// ✅ multer
const upload = require("../middleware/upload");

// 🔥 CREATE STORY
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const newPress = new Press({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      content: req.body.content,
      isFeatured: req.body.isFeatured === "true",
      image: req.file ? req.file.filename : null,
    });

    await newPress.save();
    res.status(201).json(newPress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET FEATURED STORIES
router.get("/featured", async (req, res) => {
  try {
    const stories = await Press.find({ isFeatured: true })
      .sort({ createdAt: -1 })
      .limit(6);

    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET RECENT STORIES (ALL STORIES)
router.get("/recent", async (req, res) => {
  try {
    const stories = await Press.find().sort({ createdAt: -1 }); // 🔥 latest first

    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET ALL STORIES (for admin)
router.get("/", async (req, res) => {
  try {
    const data = await Press.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔥 DELETE STORY
router.delete("/:id", async (req, res) => {
  try {
    await Press.findByIdAndDelete(req.params.id);
    res.json({ msg: "Story deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔥 UPDATE STORY
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      content: req.body.content,
      isFeatured: req.body.isFeatured === "true",
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await Press.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
