import React, { useEffect, useState } from "react";

function AdminPanel() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pitch")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-black">
        📊 Pitch Submissions
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Industry</th>
              <th>Stage</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.company}</td>
                <td>{item.industry}</td>
                <td>{item.stage}</td>
                <td>{item.location}</td>

                <td>
                  <button
                    onClick={() => setSelected(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-black">
                Pitch Details
              </h2>

              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-black">
              <p>
                <strong>Name:</strong> {selected.name}
              </p>
              <p>
                <strong>Email:</strong> {selected.email}
              </p>
              <p>
                <strong>Company:</strong> {selected.company}
              </p>
              <p>
                <strong>Website:</strong> {selected.website}
              </p>
              <p>
                <strong>Industry:</strong> {selected.industry}
              </p>
              <p>
                <strong>Stage:</strong> {selected.stage}
              </p>
              <p>
                <strong>Location:</strong> {selected.location}
              </p>
              <p>
                <strong>Team Size:</strong> {selected.team_size}
              </p>
              <p>
                <strong>Funding Raised:</strong> {selected.funding_raised}
              </p>
              <p>
                <strong>Funding Required:</strong> {selected.funding_required}
              </p>

              <div>
                <strong>Description:</strong>
                <p className="text-gray-700 mt-1">{selected.description}</p>
              </div>

              {/* FILE DOWNLOAD */}
              <div>
                <strong>Pitch File:</strong>
                <br />
                {selected.file ? (
                  <a
                    href={selected.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Download File
                  </a>
                ) : (
                  <p>No file uploaded</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
