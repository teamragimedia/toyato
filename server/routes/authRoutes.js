const router = require("express").Router();
const { login } = require("../controllers/authController");

router.post("/login", login);
const authMiddleware = require("../middleware/authMiddleware");

router.get("/me", authMiddleware, (req, res) => {
  res.json(req.admin); // ✅ return real admin data
});

module.exports = router;
