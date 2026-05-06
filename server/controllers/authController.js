const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ msg: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    // ✅ COOKIE (optional, fine to keep)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    // 🔥 IMPORTANT: send user data
    res.json({
      token,
      user: {
        id: admin._id,
        username: admin.username,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        role: admin.role,
        permissions: admin.permissions,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
