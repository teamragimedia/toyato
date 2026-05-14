import React from "react";
import { motion } from "framer-motion";

import House from "../../assets/renewable energy animation.gif";

import Collaboration from "../../assets/collaboration.gif";
import Engagement from "../../assets/engagement.gif";
import Corporate from "../../assets/corporate.gif";

const services = [
  {
    img: Collaboration,
    title: "Collaboration Engagement",
    desc: "Partner with us on innovative clean tech solutions",
    color: "text-green-600",
    linkColor: "text-green-600",
    bg: "bg-green-100",
  },
  {
    img: Engagement,
    title: "Engagement Model",
    desc: "Flexible frameworks tailored to your startup's needs",
    color: "text-blue-600",
    linkColor: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    img: Corporate,
    title: "Corporate Solution",
    desc: "Enterprise support for organizations scaling impact",
    color: "text-[#FDB714]",
    linkColor: "text-[#FDB714]",
    bg: "bg-yellow-100",
  },
];

const EngagementServices = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81]">
          Our Engagement Services
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Multiple pathways to collaborate with us based on your organization's
          stage and needs
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F6FCFF] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* GIF ICON */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-xl mx-auto ${item.bg}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-contain text-center"
                />
              </div>

              {/* TITLE */}
              <h3
                className={`mt-5 font-semibold text-center text-2xl ${item.color}`}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-center text-md mt-3 pb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* LINK */}
              {/* <div
                className={`mt-4 text-md font-medium flex items-center gap-2 cursor-pointer ${item.linkColor}`}
              >
                Learn More →
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        {/* <div className="mt-12">
          <button
            className="px-8 py-3 text-white font-medium rounded-md shadow-md
            bg-[linear-gradient(145deg,#005da3,#66b64d)]
            hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Discover all services
          </button>
        </div> */}
      </div>

      {/* RIGHT SIDE GIF */}
      <img
        src={House}
        alt="Renewable Energy"
        className="hidden lg:block absolute right-0 bottom-0 w-40 opacity-90"
      />
    </section>
  );
};

export default EngagementServices;
