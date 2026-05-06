import React from "react";
import carImg from "../../assets/ev.gif"; // replace with your image

const CustomSolutions = () => {
  return (
    <section className="w-full bg-[#e3e7ea] py-20 relative overflow-hidden">
      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-[44px] md:text-[56px] font-semibold text-[#155a96] leading-tight">
          Need Custom Solutions?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-[15px]">
          Our team can tailor services to meet your specific requirements
        </p>

        {/* Button */}
        <button
          className="mt-8 px-8 py-3 rounded-md text-white font-medium
          bg-gradient-to-r from-[#1b5e7a] to-[#3aa46b]
          hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Contact us
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block absolute bottom-0 right-0">
        <img
          src={carImg}
          alt="illustration"
          className="absolute w-[320px] md:w-[320px] sm:w-[50px] object-contain  bottom-[-119px] right-0  object-bottom"
        />
      </div>
    </section>
  );
};

export default CustomSolutions;
