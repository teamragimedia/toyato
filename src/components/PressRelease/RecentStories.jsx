import { useEffect, useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";

export default function RecentStories() {
  const [data, setData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/press/recent")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="px-6 md:px-12 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 align-middle text-black text-center">
        Recent Stories
      </h2>

      <div className="space-y-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow"
          >
            {/* Image */}
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt=""
              className="w-full md:w-32 h-40 md:h-24 object-cover rounded-lg"
            />

            {/* Content */}
            <div className="flex-1">
              <p className="text-blue-600 text-sm uppercase">{item.category}</p>

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-gray-500 text-sm">
                {new Date(item.createdAt).toDateString()}
              </p>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Read More */}
            <button
              onClick={() => setSelectedStory(item)}
              className="text-blue-600 bg-white border-none flex items-center gap-1 hover:gap-2 transition-all"
            >
              Read More <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedStory &&
        createPortal(
          <div
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-2 md:p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
          bg-white w-full max-w-4xl 
          h-[90vh] md:h-auto
          md:max-h-[90vh]
          rounded-2xl shadow-2xl 
          overflow-hidden flex flex-col
        "
            >
              {/* Close */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
              >
                ✕
              </button>

              {/* Image */}
              {selectedStory.image && (
                <img
                  src={`http://localhost:5000/uploads/${selectedStory.image}`}
                  className="w-full h-48 md:h-64 object-cover"
                />
              )}

              {/* 🔥 SCROLLABLE CONTENT */}
              <div className="p-4 md:p-6 overflow-y-auto flex-1">
                <p className="text-sm text-blue-600 font-semibold uppercase">
                  {selectedStory.category}
                </p>

                <h2 className="text-xl md:text-3xl font-bold mt-2 mb-2 text-black">
                  {selectedStory.title}
                </h2>

                <p className="text-gray-500 text-sm mb-4">
                  {new Date(selectedStory.createdAt).toDateString()}
                </p>

                <p className="text-gray-700 mb-4">
                  {selectedStory.description}
                </p>

                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedStory.content}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
