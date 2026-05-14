import React from "react";
import { motion } from "framer-motion";

import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud1.png";
import cloud4 from "../../assets/cloud1.png";

import toyotaLogo from "../../assets/blue.png";
import arthaLogo from "../../assets/green.png";

const AboutSection = () => {
  return (
    <section className="relative bg-[#f5f7f9] py-20 overflow-hidden">
      {/* ===== MOVING CLOUDS ===== */}

      <motion.img
        src={cloud1}
        className="absolute top-10 left-[-200px] w-40 opacity-80"
        animate={{ x: ["0%", "120vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src={cloud2}
        className="absolute top-20 left-[-150px] w-52 opacity-70"
        animate={{ x: ["0%", "110vw"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src={cloud4}
        className="absolute top-20 left-[-100px] w-52 opacity-70"
        animate={{ x: ["0%", "110vw"] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src={cloud3}
        className="absolute bottom-10 left-[-150px] w-36 opacity-60"
        animate={{ x: ["0%", "110vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c5d8c] mb-12 pb-9">
          About us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <div className="bg-[#dce9f5] rounded-xl p-6 md:p-8 shadow-sm text-center">
            {/* ✅ centered image */}
            <img src={toyotaLogo} className="mb-6 mx-auto block" alt="Toyota" />

            {/* ✅ centered content */}
            <div className="bg-[#c9ddea] p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#1c5d8c] mb-3">
                About Toyota Tsusho
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Toyota Tsusho India Private Limited (TTIPL) is the Indian arm of
                Toyota Tsusho Corporation, a key strategic member of the
                globally renowned Toyota Group.
              </p>

              <p className="mt-4 text-[#1c5d8c] text-sm font-medium cursor-pointer">
                Read more →
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#e3efe5] rounded-xl p-6 md:p-8 shadow-sm text-center">
            {/* ✅ centered image */}
            <img
              src={arthaLogo}
              className="mb-6 mx-auto block"
              alt="Arthaviskara"
            />

            {/* ✅ centered content */}
            <div className="bg-[#d7ead9] p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#4caf50] mb-3">
                About Arthaviskara
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Arthaviskara is the flagship engagement platform of SCD, TTIPL,
                designed to bridge new innovation with new business by building
                a robust ecosystem of enablers.
              </p>

              <p className="mt-4 text-[#4caf50] text-sm font-medium cursor-pointer">
                Read more →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
