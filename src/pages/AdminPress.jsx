import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPress() {
  // 🔹 CREATE FORM
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    isFeatured: false,
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 LIST
  const [stories, setStories] = useState([]);

  // 🔹 EDIT
  const [editing, setEditing] = useState(null);

  // ================= FETCH =================
  const fetchStories = async () => {
    const res = await axios.get("http://localhost:5000/api/press");
    setStories(res.data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // ================= CREATE =================
  const handleSubmit = async () => {
    if (!form.title || !form.description || !image) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      Object.keys(form).forEach((key) => {
        data.append(key, form[key]);
      });

      data.append("image", image);

      await axios.post("http://localhost:5000/api/press/create", data);

      alert("Story Added 🚀");

      setForm({
        title: "",
        category: "",
        description: "",
        content: "",
        isFeatured: false,
      });
      setImage(null);

      fetchStories(); // 🔥 refresh list
    } catch (err) {
      console.error(err);
      alert("Error creating story");
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE =================
  const deleteStory = async (id) => {
    if (!window.confirm("Delete this story?")) return;

    await axios.delete(`http://localhost:5000/api/press/${id}`);
    fetchStories();
  };

  // ================= UPDATE =================
  const updateStory = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/press/${editing._id}`,
        editing,
      );

      setEditing(null);
      fetchStories();
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="p-6 space-y-10">
      {/* ================= CREATE ================= */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-black">
          Create Press Story
        </h2>

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded-lg"
          placeholder="Short Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded-lg"
          placeholder="Full Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
          />
          Featured Story
        </label>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
        >
          {loading ? "Creating..." : "Create Story"}
        </button>
      </div>

      {/* ================= LIST ================= */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">All Stories</h2>

        <div className="space-y-4">
          {stories.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                className="w-24 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>

              <button
                onClick={() => setEditing(item)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteStory(item._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl w-[500px] space-y-4">
            <h2 className="text-lg font-semibold text-black">Edit Story</h2>

            {/* Title */}
            <input
              value={editing.title}
              onChange={(e) =>
                setEditing({ ...editing, title: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Title"
            />

            {/* Category */}
            <input
              value={editing.category}
              onChange={(e) =>
                setEditing({ ...editing, category: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Category"
            />

            {/* Description */}
            <textarea
              value={editing.description}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Short Description"
            />

            {/* Content */}
            <textarea
              value={editing.content}
              onChange={(e) =>
                setEditing({ ...editing, content: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Full Content"
            />

            {/* Image Upload */}
            <input
              type="file"
              onChange={(e) =>
                setEditing({
                  ...editing,
                  newImage: e.target.files[0],
                })
              }
            />

            {/* Featured */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={editing.isFeatured}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    isFeatured: e.target.checked,
                  })
                }
              />
              Featured Story
            </label>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={async () => {
                  const data = new FormData();

                  Object.keys(editing).forEach((key) => {
                    if (key !== "newImage") {
                      data.append(key, editing[key]);
                    }
                  });

                  if (editing.newImage) {
                    data.append("image", editing.newImage);
                  }

                  await axios.put(
                    `http://localhost:5000/api/press/${editing._id}`,
                    data,
                  );

                  setEditing(null);
                  fetchStories();
                }}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                onClick={() => setEditing(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
