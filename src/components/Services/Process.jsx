import { useEffect, useRef, useState } from "react";
import {
  FiLink,
  FiMessageCircle,
  FiCpu,
  FiMonitor,
  FiCheckSquare,
  FiUsers,
} from "react-icons/fi";

const animCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  @keyframes shimmer {
    0% { background-position: -300% center; }
    100% { background-position: 300% center; }
  }

  @keyframes underlineGrow {
    from { width: 0; }
    to { width: 72px; }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .shimmer-text {
    background: linear-gradient(90deg, #1565C0 20%, #42A5F5 50%, #1565C0 80%);
    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 5s linear infinite;
  }

  .underline-bar {
    display: block;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, #1565C0, #42A5F5);
    border-radius: 999px;
    margin: 8px auto 0;
  }

  .underline-bar.go {
    animation: underlineGrow 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s forwards;
  }

  .card-enter {
    opacity: 0;
  }

  .card-enter.go {
    animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both;
  }

  .head-enter {
    opacity: 0;
  }

  .head-enter.go {
    animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both;
  }

  .sub-enter {
    opacity: 0;
  }

  .sub-enter.go {
    animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s both;
  }

  .d-0 { animation-delay: 0.05s; }
  .d-1 { animation-delay: 0.18s; }
  .d-2 { animation-delay: 0.31s; }
  .d-3 { animation-delay: 0.44s; }
  .d-4 { animation-delay: 0.57s; }
  .d-5 { animation-delay: 0.70s; }

  .icon-ring {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }

  .ep-card:hover .icon-ring {
    transform: scale(1.1) rotate(-6deg);
  }
`;

const steps = [
  {
    icon: FiLink,
    iconBg: "#1565C0",
    shadow: "rgba(21,101,192,0.4)",
    labelColor: "#1565C0",
    label: "Connect with\nIncubation Center",
  },
  {
    icon: FiMessageCircle,
    iconBg: "#FFA726",
    shadow: "rgba(255,167,38,0.4)",
    labelColor: "#FFA726",
    label: "Joint\nDiscussion",
  },
  {
    icon: FiCpu,
    iconBg: "#43A047",
    shadow: "rgba(67,160,71,0.4)",
    labelColor: "#43A047",
    label: "Explore New\nTechnology",
  },
  {
    icon: FiMonitor,
    iconBg: "#00ACC1",
    shadow: "rgba(0,172,193,0.4)",
    labelColor: "#00ACC1",
    label: "Understand used\ncase scenerio",
  },
  {
    icon: FiCheckSquare,
    iconBg: "#E53935",
    shadow: "rgba(229,57,53,0.4)",
    labelColor: "#E53935",
    label: "Validate\ntechnology",
  },
  {
    icon: FiUsers,
    iconBg: "#1565C0",
    shadow: "rgba(21,101,192,0.4)",
    labelColor: "#1565C0",
    label: "Collaborate",
  },
];

function Arrow({ vertical = false }) {
  return (
    <div
      className={`flex items-center justify-center text-slate-300 ${
        vertical ? "rotate-90 my-2" : "mx-3"
      }`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
    </div>
  );
}

function Card({ step, delay, go }) {
  const Icon = step.icon;

  return (
    <div
      className={`ep-card card-enter ${
        go ? `go ${delay}` : ""
      } flex h-full w-full flex-col items-center justify-center
      rounded-[18px] border border-[#DAEEFF]
      bg-[#EFF7FF]
      p-5 sm:p-6
      min-h-[220px]
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:border-[#B3D9FF]
      hover:bg-white
      hover:shadow-[0_12px_36px_rgba(21,101,192,0.13)]`}
    >
      {/* ICON */}
      <div
        className="icon-ring mb-4 flex h-16 w-16 items-center justify-center rounded-full flex-shrink-0"
        style={{
          background: step.iconBg,
          boxShadow: `0 6px 20px ${step.shadow}`,
        }}
      >
        <Icon size={24} color="#fff" strokeWidth={1.8} />
      </div>

      {/* LABEL */}
      <p
        className="whitespace-pre-line text-center text-[13px] font-semibold leading-snug sm:text-[14px]"
        style={{ color: step.labelColor }}
      >
        {step.label}
      </p>
    </div>
  );
}

export default function EngagementProcess() {
  const ref = useRef(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{animCSS}</style>

      <section
        ref={ref}
        className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12 sm:py-20"
      >
        {/* HEADER */}
        <h2
          className={`head-enter ${
            go ? "go" : ""
          } text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl`}
        >
          <span className="shimmer-text">Engagement Process</span>
        </h2>

        <span className={`underline-bar ${go ? "go" : ""}`} />

        <p
          className={`sub-enter ${
            go ? "go" : ""
          } mx-auto mt-3 max-w-lg text-center text-xs text-slate-400 sm:text-sm`}
        >
          7 criteria for eA streamlined approach to delivering hydrogen
          solutions valuation
        </p>

        {/* MOBILE */}
        <div className="mx-auto mt-12 flex max-w-sm flex-col items-center sm:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex w-full flex-col items-center">
              <div className="flex w-full">
                <Card step={step} delay={`d-${i}`} go={go} />
              </div>

              {i !== steps.length - 1 && <Arrow vertical />}
            </div>
          ))}
        </div>

        {/* TABLET */}
        <div className="mx-auto mt-12 hidden max-w-4xl grid-cols-2 gap-6 sm:grid lg:hidden auto-rows-fr">
          {steps.map((step, i) => (
            <div key={i} className="flex h-full w-full">
              <Card step={step} delay={`d-${i}`} go={go} />
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="mx-auto mt-12 hidden max-w-7xl flex-col items-center gap-6 lg:flex">
          {/* ROW 1 */}
          <div className="flex items-stretch justify-center">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className="flex w-[220px] h-full">
                  <Card step={steps[i]} delay={`d-${i}`} go={go} />
                </div>

                {i < 3 && <Arrow />}
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex items-stretch justify-center pl-[120px]">
            {[4, 5].map((si, i) => (
              <div key={si} className="flex items-center">
                <div className="flex w-[220px] h-full">
                  <Card step={steps[si]} delay={`d-${si}`} go={go} />
                </div>

                {i < 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
