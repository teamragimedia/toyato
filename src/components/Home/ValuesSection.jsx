import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLeaf, FaHandshake, FaGlobe } from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Pioneering solutions that redefine what's possible in clean tech",
    color: "text-yellow-500",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Environmental responsibility at the core of everything we do",
    color: "text-green-500",
  },
  {
    icon: <FaHandshake />,
    title: "Collaboration",
    desc: "Partnering with startups, enterprises, and ecosystems globally",
    color: "text-orange-500",
  },
  {
    icon: <FaGlobe />,
    title: "Global Impact",
    desc: "Creating measurable positive change for the planet and humanity",
    color: "text-blue-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ValuesSection = () => {
  return (
    <section className="bg-[#eef3f7] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1c5d8c]"
        >
          Our Values & Objectives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-3 max-w-2xl mx-auto"
        >
          The principles and strategic focus that guide our mission to
          accelerate the global sustainability transition
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg"
            >
              {/* INNER CARD */}
              <div
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 h-full
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                transition duration-300"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-2xl mb-4 ${item.color}`}
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-500 leading-relaxed ">
                  {item.desc}
                </p>

                {/* GLOW EFFECT */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300
                  bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
