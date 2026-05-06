import React from "react";
import "../styles/Objectives.css";

import icon1 from "../assets/Carbon Neutrality Support.gif";
import icon2 from "../assets/New Business Expansion.gif";
import icon3 from "../assets/Frontier Technology Scouting.gif";

const Objectives = () => {
  return (
    <section className="objectives">
      <h2 className="objectives-title">Objectives</h2>

      <div className="objectives-container">
        {/* Item 1 */}
        <div className="objective-item">
          <div className="shape">
            <img src={icon1} alt="icon" />
          </div>
          <h3>Carbon Neutrality Support</h3>
          <p>
            Supporting initiatives that drive towards a carbon-neutral future
          </p>

          <div className="dots greens">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="objective-item">
          <div className="shape">
            <img src={icon2} alt="icon" />
          </div>
          <h3>New Business Expansion</h3>
          <p>
            Identifying and developing new business opportunities and markets
          </p>

          <div className="dots orange">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="objective-item">
          <div className="shape">
            <img src={icon3} alt="icon" />
          </div>
          <h3>Frontier Technology Scouting</h3>
          <p>Adapt: Co-create: Collaborate on emerging technologies</p>

          <div className="dots blues">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
