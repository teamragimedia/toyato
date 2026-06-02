import React from "react";
import { motion } from "framer-motion";

import brushLeft from "../../assets/arthaa.png";

const CommitmentSection = () => {
  return (
    <section className="relative bg-[#f5f7f9] py-16 md:py-24 lg:py-36 overflow-hidden">
      {/* Background Brush */}
      <img
        src={brushLeft}
        alt="brush"
        className="
    hidden lg:block
    absolute
    left-0
    top-0
    w-[1100px]
    xl:w-[1300px]
    2xl:w-[1450px]
    ml-32
    h-auto
    pointer-events-none
  "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-full lg:w-[70%] lg:ml-auto mt-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-[#1c5d8c]
              text-center
              lg:text-left
            "
          >
            Our Commitment
          </motion.h2>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-6
              text-gray-600
              leading-relaxed
              text-base
              md:text-lg
              text-center
              lg:text-left
            "
          >
            We are committed to democratizing clean solutions and making
            sustainable technology accessible to enterprises worldwide while
            translating research and innovation from startups and research hubs
            into real-world implementation. Through innovation, collaboration,
            and an unwavering focus on environmental impact, we accelerate the
            global transition to Carbon Neutrality and Circular Economy
            practices.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
