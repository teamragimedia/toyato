import React from "react";
import "../styles/AboutCards.css";
import visionIcon from "../assets/vision-icon.png";
import missionIcon from "../assets/mission-icon.png";
import bgImage from "../assets/bg-pattern.png"; // your background image

const AboutCards = () => {
  return (
    <section
      className="vm-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="vm-container">
        <div className="vm-cards">
          {/* Vision */}
          <div className="vm-card vm-vision">
            <div className="vm-card-header">
              <div className="vm-icon">
                <img src={visionIcon} alt="Vision" />
              </div>
              <h3>About Toyota Tsusho</h3>
            </div>

            <p>
              Toyota Tsusho India Private Limited (TTIPL) is the Indian arm of
              Toyota Tsusho Corporation, a key strategic member of the globally
              renowned Toyota Group. The company functions as the trading and
              investment arm, with core activities spanning end-to-end supply
              chain solutions, implementation of turnkey projects, and expansion
              into new business domains aligned with emerging market
              opportunities
            </p>

            <div className="vm-line"></div>
          </div>

          {/* Mission */}
          <div className="vm-card vm-mission">
            <div className="vm-card-header">
              <div className="vm-icon">
                <img src={missionIcon} alt="Mission" />
              </div>
              <h3>About Arthaviskara</h3>
            </div>

            <p>
              Arthaviskara is the flagship engagement platform of SCD, TTIPL,
              designed to bridge new innovation with new business by building a
              robust ecosystem of enablers-including startups, incubators,
              research institutions, investors, and subject-matter experts.
            </p>

            <div className="vm-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
