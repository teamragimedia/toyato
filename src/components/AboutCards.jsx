import React from "react";
import bgImage from "../assets/bg-pattern.jpeg";

// Images
import toyotaImage from "../assets/secondlogo.svg";
import arthaviskaraImage from "../assets/green.png";

const AboutCards = () => {
  return (
    <section
      className="relative w-full bg-cover absolute inset-0 bg-white/40 bg-center py-20 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Toyota Card */}
          <div className="bg-[#dfeaf4] rounded-3xl p-10 shadow-xl transition duration-300 hover:-translate-y-2 text-center">
            {/* Logo + Title */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={toyotaImage}
                alt="Toyota Tsusho"
                className="w-40 object-contain"
              />

              <h3 className="text-2xl font-bold text-[#1d5f9f] mt-4">
                Toyota Tsusho India
              </h3>
            </div>

            {/* Inner Content Box */}
            <div className="bg-[#d3e2ef] rounded-2xl p-8 flex flex-col items-center">
              {/* Heading */}
              <h3 className="text-3xl font-bold text-[#1d5f9f] mb-6">
                About Toyota Tsusho
              </h3>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Toyota Tsusho India Private Limited (TTIPL) is the Indian arm of
                Toyota Tsusho Corporation, a key strategic member of the
                globally renowned Toyota Group. The company functions as the
                trading and investment arm, with core activities spanning
                end-to-end supply chain solutions, implementation of turnkey
                projects, and expansion into new business domains aligned with
                emerging market opportunities
              </p>
            </div>
          </div>

          {/* Arthaviskara Card */}
          <div className="bg-[#e4efe3] rounded-3xl p-10 shadow-xl transition duration-300 hover:-translate-y-2 text-center">
            {/* Image */}
            <div className="flex justify-center mb-8">
              <img
                src={arthaviskaraImage}
                alt="Arthaviskara"
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Inner Content Box */}
            <div className="bg-[#d8e7d7] rounded-2xl p-8 flex flex-col items-center">
              {/* Heading */}
              <h3 className="text-3xl font-bold text-[#42b549] mb-6">
                About Arthaviskara
              </h3>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Arthaviskara is the flagship engagement platform of SCD, TTIPL,
                designed to bridge new innovation with new business by building
                a robust ecosystem of enablers-including startups, incubators,
                research institutions, investors, and subject-matter experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
