import { useEffect, useState } from "react";
import {
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiMessageCircle,
  FiShare2,
  FiArrowRight,
} from "react-icons/fi";

const STEPS = [
  {
    id: 1,
    icon: FiFileText,
    title: "Problem Statement",
    desc: "Start by identifying the core challenge or opportunity.",
    color: "bg-blue-600",
    text: "text-blue-600",
    row: 0,
  },
  {
    id: 2,
    icon: FiLayers,
    title: "Identify Multiple Solutions",
    desc: "Generate ideas and collaborate with stakeholders to shape the right solution.",
    color: "bg-amber-500",
    text: "text-amber-500",
    row: 0,
  },
  {
    id: 3,
    icon: FiCheckCircle,
    title: "Evaluation",
    desc: "Review options, discuss feasibility, and test the solution through trials.",
    color: "bg-green-500",
    text: "text-green-500",
    row: 0,
  },
  {
    id: 4,
    icon: FiShare2,
    title: "Sharing Best Practices",
    desc: "Share successful ideas, lessons, and strategies with the team.",
    color: "bg-orange-500",
    text: "text-orange-500",
    row: 0,
  },
  {
    id: 5,
    icon: FiMessageCircle,
    title: "Stakeholder Discussion",
    desc: "Identify stakeholders and understand their roles and expectations.",
    color: "bg-indigo-600",
    text: "text-indigo-600",
    row: 1,
  },
  {
    id: 6,
    icon: FiZap,
    title: "Test & Trial",
    desc: "Validate the process through testing, learning, and market feedback.",
    color: "bg-red-500",
    text: "text-red-500",
    row: 1,
  },
  {
    id: 7,
    icon: FiUsers,
    title: "Collaboration",
    desc: "Work together with partners and teams for successful execution.",
    color: "bg-cyan-500",
    text: "text-cyan-500",
    row: 1,
  },
];

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <div
      className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* ICON */}
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${step.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="text-2xl text-white" />
      </div>

      {/* TITLE */}
      <h3 className={`mb-3 text-lg font-bold leading-snug ${step.text}`}>
        {step.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm leading-7 text-slate-500">{step.desc}</p>

      {/* HOVER BORDER */}
      <div
        className={`absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 transition duration-300 group-hover:opacity-100 ${step.text}`}
      />
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center px-2">
      <FiArrowRight className="text-2xl text-slate-300" />
    </div>
  );
}

export default function EngagementProcess() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const row1 = STEPS.filter((step) => step.row === 0);
  const row2 = STEPS.filter((step) => step.row === 1);

  return (
    <section className="bg-slate-50 py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Process Flow
          </span>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Engagement Process
          </h2>

          <p className="text-base leading-8 text-slate-500 md:text-lg">
            A streamlined and collaborative workflow designed to evaluate,
            validate, and implement innovative solutions effectively.
          </p>
        </div>

        {/* MOBILE + TABLET */}
        <div className="grid gap-6 md:grid-cols-2 lg:hidden">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          {/* ROW 1 */}
          <div className="mb-8 flex items-stretch justify-center">
            {row1.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center transition-all duration-700 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-[260px]">
                  <StepCard step={step} index={index} />
                </div>

                {index !== row1.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex items-stretch justify-center gap-4">
            {row2.map((step, index) => (
              <div
                key={step.id}
                className={`transition-all duration-700 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-[260px]">
                  <StepCard step={step} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
