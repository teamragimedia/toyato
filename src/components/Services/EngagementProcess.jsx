import { useEffect, useRef, useState } from "react";
import {
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiShare2,
  FiArrowRight,
} from "react-icons/fi";

const stepsTop = [
  {
    icon: FiFileText,
    title: "Problem Statement",
    desc: "Start by identifying the core challenge or opportunity.",
    color: "#005BAC",
    bg: "#005BAC",
  },
  {
    icon: FiLayers,
    title: "Identify Multiple\nSolution",
    desc: "Generate ideas and work with stakeholders to shape the right solution.",
    color: "#F5A623",
    bg: "#F5A623",
  },
  {
    icon: FiCheckCircle,
    title: "Evaluation",
    desc: "Review options, discuss feasibility, and test the solution through trials.",
    color: "#6DBE45",
    bg: "#6DBE45",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    desc: "Involve partners, stakeholders, and support systems for stronger execution.",
    color: "#00AEEF",
    bg: "#00AEEF",
  },
];

const stepsBottom = [
  {
    icon: FiZap,
    title: "Test &Trial",
    desc: "Expand through investment, market access, training, and best-practice sharing within the innovation ecosystem.",
    color: "#F5533D",
    bg: "#F5533D",
  },
  {
    icon: FiUsers,
    title: "Potential\nStakeholders\nDiscussion",
    desc: "A discussion to identify everyone affected by the project and understand their needs, roles, and concerns.",
    color: "#005BAC",
    bg: "#005BAC",
  },
  {
    icon: FiShare2,
    title: "Sharing of Best\nPractices",
    desc: "A conversation where team members share useful methods, lessons, and ideas that have worked well for them.",
    color: "#F5A623",
    bg: "#F5A623",
  },
];

function Arrow() {
  return (
    <div className="mx-2 hidden lg:flex items-center justify-center">
      <FiArrowRight className="text-[22px] text-[#005BAC]" />
    </div>
  );
}

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        flex h-full w-full flex-col items-center
        rounded-[18px]
        border border-[#B9E1F7]
        bg-[#e0e7cd]
        px-5 py-7 sm:px-6 sm:py-8
        text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        min-h-[280px]
      "
    >
      {/* ICON */}
      <div
        className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-full"
        style={{ background: item.bg }}
      >
        <Icon className="text-white" size={24} />
      </div>

      {/* TITLE */}
      <h3
        className="whitespace-pre-line text-[18px] font-semibold leading-[28px] sm:text-[20px] lg:text-[22px]"
        style={{ color: item.color }}
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-4 text-[14px] leading-[24px] text-[#8C8C8C] sm:text-[15px] lg:text-[16px]">
        {item.desc}
      </p>
    </div>
  );
}

export default function EngagementProcess() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-[#F7F7F7] px-4 py-16 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-[36px] font-bold tracking-tight text-[#005BAC] sm:text-[48px] lg:text-[56px]">
            Engagement Process
          </h2>

          <p className="mt-3 text-[14px] text-[#707070] sm:text-[15px] lg:text-[16px]">
            7 criteria for eA streamlined approach to delivering hydrogen
            solutionsvaluation
          </p>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-5 sm:hidden">
          {[...stepsTop, ...stepsBottom].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* TABLET */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 auto-rows-fr">
          {[...stepsTop, ...stepsBottom].map((item, i) => (
            <div key={i} className="flex h-full">
              <Card item={item} />
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex lg:flex-col lg:items-center">
          {/* TOP ROW */}
          <div className="flex items-stretch justify-center">
            {stepsTop.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="flex h-full w-[250px] xl:w-[270px]">
                  <Card item={item} />
                </div>

                {i !== stepsTop.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          {/* BOTTOM ROW */}
          <div className="mt-10 flex items-stretch justify-center pl-[125px] xl:pl-[140px]">
            {stepsBottom.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="flex h-full w-[250px] xl:w-[270px]">
                  <Card item={item} />
                </div>

                {i !== stepsBottom.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
