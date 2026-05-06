const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
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

// Server start
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
