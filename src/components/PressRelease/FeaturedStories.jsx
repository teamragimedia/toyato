import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FeaturedStories() {
  const [data, setData] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/press/featured")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="container max-w-[1200px]px-6 md:px-12 py-10 bg-white relative">
      <h2 className="text-2xl font-bold mb-8 text-center text-black">
        Featured Stories
      </h2>

      {/* 🔥 LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>

      {/* 🔥 RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full text-black w-10 h-10 flex items-center justify-center hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      {/* 🔥 CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 whitespace-nowrap"
      >
        {data.map((item) => (
          <div
            key={item._id}
            className="flex-shrink-0 inline-block w-[85%] sm:w-[48%] md:w-[32%] lg:w-[30%] bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              className="w-full h-52 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <p className="text-blue-600 text-xs uppercase">{item.category}</p>

              <h3 className="font-semibold text-lg leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                {new Date(item.createdAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
