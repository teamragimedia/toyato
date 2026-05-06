import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SafeCountUp = CountUp?.default || CountUp;

const stats = [
  {
    value: 3000,
    suffix: "+",
    label: "Idea proposals received",
    color: "#6bbf59",
  },
  { value: 1100, suffix: "+", label: "Ideas evaluated", color: "#f59e0b" },
  { value: 90, suffix: "+", label: "Startup Pitch", color: "#1d4ed8" },
  { value: 40, suffix: "+", label: "startups synergy", color: "#f97316" },
  { value: 20, suffix: "", label: "PUC conducted", color: "#06b6d4" },
  { value: 6, suffix: "+", label: "MOU signed", color: "#ef4444" },
];

const HomeStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#eef3f7] py-12">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
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

            <p className="mt-2 text-md text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
