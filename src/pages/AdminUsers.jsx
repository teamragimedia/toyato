import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [admins, setAdmins] = useState([]);

  const token = localStorage.getItem("token");

  // 🔥 FETCH ADMINS
  const fetchAdmins = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAdmins(res.data);
    } catch (err) {
      console.error(
        "Error fetching admins:",
        err.response?.data || err.message,
      );
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // 🔥 DELETE ADMIN
  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.msg || "Delete failed");
    }
  };

  // 🔥 UPDATE ROLE
  const updateRole = async (id, role) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/${id}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.msg || "Update failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Admins List</h2>

      <table className="w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Role</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {admins.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center">
                No admins found
              </td>
            </tr>
          ) : (
            admins.map((admin) => (
              <tr key={admin._id} className="border-b">
                <td className="p-2">{admin.name}</td>
                <td>{admin.email}</td>

                <td>
                  <select
                    value={admin.role}
                    onChange={(e) => updateRole(admin._id, e.target.value)}
                    className="border p-1"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </td>

                <td>
                  {admin.role !== "superadmin" &&
                    admin._id !==
                      JSON.parse(localStorage.getItem("user"))?.id && (
                      <button
                        onClick={() => deleteAdmin(admin._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
