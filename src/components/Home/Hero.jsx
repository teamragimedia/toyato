import React, { useRef } from "react";
import banner from "../../assets/banner.png";
import { FiArrowRight } from "react-icons/fi";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);

  // Mouse tracking for spotlight
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
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-[#f6f8fb]"
    >
      {/* 🔥 ANIMATED BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

      {/* 🔥 SPOTLIGHT FOLLOW EFFECT */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.25), transparent 70%)`,
        }}
      />

      {/* 🔥 GRADIENT FADE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f6f8fb] via-[#f6f8fb]/90 to-transparent" />

      {/* 🔥 FLOATING PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
          className="absolute w-3 h-3 bg-blue-400/30 rounded-full blur-sm"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 12}%`,
          }}
        />
      ))}

      {/* 🔥 NOISE OVERLAY (SUPER PREMIUM) */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          {/* BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 text-[#005DA3] rounded-full text-sm font-medium bg-white/70 backdrop-blur-xl border border-[#005DA3]/30 group cursor-pointer"
          >
            Energy Transition Leaders
            <FiArrowRight className="group-hover:translate-x-2 transition" />
          </motion.span>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-semibold text-[#1f4e79] leading-tight mt-6 mb-6"
          >
            Start your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent animate-pulse">
              sustainability
            </span>
            <br />
            today
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg mb-8"
          >
            Supporting startups, inventors, and innovators in building scalable
            solutions for a sustainable future.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            {/* 🔥 MAGNETIC BUTTON */}
            <MagneticButton>Explore Solutions</MagneticButton>

            <MagneticButton secondary>Learn More</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* 🔥 MAGNETIC BUTTON COMPONENT */
const MagneticButton = ({ children, secondary }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-md shadow-lg transition ${
        secondary
          ? "bg-blue-600 text-white"
          : "text-white bg-gradient-to-r from-[#005da3] to-[#66b64d]"
      }`}
    >
      {children}
    </motion.button>
  );
};
