import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import API from "../../api";

export default function FeaturedStories() {
  const [data, setData] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchFeaturedStories = async () => {
      try {
        const res = await API.get("/press/featured");

        console.log("Featured Stories Response:", res.data);

        let stories = [];

        if (Array.isArray(res.data)) {
          stories = res.data;
        } else if (Array.isArray(res.data.data)) {
          stories = res.data.data;
        } else if (Array.isArray(res.data.stories)) {
          stories = res.data.stories;
        } else {
          console.error("Unexpected API format:", res.data);
        }

        setData(stories);
      } catch (err) {
        console.error("Error fetching featured stories:", err);
        setData([]);
      }
    };

    fetchFeaturedStories();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="container max-w-[1800px] align-middle content-center px-6 md:px-12 py-10 bg-white relative">
      <h2 className="text-2xl font-bold mb-8 text-center text-black">
        Featured Stories
      </h2>

      {data.length > 0 && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 whitespace-nowrap"
      >
        {Array.isArray(data) ? (
          data.map((item) => (
            <div
              key={item._id}
              className="flex-shrink-0 inline-block w-[85%] sm:w-[48%] md:w-[32%] lg:w-[30%] bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={`/uploads/${item.image}`}
                alt={item.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />

              <div className="p-4 min-w-0">
                <p className="text-blue-600 text-xs uppercase">
                  {item.category}
                </p>

                <h3 className="font-semibold text-lg leading-snug line-clamp-2 break-words overflow-hidden">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {item.createdAt
                    ? new Date(item.createdAt).toDateString()
                    : ""}
                </p>
              </div>
            </div>
          ))
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>

      {data.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No featured stories found.
        </p>
      )}
    </section>
  );
}
