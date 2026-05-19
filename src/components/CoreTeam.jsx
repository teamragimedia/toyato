import React from "react";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";

import teamBg from "../assets/core.jpeg";

const teamData = [
  {
    name: "Kazuya Fujimoto",
    role: "Vice President",
    img: team1,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Lokesha T",
    role: "Associate Vice President",
    img: team3,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Jasmer Singh",
    role: "Deputy General Manager",
    img: team2,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Srikanta Patra",
    role: "Manager",
    img: team5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nithin Vishwanath",
    role: "Assistant Manager",
    img: team4,
    linkedin: "https://linkedin.com",
  },
];

const CoreTeam = () => {
  return (
    <section
      className="py-20 px-5 bg-cover bg-center"
      style={{
        backgroundImage: `url(${teamBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1f4e79] mt-2">Core Team</h2>

          <div className="w-20 h-[2px] bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`
                bg-gray-100 rounded-2xl p-8 text-center
                shadow-lg hover:-translate-y-2
                transition duration-300

                ${index < 3 ? "md:col-span-2" : ""}
                ${index === 3 ? "md:col-start-2 md:col-span-2" : ""}
                ${index === 4 ? "md:col-start-4 md:col-span-2" : ""}
              `}
            >
              {/* Avatar Box */}
              <div
                className="w-24 h-24 rounded-2xl mx-auto
                flex items-center justify-center mb-6"
                style={{
                  backgroundColor: member.color,
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-xl text-black">{member.name}</h3>

              {/* Role */}
              <p className="text-[#1f4e79] mt-2 font-medium">{member.role}</p>

              {/* Department */}
              <p className="text-gray-500 text-sm">{member.dept}</p>

              {/* Divider + LinkedIn */}
              {/* Divider + LinkedIn */}
              <div className="mt-6">
                <div className="w-full h-[1.5px] bg-gray-400 mb-4"></div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
      flex items-center
      justify-center
      gap-2
      text-sm
      no-underline
      text-gray-600
      hover:text-blue-600
    "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="linkedin"
                    className="w-4 h-4"
                  />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
