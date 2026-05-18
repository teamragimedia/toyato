import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Startup from "../../assets/startupicon.gif";
import Corporation from "../../assets/corporation.gif";
import Research from "../../assets/research.gif";
import Government from "../../assets/government.gif";

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
            We catalyze sustainability by supporting innovative startups,
            corporation, and research hubs in developing scalable solutions for
            a more sustainable future.
          </p>

          <ul className="list-disc list-outside pl-6 text-gray-600 mb-6 leading-relaxed text-justify space-y-3">
            <li>
              Our focus areas include mobility, resources and environment, and
              life and consumer solutions.
            </li>

            <li>
              Through collaboration, strategic support, and access to networks
              and expertise, we help transformative technologies scale and
              create lasting positive environmental impact.
            </li>
          </ul>

          {/* BUTTON */}
          <Link to="/propose-idea">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white rounded-md shadow-lg
            bg-[#2e8b57] hover:bg-[#1a5276] transition mouse-pointer"
            >
              Join Our Community
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {[
            {
              icon: Startup,
              title: "Startup",
              bg: "bg-[#f5e9d8]",
              color: "text-[#f39c12]",
            },
            {
              icon: Corporation,
              title: "Corporation",
              bg: "bg-[#e3efe5]",
              color: "text-[#4caf50]",
            },
            {
              icon: Research,
              title: "Research Hubs ",
              bg: "bg-[#dce9f5]",
              color: "text-[#1f5fa8]",
            },
            {
              icon: Government,
              title: "Government institution",
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
                className="mb-3"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
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
