import React from "react";
import "../styles/JourneyTimeline.css";

import icon2018 from "../assets/founding.gif";
import icon2023 from "../assets/growth.gif";
import icon2024 from "../assets/expansion.gif";
import icon2025 from "../assets/global .gif";
import rocket from "../assets/rocket.gif";
import brushTop from "../assets/brush-blue.png";
import brushBottom from "../assets/brush-green.png";

const steps = [
  {
    year: "2018",
    title: "FOUNDING YEAR",
    points: ["500+ Startups Evaluated"],
    icon: icon2018,
    color: "orange",
  },
  {
    year: "2023",
    title: "GROWTH PHASE",
    points: ["2+ Clean MoUs", "800+ Startups Evaluated", "5+ POCs"],
    icon: icon2023,
    color: "blues",
  },
  {
    year: "2024",
    title: "EXPANSION",
    points: [
      "3+ Clean MoUs",
      "2+ IIT MoUs",
      "1000+ Startups Evaluated",
      "7+ POCs",
    ],
    icon: icon2024,
    color: "greens",
  },
  {
    year: "2025",
    title: "GLOBAL REACH",
    points: ["3+ Overseas Collaborations", "10+ Total POCs"],
    icon: icon2025,
    color: "yellow",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="jt-section">
      <img src={brushTop} className="jt-brush jt-brush-top" alt="" />
      <img src={brushBottom} className="jt-brush jt-brush-bottom" alt="" />

      <h2 className="jt-title">Objectives</h2>

      <div className="jt-timeline">
        {steps.map((step, i) => (
          <div className={`jt-step step-${i}`} key={i}>
            <span className={`jt-side side-${i}`}></span>

            <div className="jt-connector"></div>

            <div className="jt-content">
              <img src={step.icon} alt="" className="jt-icon" />
              <h4 className={`jt-year ${step.color}`}>{step.year}</h4>
              <h3 className={`jt-heading ${step.color}`}>{step.title}</h3>

              {step.points.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {/* ROCKET */}
        <div className="jt-step step-4 jt-rocket-step">
          <span className="jt-side side-4"></span>

          <div className="jt-rocket-content">
            <img src={rocket} alt="rocket" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
