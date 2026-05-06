import React from "react";
import "../styles/Partners.css";

import startupIndia from "../assets/start.png";
import cleanTech from "../assets/clean.jpg";
import cii from "../assets/cii.jpg";
import iit from "../assets/iit.png";
import tie from "../assets/tie.jpg";
import car from "../assets/ev.gif"; // top illustration

const Partners = () => {
  return (
    <section className="partners">
      {/* Floating Image */}
      <img src={car} alt="car" className="top-illustration" />

      <h2 className="partners-title">Our Ecosystem Partners</h2>

      <div className="partners-logos">
        <img src={startupIndia} alt="startup india" />
        <img src={cleanTech} alt="clean tech" />
        <img src={cii} alt="cii" />
        <img src={iit} alt="iit madras" />
        <img src={tie} alt="tie" />
      </div>
    </section>
  );
};

export default Partners;
