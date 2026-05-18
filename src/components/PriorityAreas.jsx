import React from "react";
import "../styles/PriorityAreas.css";
import bgImage from "../assets/bg1.jpeg";

// ICONS
import icon1 from "../assets/Circular Economy.gif";
import icon2 from "../assets/Mobility.gif";
import icon3 from "../assets/Renewable Energy.gif";
import icon4 from "../assets/Hydrogen & Alternate Fuel.gif";
import icon5 from "../assets/battery 1.gif";
import icon6 from "../assets/Innovation & Infrastructure.gif";

// DATA
const data = [
  {
    title: "Circular Economy",
    desc: "Sustainable consumption and production patterns",
    icon: icon1,
    color: "#f39c12",
  },
  {
    title: "Mobility",
    desc: "Next-generation transportation solutions",
    icon: icon2,
    color: "#1abc9c",
  },
  {
    title: "Renewable Energy",
    desc: "Clean and sustainable energy solutions",
    icon: icon3,
    color: "#4caf50",
  },
  {
    title: "Hydrogen & Alternate Fuel",
    desc: "Clean fuel technologies for the future",
    icon: icon4,
    color: "#1f5fa8",
  },
  {
    title: "Battery Technology",
    desc: "Advanced energy storage solutions",
    icon: icon5,
    color: "#f1c40f",
  },
  {
    title: "Economy Of Life",
    desc: "Wisely managing resources for balanced, sustainable living.",
    icon: icon6,
    color: "#e74c3c",
  },
];

const PriorityAreas = ({ variant = "about", image }) => {
  return (
    <section
      className={`pa-section ${variant}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="pa-container">
        <h2 className="pa-title pb-9">Priority Areas</h2>

        {/* IMAGE */}
        {image && <img src={image} alt="decor" className="pa-house" />}

        {/* GRID */}
        <div className="pa-grid">
          {data.map((item, index) => (
            <div className="pa-card" key={index}>
              <div className="pa-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3 style={{ color: item.color }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriorityAreas;
