import React from "react";
import "../styles/GlobalOutreach.css";

import globe from "../assets/globe.png"; // your world image
import pin from "../assets/pin.png"; // location marker
import topRight from "../assets/blub.gif"; // your PNG

const GlobalOutreach = () => {
  return (
    <section className="go-section">
      {/* top right illustration */}
      <img src={topRight} className="go-top-right" alt="" />

      {/* content */}
      <div className="go-content">
        <h2>Global Outreach</h2>
        <p>
          <span>Present across</span> 3 continents, <span>in</span> 15+
          countries
        </p>

        <button className="go-btn">Discover all our projects</button>
      </div>

      {/* globe */}
      <div className="go-globe">
        {/* pins */}
        <img src={pin} className="pin pin-1" />
        <img src={pin} className="pin pin-2" />
        <img src={pin} className="pin pin-3" />
        <img src={pin} className="pin pin-4" />
        <img src={pin} className="pin pin-5" />
      </div>
    </section>
  );
};

export default GlobalOutreach;
