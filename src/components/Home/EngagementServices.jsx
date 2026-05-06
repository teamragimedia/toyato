import React from "react";
import { motion } from "framer-motion";
import { Leaf, Zap, Users } from "lucide-react";
import House from "../../assets/renewable energy animation.gif"; // replace with your image path

const services = [
  {
    icon: <Leaf size={28} />,
    title: "Collaboration Engagement",
    desc: "Partner with us on innovative clean tech solutions",
    color: "text-green-600",
    linkColor: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: <Zap size={28} />,
    title: "Engagement Model",
    desc: "Flexible frameworks tailored to your startup's needs",
    color: "text-blue-600",
    linkColor: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: "Corporate Solution",
    desc: "Enterprise support for organizations scaling impact",
    color: "text-[#FDB714]",
    linkColor: "text-[#FDB714]",
    bg: "bg-[#FDB714]",
  },
];

const EngagementServices = () => {
  return (
    <section className="bg-[#fff] py-16 relative overflow-hidden">
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
              className="bg-[#F6FCFF] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition"
            >
              {/* ICON */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.bg}`}
              >
                <div className={item.color}>{item.icon}</div>
              </div>

              {/* TITLE */}
              <h3 className={`mt-5 font-semibold text-[24px] ${item.color}`}>
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-md mt-2 pb-7 leading-relaxed">
                {item.desc}
              </p>

              {/* LINK */}
              <div
                className={`mt-4 text-md font-medium flex items-center gap-2 cursor-pointer ${item.linkColor}`}
              >
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12">
          <button
            className="px-8 py-3 text-white font-medium rounded-md shadow-md
            bg-[linear-gradient(145deg,#005da3,#66b64d)]
            hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Discover all services
          </button>
        </div>
      </div>

      {/* OPTIONAL RIGHT IMAGE */}
      <img
        src={House} // put your image here
        alt="energy"
        className="hidden lg:block absolute right-0 bottom-0 w-60 opacity-90"
      />
    </section>
  );
};

export default EngagementServices;
