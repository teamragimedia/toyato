import React from "react";
import "../styles/GlobalOutreach.css";

import topRight from "../assets/blub.gif";

const GlobalOutreach = () => {
  return (
    <section className="go-section">
      {/* top right illustration */}
      <img src={topRight} className="go-top-right" alt="" />

      {/* content */}
      <div className="go-content">
        <h2>Global Outreach</h2>

        <p>
          <span>Present across</span> 6 continents, <span>in</span> 15+
          countries
        </p>

        <button className="go-btn">Discover all our projects</button>
      </div>

      {/* Globe image with pins already included */}
      <div className="go-globe"></div>
    </section>
  );
};

export default GlobalOutreach;
