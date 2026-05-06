import { useState } from "react";
import axios from "axios";

export default function CreateAdmin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/admin/create", form);

      alert("✅ Admin created successfully");

      setForm({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        role: "admin",
      });
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating admin");
    }
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Admin</h2>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      >
        <option value="admin">Admin</option>
        <option value="superadmin">Super Admin</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Create Admin
      </button>
    </div>
  );
}
