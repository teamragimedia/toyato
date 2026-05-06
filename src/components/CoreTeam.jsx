import React from "react";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";

import teamBg from "../assets/team-bg.jpg";

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
    <section
      className="py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#1f4e79] mb-16">
          Core Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Avatar */}
              <div
                className="w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-8"
                style={{ backgroundColor: member.color }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-black mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
