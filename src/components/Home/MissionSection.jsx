import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaTint, FaWrench, FaArrowUp } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MissionSection = () => {
  return (
    <section className="bg-[#f5f7f9] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c5d8c] mb-5">
            Our Mission
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            We catalyze the energy transition by supporting innovative startups
            and organizations developing sustainable solutions across renewable
            energy, water management, waste treatment, smart mobility, and
            industrial automation.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Through collaboration, strategic support, and access to networks and
            expertise, we enable transformative technologies to scale and create
            lasting positive environmental impact.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white rounded-md shadow-lg
            bg-[linear-gradient(145deg,#005da3,#66b64d)]"
          >
            Join Our Community
          </motion.button>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {[
            {
              icon: <FaLeaf />,
              title: "Renewable Energy",
              bg: "bg-[#f5e9d8]",
              color: "text-[#f39c12]",
            },
            {
              icon: <FaTint />,
              title: "Water Management",
              bg: "bg-[#e3efe5]",
              color: "text-[#4caf50]",
            },
            {
              icon: <FaWrench />,
              title: "Industrial Tech",
              bg: "bg-[#dce9f5]",
              color: "text-[#1f5fa8]",
            },
            {
              icon: <FaArrowUp />,
              title: "Smart Mobility",
              bg: "bg-[#f5dede]",
              color: "text-[#e74c3c]",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.1)",
              }}
              className={`${item.bg} rounded-xl p-6 flex flex-col items-center justify-center text-center h-[130px] cursor-pointer transition`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className={`${item.color} text-2xl mb-2`}
              >
                {item.icon}
              </motion.div>

              <p className={`text-lg font-medium ${item.color}`}>
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
