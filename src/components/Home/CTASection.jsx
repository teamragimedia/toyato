import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#005DA3] mb-4">
          Need Custom Solutions?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Our team can tailor services to meet your specific requirements
        </p>

        {/* Button */}
       <Link to="/contact">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium bg-[#2e8b57] hover:opacity-90 transition duration-300">
          Contact us
          <FiArrowRight size={18} />
        </button>
       </Link>

      </div>
    </section>
  );
};

export default CTASection;
