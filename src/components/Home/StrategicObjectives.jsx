import React from "react";
import { motion } from "framer-motion";
import bgimage from "../../assets/bg-pattern.png"; // optional background image

const objectives = [
  {
    id: "01",
    title: "Support Emerging Startups",
    desc: "Provide cutting-edge technology solutions and engagement frameworks to accelerate innovation in the clean energy space",
    color: "bg-[#1c5d8c]",
    text: "text-[#1c5d8c]",
  },
  {
    id: "02",
    title: "Enterprise Sustainability",
    desc: "Enable large enterprises to transition to sustainable operations through our comprehensive solutions portfolio",
    color: "bg-[#f59e0b]",
    text: "text-[#f59e0b]",
  },
  {
    id: "03",
    title: "Global Partnerships",
    desc: "Build and nurture strategic partnerships across industries for rapid technology adoption and market expansion",
    color: "bg-[#4caf50]",
    text: "text-[#4caf50]",
  },
  {
    id: "04",
    title: "Environmental Impact",
    desc: "Create measurable positive environmental impact through scalable technology solutions that reduce carbon footprints",
    color: "bg-[#ef4444]",
    text: "text-[#ef4444]",
  },
];

const StrategicObjectives = () => {
  return (
    <section className="relative bg-[#f5f7f9] pb-28 pt-28 overflow-hidden">
      {/* LIGHT BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgimage})` }} // optional
      />

      <div className="max-w-6xl mx-auto relative z-10 p-8">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-[#1c5d8c] pb-9"
        >
          Strategic Objectives
        </motion.h2>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {objectives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 group"
            >
              {/* NUMBER CIRCLE */}
              <div
                className={`min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-semibold shadow-md ${item.color}`}
              >
                {item.id}
              </div>

              {/* TEXT */}
              <div>
                <h3
                  className={`font-semibold text-[26px] ${item.text} group-hover:underline transition`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-md leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicObjectives;
