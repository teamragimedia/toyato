const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();
console.log("SERVER STARTING...");
const app = express();
const PORT = process.env.PORT || 5000;
// Connect DB
connectDB();

console.log("DB CONNECTION INITIALIZED");
// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lightseagreen-tarsier-455838.hostingersite.com",
    ],
    credentials: true,
  }),
);

// Static uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/solutions", require("./routes/solutionRoutes"));
app.use("/api/pitch", require("./routes/pitchRoutes"));
app.use("/api/press", require("./routes/pressRoutes"));

app.use(express.static(path.join(__dirname, "../dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

console.log("STARTING EXPRESS SERVER");

// Server start
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
