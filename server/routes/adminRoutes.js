const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware/authMiddleware");

// 🔐 ONLY SUPER ADMIN CHECK
const isSuperAdmin = (req, res, next) => {
  if (req.admin.role !== "superadmin") {
    return res.status(403).json({ msg: "Access denied" });
  }
  next();
};

router.post("/create", async (req, res) => {
  try {
    const { username, password, name, email, phone, role } = req.body;

    const existing = await Admin.findOne({ username });
    if (existing) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      password: hashedPassword,
      name,
      email,
      phone,
      role,
    });

    await newAdmin.save();

    res.json({ msg: "Admin created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error creating admin" });
  }
});

// ✅ GET ALL ADMINS
router.get("/all", authMiddleware, isSuperAdmin, async (req, res) => {
  const admins = await Admin.find().select("-password");
  res.json(admins);
});

// ✅ DELETE ADMIN
router.delete("/:id", authMiddleware, isSuperAdmin, async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ msg: "Admin deleted" });
});

// ✅ UPDATE ADMIN (role + details)
router.put("/:id", authMiddleware, isSuperAdmin, async (req, res) => {
  const updated = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", authMiddleware, isSuperAdmin, async (req, res) => {
  try {
    const target = await Admin.findById(req.params.id);

    // ❌ block deleting superadmin
    if (target.role === "superadmin") {
      return res.status(403).json({ msg: "Cannot delete super admin" });
    }

    // ❌ block deleting self
    if (target._id.toString() === req.admin.id) {
      return res.status(403).json({ msg: "You cannot delete yourself" });
    }

    await Admin.findByIdAndDelete(req.params.id);

    res.json({ msg: "Admin deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting admin" });
  }
});

module.exports = router;
