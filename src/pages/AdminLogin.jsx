import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );

      console.log("LOGIN RESPONSE:", res.data); // 🔍 debug

      // 🔥 MUST EXIST
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/admin");
    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Admin Panel</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin}>Login</button>
      </motion.div>
    </div>
  );
}
