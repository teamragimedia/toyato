import React from "react";
import "../styles/SolutionHero.css";
import bgImage from "../assets/Solution.gif";

const SolutionHero = () => {
  return (
    <section
      className="section-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-hero-content">
        <h1 className="section-hero-title">Solutions</h1>
      </div>
    </section>
  );
};

export default SolutionHero;
