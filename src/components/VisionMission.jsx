import React from "react";
import "../styles/VisionMission.css";

import visionIcon from "../assets/vision-icon.png";
import missionIcon from "../assets/mission-icon.png";
import bgImage from "../assets/bg.jpg"; // your background image

const VisionMission = () => {
  return (
  <section
      className="vm-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="vm-container">
        <h2 className="vm-title">Vision & Mission</h2>

        <div className="vm-cards">
          {/* Vision */}
          <div className="vm-card vm-vision">
            <div className="vm-card-header">
              <div className="vm-icon">
                <img src={visionIcon} alt="Vision" />
              </div>
              <h3>Vision</h3>
            </div>

            <p>
              Build ecosystem fostering innovation and sustainability, creating
              value for stakeholders
            </p>

            <div className="vm-line"></div>
          </div>

          {/* Mission */}
          <div className="vm-card vm-mission">
            <div className="vm-card-header">
              <div className="vm-icon">
                <img src={missionIcon} alt="Mission" />
              </div>
              <h3>Mission</h3>
            </div>

            <p>
              Create innovative solutions through collaboration for new business
              and process improvement
            </p>

            <div className="vm-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
