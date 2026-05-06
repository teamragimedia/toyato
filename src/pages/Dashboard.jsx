import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Dashboard.css";
import SolutionCard from "../components/SolutionCard";

const Dashboard = () => {
  const [solutions, setSolutions] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    problem: "",
    solution: "",
    features: "",
    sdgs: [],
    status: "ongoing",
  });

  const SDG_LIST = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals",
  ];
  const [editId, setEditId] = useState(null);
  const fetchSolutions = async () => {
    try {
      const res = await API.get("/solutions");

      console.log("SOLUTIONS API RESPONSE:", res.data);

      // ✅ Ensure always array
      if (Array.isArray(res.data)) {
        setSolutions(res.data);
      } else if (Array.isArray(res.data.solutions)) {
        setSolutions(res.data.solutions);
      } else {
        console.error("❌ API did not return array");
        setSolutions([]);
      }
    } catch (err) {
      console.error("❌ Fetch solutions error:", err);
      setSolutions([]);
    }
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSDGChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (o) =>
      Number(o.value),
    );
    setForm({ ...form, sdgs: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT CLICKED");

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("problem", form.problem);
    formData.append("solution", form.solution);
    formData.append("status", form.status);

    // ✅ only append if exists
    if (form.image) {
      formData.append("image", form.image);
    }

    const featuresArray = form.features
      ? form.features.split(",").map((f) => f.trim())
      : [];

    formData.append("features", JSON.stringify(featuresArray));
    formData.append("sdgs", JSON.stringify(form.sdgs));

    try {
      if (editId) {
        await API.put(`/solutions/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await API.post("/solutions", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("✅ Added successfully");

      fetchSolutions();
    } catch (err) {
      console.error("❌ ERROR:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/solutions/${id}`);
    fetchSolutions();
  };

  const handleEdit = (item) => {
    setForm({
      ...item,
      features: item.features.join(", "),
    });
    setEditId(item._id);
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <input
          type="file"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <input
          name="problem"
          value={form.problem}
          onChange={handleChange}
          placeholder="Problem"
        />
        <input
          name="solution"
          value={form.solution}
          onChange={handleChange}
          placeholder="Solution"
        />
        <input
          name="features"
          value={form.features}
          onChange={handleChange}
          placeholder="Features (comma separated)"
        />

        <div className="sdg-checkbox-group">
          {SDG_LIST.map((sdg, index) => {
            const value = index + 1;

            return (
              <label key={value} className="sdg-item">
                <input
                  type="checkbox"
                  checked={form.sdgs.includes(value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      // ✅ ADD (multi select)
                      setForm((prev) => ({
                        ...prev,
                        sdgs: [...prev.sdgs, value],
                      }));
                    } else {
                      // ❌ REMOVE
                      setForm((prev) => ({
                        ...prev,
                        sdgs: prev.sdgs.filter((s) => s !== value),
                      }));
                    }
                  }}
                />
                <span>
                  SDG {value}: {sdg}
                </span>
              </label>
            );
          })}
        </div>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="collaboration">Collaboration</option>
          <option value="trial">Trial</option>
        </select>

        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <div className="card-grid">
        {Array.isArray(solutions) &&
          solutions.map((item) => (
            <SolutionCard
              key={item._id}
              item={item}
              refresh={fetchSolutions}
              isAdmin={true}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
