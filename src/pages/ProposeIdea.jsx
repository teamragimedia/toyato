import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import bgImage from "../assets/proposeidea.png";
import { FiChevronDown } from "react-icons/fi";

const questions = [
  {
    id: 1,
    question:
      "First, tell us a little about yourself...* Please enter your first and last name",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 2,
    question: "What is your email address?*",
    placeholder: "name@example.com",
    required: true,
  },
  {
    id: 3,
    question: "What is the name of the company?*",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 4,
    question: "What is the company’s Website URL?",
    placeholder: "https://",
    required: false,
  },
  {
    id: 5,
    type: "input-select", // ✅ combo input + dropdown
    question:
      "Which of the following best describes the company’s primary industry?",
    placeholder: "Type or select an option",
    options: [
      "Artificial Intelligience",
      "Autonomy",
      "Batteries/Energy Storage",
      "Biotech/Synthetic Bio",
      "Carbon Solutions",
      "Data/Cloud",
      "Digital Health",
      "EV/Grid Solutions",
      "Fintech",
      "Food/Ag Tech",
      "Hydrogen Solutions",
      "Industrial Automation/Logistics",
      "Materials",
      "Mobility",
      "Renewable Energy",
      "Robotics",
      "Smart Cities",
      "Space Tech",
      "Other",
    ],
    required: true,
  },
  {
    id: 6,
    question:
      "Please provide a one-sentence description of what the company does.",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 7,
    type: "input-select", // ✅ combo input + dropdown
    question: "What is the current stage of the company?",
    placeholder: "Type or select an option",
    options: ["Pre-Seed", "Seed", "Series A", "Series B", "Series C or beyond"],
    required: true,
  },
  {
    id: 8,
    question:
      "Please enter the city, state, AND country that the company is currently based in.",
    placeholder: "Type your answer here...",
    required: true,
  },

  {
    id: 9,
    question: "How much funding in total have you raised to date?",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 10,
    question: "How much funding are you currently looking to raise?",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 11,
    question:
      "Including any founders, how many people in total are currently working full-time at the company?",
    placeholder: "Type your answer here...",
    required: true,
  },
  {
    id: 12,
    type: "file",
    question: "Please upload your pitch deck here (PDF or PPT).",
    required: true,
  },
];

function ProposeIdea() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const currentQ = questions[step - 1];

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ BACKEND CALL (FIXED)
  const sendDataToBackend = async () => {
    try {
      const formData = new FormData();

      Object.keys(answers).forEach((key) => {
        formData.append(key, answers[key]);
      });

      if (file) {
        formData.append("file", file);
      }

      const res = await fetch("http://localhost:5000/api/pitch", {
        method: "POST",
        body: formData,
      });

      return await res.json();
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };

  // ✅ FINAL SUBMIT (FIXED)
  const handleSubmit = async () => {
    try {
      const result = await sendDataToBackend();

      if (!result.success) {
        alert("Backend error ❌");
        return;
      }

      // ✅ EmailJS AFTER backend
      await emailjs.send(
        "service_geqq6bn",
        "template_0gauv3j",
        {
          name: answers[1],
          email: answers[2],
          company: answers[3],
        },
        "imRpBnn5jdh7WpS1k",
      );

      setStep(questions.length + 1);
    } catch (err) {
      console.error(err);
      alert("Submission failed ❌");
    }
  };

  const handleNext = () => {
    const current = questions[step - 1];

    // Validation
    if (step > 0 && current?.required) {
      if (current.type === "file") {
        if (!file) {
          alert("Please upload a file.");
          return;
        }
      } else if (!answers[current.id]) {
        alert("This field is required.");
        return;
      }
    }

    // Email validation
    if (current?.id === 2 && !isValidEmail(answers[2])) {
      alert("Please enter a valid email");
      return;
    }

    // ✅ FINAL STEP FIX
    if (step === questions.length) {
      handleSubmit();
      return;
    }

    setStep(step + 1);
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [currentQ.id]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setAnswers({
      ...answers,
      [currentQ.id]: value,
    });
  };

  const handleFileChange = (selectedFile) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    const maxSize = 10 * 1024 * 1024;

    if (!allowedTypes.includes(selectedFile.type)) {
      setFileError("Only PDF or PPT files are allowed.");
      return;
    }

    if (selectedFile.size > maxSize) {
      setFileError("File size should be less than 10MB.");
      return;
    }

    setFile(selectedFile);
    setFileError("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full md:w-1/2">
        {/* START */}
        {step === 0 && (
          <>
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
              Share your pitch with Arthaviskara
            </h1>

            <p className="text-gray-700 mb-6">
              We welcome one pitch per startup. Our team will review and
              respond.
            </p>

            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded w-full md:w-auto"
            >
              Start
            </button>
          </>
        )}

        {/* QUESTIONS */}
        {step > 0 && step <= questions.length && (
          <div className="p-4 md:p-6 max-w-lg bg-white/90 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-blue-700 mb-4">
              {step}. {currentQ.question}
            </h2>

            {!currentQ.type && (
              <input
                type="text"
                value={answers[currentQ.id] || ""}
                onChange={handleChange}
                placeholder="Type your answer here..."
                className="w-full bg-transparent text-black px-0 py-2 mb-6 outline-none border-0 border-b-2 border-blue-500 focus:border-blue-700 placeholder-gray-500"
              />
            )}

            {currentQ.type === "input-select" && (
              <div className="relative mb-6">
                <input
                  type="text"
                  value={answers[currentQ.id] || ""}
                  onChange={(e) => {
                    handleChange(e);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder={currentQ.placeholder}
                  className="w-full bg-transparent text-black px-0 py-2 outline-none border-b-2 border-blue-500"
                />

                <div
                  className="absolute right-2 top-[50%] transform -translate-y-[50%] cursor-pointer text-blue-500"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FiChevronDown size={18} />
                </div>

                {showDropdown && (
                  <div className="absolute w-full bg-white shadow mt-2 rounded z-50">
                    {currentQ.options.map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          handleSelectChange(opt);
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentQ.type === "file" && (
              <input
                type="file"
                accept=".pdf,.ppt,.pptx"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
            )}

            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded w-full md:w-auto"
            >
              {step === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        )}

        {/* SUCCESS */}
        {step > questions.length && (
          <div className="bg-white/90 p-6 rounded-lg shadow-md text-center max-w-lg">
            <h2 className="text-2xl md:text-3xl text-green-600 font-semibold mb-4">
              ✅ Thank You!
            </h2>
            <p className="text-gray-800 text-lg">
              Our team will get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProposeIdea;
