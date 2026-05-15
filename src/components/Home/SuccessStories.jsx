import React from "react";
import { Star } from "lucide-react";
import Blub from "../../assets/blub.gif"; // replace with your image path
import { style } from "framer-motion/client";

const Card = ({ title, color, description, stat, role }) => {
  return (
    <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Title */}
      <h3 className={`text-lg font-semibold mb-3`} style={{ color }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
        {description}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-4"></div>

      {/* Bottom */}
      <div className="mt-6 pt-4 border-t border-white/20 w-full">
        <p className="font-semibold text-gray-800 text-sm">{stat}</p>
        <p className="text-xs text-gray-500 mt-1">{role}</p>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-12 overflow-hidden  !bg-[#eaf2f7]"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Right Top Illustration */}
     <img
  src={Blub}
  alt="bulb"
  className="hidden md:block absolute top-0 right-0 w-40 sm:w-52 lg:w-50 opacity-100 pointer-events-none"
/>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
            Success Stories
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            See how our solutions are transforming businesses and accelerating
            the energy transition
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Solar Startup Success"
            color="#4CAF50"
            description="Arth Avishkara’s Solar Performance Engine increased our efficiency by 23% and helped us scale operations across three states."
            stat="23% Efficiency Gain"
            role="CEO, Renewable Tech Startup"
          />

          <Card
            title="EV Charging Network"
            color="#FF3B30"
            description="Their EV charging infrastructure solution helped us deploy 500+ charging stations with intelligent grid management."
            stat="500+ Stations Deployed"
            role="Founder, E-Mobility Solutions"
          />

          <Card
            title="Industrial Transformation"
            color="#007AFF"
            description="The Industrial IoT Platform reduced our operational costs by 18% and improved equipment uptime significantly."
            stat="18% Cost Reduction"
            role="Operations Director, Manufacturing Corp"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
