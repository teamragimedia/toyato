import React, { useRef } from "react";
import banners from "../../assets/proposeidea.png";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center overflow-hidden bg-[#f6f8fb]"
    >
      {/* 🔥 BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banners})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔥 MOBILE OVERLAY (improves readability) */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent" />

      {/* 🔥 SPOTLIGHT (ONLY DESKTOP) */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: `radial-gradient(500px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.25), transparent 70%)`,
        }}
      />

      {/* 🔥 FLOATING PARTICLES (REDUCED ON MOBILE) */}
      <div className="hidden md:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
            className="absolute w-3 h-3 bg-blue-400/30 rounded-full blur-sm"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#1f4e79] leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Press Room
            </span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg mb-6"
          >
            Read the latest news
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
