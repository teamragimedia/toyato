import React from "react";
import "../../styles/Incubation.css";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Problem Definition & Direction",
    desc: "Corporates define real industry challenges to guide relevant research and startup innovation.",
    className: "s1",
    color: "green",
  },
  {
    id: "02",
    title: "Pilot & POC Enablement",
    desc: "Provide access to facilities, data, and use cases for real-world validation.",
    className: "s2",
    color: "blue",
  },
  {
    id: "03",
    title: "Market & Scale Access",
    desc: "Connect startups to customers, supply chains, and global markets.",
    className: "s3",
    color: "orange1",
  },
  {
    id: "04",
    title: "Mentorship & Co-Development",
    desc: "Offer technical, business, and GTM expertise through joint development.",
    className: "s4",
    color: "green",
  },
  {
    id: "05",
    title: "Investment De-Risking",
    desc: "Validate technologies and create confidence for investor participation.",
    className: "s5",
    color: "yellow1",
  },
];

export default function Incubation() {
  return (
    <section className="incubation">
      <div className="wrap">
        {/* BIG CIRCLE */}
        <motion.div
          className="big-circle"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>
            Services for <br /> Incubation <br /> Hub A2oZ
          </h2>
        </motion.div>

        {/* ARC DRAW ANIMATION */}
        <svg className="arc" viewBox="0 0 800 800">
          <motion.path
            d="M 150 50 A 400 400 0 0 1 150 750"
            fill="none"
            stroke="#b9c1c9"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* STEPS */}
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`step ${step.className}`}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`dot ${step.color}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              {step.id}
            </motion.div>

            <div className="text">
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
