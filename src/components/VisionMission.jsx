import React from "react";

import visionIcon from "../assets/vision-icon.png";
import missionIcon from "../assets/mission-icon.png";
import bgImage from "../assets/vision.jpeg";

const VisionMission = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20 px-4 overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          Vision & Mission
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <img
                  src={visionIcon}
                  alt="Vision"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">Vision</h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Build ecosystem fostering innovation and sustainability, creating
              value for stakeholders
            </p>

            <div className="w-24 h-1 bg-green-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center">
                <img
                  src={missionIcon}
                  alt="Mission"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">Mission</h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Create innovative solutions through collaboration for new business
              and process improvement
            </p>

            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
