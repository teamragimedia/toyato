import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import Background from "../../assets/background.png";
import CarImage from "../../assets/ev.gif";

const faqs = [
  {
    question: "What is the objective of this engagement?",
    answer:
      "The objective is to connect startups, corporates, and research institutions enabling translation of new technology for adaptation, co-creation, and collaboration.",
  },
  {
    question: "Who can apply for this engagement?",
    answer:
      "Startups, corporates, and research institutions can apply for this engagement.",
  },
  {
    question: "Is there any application fee?",
    answer: "No, there is no application fee.",
  },
  {
    question: "What support do you provide to startups?",
    answer:
      "We provide mentorship, funding access, and industry connections to startups.",
  },
  {
    question: "How long does the engagement process take?",
    answer: "Typically 4–8 weeks depending on the program.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden font-syne">
      {/* Background Image */}
      <img
        src={Background} // ✅ FIXED
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      {/* Car Image */}
      <img
        src={CarImage} // ✅ FIXED
        alt="car"
        className="absolute right-2 bottom-16 w-40 sm:w-56 lg:w-72 pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <div className="border-2 border-[#66B64D] p-2 rounded-sm">
            <span className="text-[#005DA3] font-bold">?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-[#005DA3]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 bg-white ${
                  isActive ? "border-[#66B64D] shadow-md" : "border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left bg-white"
                >
                  <span
                    style={{ fontFamily: "Syne, sans-serif" }}
                    className={`font-semibold text-base sm:text-md ${
                      isActive ? "text-[#66B64D]" : "text-[#005DA3]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`p-2 rounded-md ${
                      isActive ? "bg-[#66B64D]/10" : "bg-gray-100"
                    }`}
                  >
                    {isActive ? (
                      <FiX className="text-[#66B64D]" size={20} />
                    ) : (
                      <FiPlus className="text-black" size={20} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-300 pt-4 text-sm sm:text-base text-gray-700 font-syne">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 font-syne">
            Still have questions? We're here to help.
          </p>

          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#005DA3] to-[#66B64D] hover:opacity-90 transition font-syne">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
