import React from "react";

// MAIN IMAGE
import Mainimage from "../../assets/crowdfunding.gif";

// BACKGROUND BRUSHES
import topRight from "../../assets/brush-green.png";
import bottomLeft from "../../assets/brush-blue.png";

// ICONS
import problem from "../../assets/problem statement 1.gif";
import create from "../../assets/co create.gif";
import match from "../../assets/match making.gif";
import gaze from "../../assets/innovation.gif";
import csr from "../../assets/crs.gif";

const data = [
  { title: "Problem Statement", img: problem, color: "text-blue-600" },
  { title: "Co-Create", img: create, color: "text-blue-600" },
  { title: "Match Making", img: match, color: "text-orange-500" },
  { title: "Innovation Gaze", img: gaze, color: "text-orange-500" },
  { title: "CSR", img: csr, color: "text-green-600" },
];

const CorporateSolution = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-[#F6FCFF] relative overflow-hidden">
      {/* BACKGROUND IMAGES */}
      <img
        src={topRight}
        alt=""
        className="absolute top-0 right-0 w-96 sm:w-96 md:w-96 opacity-70 pointer-events-none rotate-180"
      />
      <img
        src={bottomLeft}
        alt=""
        className="absolute bottom-0 left-0 w-96 sm:w-96 md:w-96 opacity-70 pointer-events-none"
      />

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 text-center mb-10 md:mb-16">
        Corporate Solution
      </h2>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
        {/* LEFT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-2 md:mb-3 object-cover"
              />

              <p
                className={`text-[18px] font-medium text-center ${item.color}`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ARROW (DESKTOP ONLY) */}
        <div className="hidden lg:flex items-center justify-center text-blue-600 text-2xl">
          →
        </div>

        {/* RIGHT BIG CARD */}
        <div className="flex-1 flex">
          <div className="bg-white border border-blue-200 rounded-2xl p-6 md:p-8 w-full flex flex-col items-center justify-center shadow-md">
            {/* BIG IMAGE */}
            <img
              src={Mainimage}
              alt="main"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover mb-4 md:mb-6 position-relative z-10"
            />

            <p className="text-blue-600 font-medium text-center text-sm sm:text-base">
              Innovation Stake <br /> Holder System
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSolution;
