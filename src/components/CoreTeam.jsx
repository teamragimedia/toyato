import React from "react";
import "../styles/CoreTeam.css";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.png";

const teamData = [
  {
    name: "Kazuya Fujimoto",
    role: "Vice President",
    img: team1,
    color: "#f7931e",
  },
  {
    name: "Lokesha T",
    role: "Associate Vice President",
    img: team3,
    color: "#5cb85c",
  },
  {
    name: "Jasmer Singh",
    role: "Deputy General Manager",
    img: team2,
    color: "#17a2b8",
  },
  {
    name: "Srikanta Patra",
    role: "Manager",
    img: team5,
    color: "#e0e0e0",
  },
  {
    name: "Nithin Vishwanath",
    role: "Assistant Manager",
    img: team4,
    color: "#e6cfd2",
  },
];

const CoreTeam = () => {
  return (
    <section className="core-team">
      <div className="container">
        <h2 className="title">Core Team</h2>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div className="team-card">
              {/* // <div
            //   className= {`team-card ${index === 6 ? "center-card" : ""}`}
            //   key={index}
            // > */}
              <div className="avatar" style={{ backgroundColor: member.color }}>
                <img src={member.img} alt={member.name} />
              </div>

              <h3 className="teamh">{member.name}</h3>
              <p className="teamy">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
