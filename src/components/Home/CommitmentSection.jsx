import React from "react";
import { motion } from "framer-motion";

import brushLeft from "../../assets/brush-blue.png"; // your blue brush
import brushRight from "../../assets/brush-green.png"; // your green brush

const CommitmentSection = () => {
  return (
    <section className="relative bg-[#f5f7f9]  pt-36 pb-36 overflow-hidden">
      {/* LEFT BRUSH */}
      <img
        src={brushLeft}
        alt="brush"
        className="absolute left-0 bottom-0 w-80 md:w-70  lg:w-[500px]  pointer-events-none"
      />

      {/* RIGHT BRUSH */}
      <img
        src={brushRight}
        alt="brush"
        className="absolute right-0 top-0 w-80 md:w-70 lg:w-[500px]  rotate-180  pointer-events-none"
      />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-[#1c5d8c]"
        >
          Our Commitment
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify p-8"
        >
          We are committed to democratizing clean solutions and making
          sustainable technology accessible to enterprises worldwide and
          translate research and innovation from startup and Research hubs to
          real time Implementation . Through innovation, collaboration, and
          unwavering focus on environmental impact, we accelerate the global
          transition to Carbon Neutrality and Circular Economy practices.
        </motion.p>
      </div>
    </section>
  );
};

export default CommitmentSection;
