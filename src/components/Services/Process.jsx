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
    0%   { background-position: -300% center; }
    100% { background-position:  300% center; }
  }
  @keyframes underlineGrow {
    from { width: 0; }
    to   { width: 72px; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes arrowFade {
    from { opacity: 0; }
    to   { opacity: 1; }
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
    border-radius: 99px;
    margin: 8px auto 0;
  }
  .underline-bar.go {
    animation: underlineGrow 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s forwards;
  }

  .card-enter { opacity: 0; }
  .card-enter.go { animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }

  .head-enter { opacity: 0; }
  .head-enter.go { animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both; }

  .sub-enter { opacity: 0; }
  .sub-enter.go { animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s both; }

  .arr-enter { opacity: 0; }
  .arr-enter.go { animation: arrowFade 0.45s ease both; }

  .d-0 { animation-delay: 0.05s; }
  .d-1 { animation-delay: 0.18s; }
  .d-2 { animation-delay: 0.31s; }
  .d-3 { animation-delay: 0.44s; }
  .d-4 { animation-delay: 0.57s; }
  .d-5 { animation-delay: 0.70s; }
  .da-0 { animation-delay: 0.12s; }
  .da-1 { animation-delay: 0.25s; }
  .da-2 { animation-delay: 0.38s; }
  .da-3 { animation-delay: 0.51s; }
  .da-4 { animation-delay: 0.64s; }

  .icon-ring { position: relative; }
  .icon-ring::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 9999px;
    border: 2px solid currentColor;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.3s ease, transform 0.4s ease;
  }
  .ep-card:hover .icon-ring::after {
    opacity: 0.2;
    transform: scale(1.1);
  }
  .ep-card:hover .icon-ring {
    transform: scale(1.1) rotate(-6deg);
  }
  .icon-ring {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }
`;

/* ─────────────────────────────────────────
   ALL 6 STEPS — flat list, layout handled by grid
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   CARD
───────────────────────────────────────── */
function Card({ step, delay, go }) {
  const Icon = step.icon;
  return (
    <div
      className={`ep-card card-enter ${go ? `go ${delay}` : ""} 
        flex flex-col items-center justify-start gap-3
        bg-[#EFF7FF] border border-[#DAEEFF] rounded-[18px]
        p-4 sm:p-5 cursor-pointer w-full h-full
        transition-all duration-300 ease-out
        hover:bg-white hover:border-[#B3D9FF]
        hover:shadow-[0_12px_36px_rgba(21,101,192,0.13)]
        hover:-translate-y-1
      `}
    >
      {/* Icon */}
      <div
        className="icon-ring w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-2"
        style={{
          background: step.iconBg,
          boxShadow: `0 6px 20px ${step.shadow}`,
          color: step.iconBg,
        }}
      >
        <Icon size={24} color="#fff" strokeWidth={1.8} />
      </div>

      {/* Label */}
      <p
        className="text-[12px] sm:text-[13px] font-semibold text-center leading-snug whitespace-pre-line tracking-tight mt-1"
        style={{ color: step.labelColor }}
      >
        {step.label}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   ARROW — horizontal or vertical
───────────────────────────────────────── */
function Arrow({ vertical = false, delay, go }) {
  return (
    <div
      className={`arr-enter ${go ? `go ${delay}` : ""}
        flex items-center justify-center flex-shrink-0
        ${vertical ? "py-1 w-full" : "px-1 h-full"}
      `}
    >
      <svg
        className={`text-slate-300 ${vertical ? "rotate-90 w-4 h-4" : "w-5 h-5"}`}
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

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
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
        className="w-full bg-white flex flex-col items-center px-4 sm:px-8 lg:px-12 py-14 sm:py-20"
      >
        {/* HEADER */}
        <h2
          className={`head-enter ${go ? "go" : ""} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center tracking-tight`}
        >
          <span className="shimmer-text">Engagement Process</span>
        </h2>
        <span className={`underline-bar ${go ? "go" : ""}`} />
        <p
          className={`sub-enter ${go ? "go" : ""} mt-3 text-xs sm:text-sm text-slate-400 text-center max-w-lg`}
        >
          7 criteria for eA streamlined approach to delivering hydrogen
          solutions valuation
        </p>

        {/* ════════════════════════════════════
            MOBILE  (< sm): vertical stack, all 6
            ════════════════════════════════════ */}
        <div className="sm:hidden mt-10 w-full max-w-xs mx-auto flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <Card step={step} delay={`d-${i}`} go={go} />
              {i < steps.length - 1 && (
                <Arrow vertical delay={`da-${i}`} go={go} />
              )}
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════
            TABLET  (sm → lg): 2×3 grid, centered
            ════════════════════════════════════ */}
        <div
          className="hidden sm:grid lg:hidden mt-10 w-full max-w-2xl mx-auto"
          style={{
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Row 1: cards 0,1,2 */}
          {[0, 1, 2].map((i) => (
            <>
              <Card key={`c${i}`} step={steps[i]} delay={`d-${i}`} go={go} />
              {i < 2 && <Arrow key={`a${i}`} delay={`da-${i}`} go={go} />}
            </>
          ))}

          {/* Row 2: empty, card 3, arrow, card 4, arrow, card 5 */}
          {/* We use a 3-col sub-grid spanning full width */}
          <div style={{ gridColumn: "1 / -1" }}>
            <div
              className="flex items-center justify-center gap-0 mt-3"
              style={{ marginLeft: "calc(100% / 3 + 12px)" }}
            >
              <div className="flex-1 max-w-[calc(33.33%-8px)]">
                <Card step={steps[3]} delay="d-3" go={go} />
              </div>
              <Arrow delay="da-3" go={go} />
              <div className="flex-1 max-w-[calc(33.33%-8px)]">
                <Card step={steps[4]} delay="d-4" go={go} />
              </div>
              <Arrow delay="da-4" go={go} />
              <div className="flex-1 max-w-[calc(33.33%-8px)]">
                <Card step={steps[5]} delay="d-5" go={go} />
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            DESKTOP (lg+): exact Figma layout
            Row 1: 4 cards with arrows
            Row 2: offset by 1 card, 2 cards with arrow
            ════════════════════════════════════ */}
        <div className="hidden lg:block mt-12 w-full max-w-[1060px]">
          {/* ROW 1 — 4 cards */}
          <div className="flex items-stretch gap-0">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex-1 h-full">
                  <Card step={steps[i]} delay={`d-${i}`} go={go} />
                </div>
                {i < 3 && (
                  <div className="w-10 flex-shrink-0 flex items-center justify-center">
                    <Arrow delay={`da-${i}`} go={go} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ROW 2 — starts under card index 1 (one card + one arrow = ~25%) */}
          <div
            className="flex items-stretch gap-0 mt-5"
            style={{ paddingLeft: "calc(25% + 40px / 4)" }}
          >
            {[4, 5].map((si, i) => (
              <div
                key={si}
                className="flex items-center flex-1 max-w-[calc(25%)]"
              >
                <div className="flex-1">
                  <Card step={steps[si]} delay={`d-${si}`} go={go} />
                </div>
                {i < 1 && (
                  <div className="w-10 flex-shrink-0 flex items-center justify-center">
                    <Arrow delay={`da-${3 + i}`} go={go} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
