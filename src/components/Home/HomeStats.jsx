import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ideaGif from "../../assets/Ideaproposals.gif";
import evaluateGif from "../../assets/ideaevaluated.gif";
import pitchGif from "../../assets/startuppitch.gif";
import synergyGif from "../../assets/startupsynergy.gif";
import pucGif from "../../assets/pucconducted.gif";
import mouGif from "../../assets/moqsigned.gif";

const SafeCountUp = CountUp?.default || CountUp;

const stats = [
  {
    value: 3000,
    suffix: "+",
    label: "Idea proposals received",
    color: "#6bbf59",
    gif: ideaGif,
  },
  {
    value: 1100,
    suffix: "+",
    label: "Ideas evaluated",
    color: "#f59e0b",
    gif: evaluateGif,
  },
  {
    value: 90,
    suffix: "+",
    label: "Startup Pitch",
    color: "#1d4ed8",
    gif: pitchGif,
  },
  {
    value: 40,
    suffix: "+",
    label: "startups synergy",
    color: "#f97316",
    gif: synergyGif,
  },
  {
    value: 20,
    suffix: "",
    label: "PUC conducted",
    color: "#06b6d4",
    gif: pucGif,
  },
  {
    value: 6,
    suffix: "+",
    label: "MOU signed",
    color: "#ef4444",
    gif: mouGif,
  },
];

const HomeStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#eef3f7] py-12">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* GIF */}
            <img
              src={item.gif}
              alt={item.label}
              className="w-20 h-20 object-contain mb-4"
            />

            {/* Count */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: item.color }}
            >
              {inView ? (
                <SafeCountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              ) : (
                "0"
              )}
            </h2>

            {/* Label */}
            <p className="mt-2 text-md text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
