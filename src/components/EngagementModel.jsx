import React from "react";
import "../styles/EngagementModel.css";

import icon1 from "../assets/startup.gif";
import icon2 from "../assets/Ecosystem Innobiz A20Z.gif";
import icon3 from "../assets/Corporate Innobiz 2.0.gif";
import brushBottom from "../assets/brush-blue.png";

const EngagementModel = () => {
  return (
    <section className="engagement">
      <img src={brushBottom} alt="" className="jt-brush jt-brush-bottom" />

      <div className="engagement-container">
        <h2 className="engagement-title">Engagement Model</h2>

        <div className="engagement-cards">
          {/* Card 1 */}
          <div className="engagement-card">
            <div className="icon">
              <img src={icon1} alt="Startup XI" />
            </div>
            <h3 className="startup">Startup XI</h3>
            <p className="startup1">Startup Excellence Initiative</p>
            <p className="desc">
              Empower startups for new business collaboration
            </p>
          </div>

          {/* Card 2 */}
          <div className="engagement-card">
            <div className="icon">
              <img src={icon2} alt="Ecosystem" />
            </div>
            <h3 className="ecosystem">Incubation Hub A2oZ</h3>
            <p className="ecosystem1">Ecosystem Connect</p>
            <p className="desc">
              Connect ecosystem experts for inclusive innovation
            </p>
          </div>

          {/* Card 3 */}
          <div className="engagement-card">
            <div className="icon">
              <img src={icon3} alt="Corporate" />
            </div>
            <h3 className="corporate">Corporate Innobiz 2.0</h3>
            <p className="corporate1">Corporate Innovation</p>
            <p className="desc">Enable businesses to create value</p>
          </div>
        </div>

        {/* Connector (Desktop Only) */}
        <div className="connector-wrapper">
          <svg viewBox="0 0 600 160" className="connector-svg">
            <path
              d="M80 100 Q300 20 520 100"
              fill="none"
              stroke="#cfd8dc"
              strokeWidth="2"
            />

            <circle cx="200" cy="75" r="6" fill="#cfd8dc" />
            <circle cx="300" cy="55" r="6" fill="#cfd8dc" />
            <circle cx="400" cy="85" r="6" fill="#cfd8dc" />

            <polygon
              points="60,90 80,80 100,90 100,110 80,120 60,110"
              fill="#f9a825"
            />

            <polygon
              points="280,40 320,40 335,70 300,90 265,70"
              fill="#26a6c9"
            />

            <polygon
              points="500,90 520,80 540,90 540,110 520,120 500,110"
              fill="#66bb6a"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
