import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    label: "Pre-Screening\n/Screening",
    position: "top",
    color: "#22c55e",
    bg: "bg-green-500",
    ring: "ring-green-400",
    text: "text-green-600",
    glow: "rgba(34,197,94,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "First\nInteraction",
    position: "bottom",
    color: "#22d3ee",
    bg: "bg-cyan-400",
    ring: "ring-cyan-300",
    text: "text-cyan-600",
    glow: "rgba(34,211,238,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 19c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "NDA /Mutual\nAgreement",
    position: "top",
    color: "#f97316",
    bg: "bg-orange-400",
    ring: "ring-orange-300",
    text: "text-orange-500",
    glow: "rgba(249,115,22,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <path d="M6.5 12.5c1.5 1.5 3.5 2 5.5 1.5s3.5-2 4-4" />
        <path d="M17.5 11.5c-1.5-1.5-3.5-2-5.5-1.5s-3.5 2-4 4" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Brief\nDiscussion",
    position: "bottom",
    color: "#2dd4bf",
    bg: "bg-teal-400",
    ring: "ring-teal-300",
    text: "text-teal-600",
    glow: "rgba(45,212,191,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0112 0v1" />
        <path d="M19 8c1 .7 2 2 2 3.5" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Due Diligence on\nBusiness Synergy",
    position: "top",
    color: "#06b6d4",
    bg: "bg-cyan-500",
    ring: "ring-cyan-400",
    text: "text-cyan-700",
    glow: "rgba(6,182,212,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        className="w-7 h-7"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Co-Develop/\nCustomize\nSolution /Trial",
    position: "bottom",
    color: "#1d4ed8",
    bg: "bg-blue-700",
    ring: "ring-blue-500",
    text: "text-blue-800",
    glow: "rgba(29,78,216,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <circle cx="12" cy="16" r="2.5" />
        <line x1="10" y1="9.5" x2="12" y2="13.5" />
        <line x1="14" y1="9.5" x2="12" y2="13.5" />
        <line x1="8" y1="10.5" x2="16" y2="10.5" />
      </svg>
    ),
  },
  {
    id: 7,
    label: "MoU Signing",
    position: "top",
    color: "#ef4444",
    bg: "bg-red-500",
    ring: "ring-red-400",
    text: "text-red-600",
    glow: "rgba(239,68,68,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <path d="M4 20 Q8 12 12 16 Q16 20 20 8" strokeLinecap="round" />
        <path d="M17 8h3v3" />
      </svg>
    ),
  },
  {
    id: 8,
    label: "Business\nCommercialization",
    position: "bottom",
    color: "#000",
    bg: "bg-yellow-400",
    ring: "ring-yellow-300",
    text: "text-yellow-600",
    glow: "rgba(250,204,21,0.5)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        className="w-7 h-7"
      >
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M7 10V7a5 5 0 0110 0v3" />
        <rect x="9" y="14" width="6" height="4" rx="0.5" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function EngagementPathway() {
  const [activeStep, setActiveStep] = useState(null);
  const [wrapperRef, inView] = useInView(0.08);
  const [roadVisible, setRoadVisible] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setRoadVisible(true), 200);
  }, [inView]);

  const toggle = (id) => setActiveStep((p) => (p === id ? null : id));
  const active = steps.find((s) => s.id === activeStep);

  const circleSize = "w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        .ep-root { font-family: 'Nunito', sans-serif; }

        /* Road dash scroll */
        @keyframes dashScroll {
          from { background-position: 0 0; }
          to   { background-position: 80px 0; }
        }
        .dash-scroll { animation: dashScroll 1.8s linear infinite; }

        /* Float bob */
        @keyframes floatBob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }

        /* Ping for active */
        @keyframes pingCustom {
          0%   { transform: scale(1);   opacity: .7; }
          100% { transform: scale(2.2); opacity: 0;  }
        }
        .ping-ring { animation: pingCustom 1.6s ease-out infinite; }

        /* Entrance for nodes */
        @keyframes popIn {
          0%   { opacity:0; transform: scale(.4); }
          70%  { transform: scale(1.08); }
          100% { opacity:1; transform: scale(1); }
        }

        /* Title entrance */
        @keyframes titleDrop {
          0%   { opacity:0; transform: translateY(-28px); }
          100% { opacity:1; transform: translateY(0); }
        }
        .title-drop { animation: titleDrop .8s cubic-bezier(.22,1,.36,1) forwards; }

        /* Tooltip pop */
        @keyframes tipPop {
          0%   { opacity:0; transform: translateY(14px) scale(.88); }
          100% { opacity:1; transform: translateY(0) scale(1); }
        }
        .tip-pop { animation: tipPop .38s cubic-bezier(.34,1.56,.64,1) forwards; }

        /* Connector grow */
        @keyframes growDown { from { height:0; } to { height:100%; } }
        @keyframes growUp   { from { height:0; } to { height:100%; } }
        .grow-down { animation: growDown .45s ease forwards; }
        .grow-up   { animation: growUp   .45s ease forwards; }

        /* Shimmer on road */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* Mobile line draw */
        @keyframes lineGrow {
          from { height: 0; }
          to   { height: 100%; }
        }
        .mobile-line-anim { animation: lineGrow 1.4s cubic-bezier(.22,1,.36,1) .4s forwards; height: 0; }

        /* Step label fade */
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(10px); }
          to   { opacity:1; transform: translateY(0); }
        }

        .ep-circle-hover:hover { transform: scale(1.12) translateY(-3px); }
        .ep-circle-hover { transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease; }
      `}</style>

      <div className="ep-root min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-6xl" ref={wrapperRef}>
          {/* ── TITLE ── */}
          <div
            className="text-center mb-10 sm:mb-14"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView
                ? "titleDrop .8s cubic-bezier(.22,1,.36,1) forwards"
                : "none",
            }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight select-none">
              Engagement{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Pathway</span>
                <span className="absolute inset-x-0 bottom-0.5 h-2.5 bg-cyan-200 opacity-50 rounded z-0" />
              </span>{" "}
              with Startups
            </h1>
          </div>

          {/* ════════════════════════════════════════
               MOBILE  (< md) — vertical stacked list
              ════════════════════════════════════════ */}
          <div className="block md:hidden">
            <div className="relative pl-14">
              {/* Animated vertical spine */}
              <div
                className="mobile-line-anim absolute rounded-full"
                style={{
                  left: 26,
                  top: 0,
                  width: 3,
                  background:
                    "linear-gradient(to bottom,#22c55e,#22d3ee,#f97316,#2dd4bf,#06b6d4,#1d4ed8,#ef4444,#facc15)",
                  boxShadow: "0 0 8px 2px rgba(34,211,238,.25)",
                }}
              />
              <div className="space-y-7">
                {steps.map((step, i) => {
                  const isActive = activeStep === step.id;
                  const delay = `${i * 110}ms`;
                  return (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 cursor-pointer"
                      onClick={() => toggle(step.id)}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateX(0)"
                          : "translateX(-24px)",
                        transition: `opacity .55s ease ${delay}, transform .55s cubic-bezier(.22,1,.36,1) ${delay}`,
                      }}
                    >
                      {/* Circle */}
                      <div
                        className="relative flex-shrink-0"
                        style={{ marginLeft: -27 }}
                      >
                        {isActive && (
                          <span
                            className="ping-ring absolute inset-0 rounded-full"
                            style={{ backgroundColor: step.color }}
                          />
                        )}
                        <div
                          className={`w-12 h-12 rounded-full ${step.bg} ep-circle-hover flex items-center justify-center shadow-xl z-10 relative`}
                          style={{
                            boxShadow: isActive
                              ? `0 0 24px 6px ${step.glow}`
                              : `0 4px 14px ${step.glow}`,
                          }}
                        >
                          {step.icon}
                        </div>
                        {/* Number badge */}
                        <div
                          className={`absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full ${step.bg} text-white  font-bold flex items-center justify-center shadow z-20`}
                        >
                          {step.id}
                        </div>
                      </div>
                      {/* Label */}
                      <div className="pt-2.5">
                        <p
                          className={`text-sm font-bold leading-snug whitespace-pre-line ${step.text}`}
                        >
                          {step.label}
                        </p>
                        {isActive && (
                          <p className="text-xs text-gray-400 mt-0.5 font-medium">
                            Step {step.id} · tap to close
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════
               DESKTOP  (≥ md) — horizontal timeline
              ════════════════════════════════════════ */}
          <div className="hidden md:block">
            {/* TOP NODES */}
            <div className="flex justify-between items-end">
              {steps.map((step, i) => {
                if (step.position !== "top")
                  return <div key={step.id} style={{ width: "12.5%" }} />;
                const isActive = activeStep === step.id;
                const delay = `${i * 110}ms`;
                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center"
                    style={{ width: "12.5%" }}
                  >
                    {/* Label */}
                    <p
                      className={`text-[18px] font-bold text-center leading-tight whitespace-pre-line ${step.text} mb-1.5`}
                      style={{
                        minHeight: "2.8rem",
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateY(0)"
                          : "translateY(-14px)",
                        transition: `opacity .5s ease ${delay}, transform .5s cubic-bezier(.22,1,.36,1) ${delay}`,
                      }}
                    >
                      {step.label}
                    </p>
                    {/* Number badge */}
                    <div
                      className={`w-8 h-8 rounded-full ${step.bg} text-white font-extrabold flex items-center justify-center mb-1 shadow`}
                      style={{
                        opacity: inView ? 1 : 0,
                        transition: `opacity .4s ease ${delay}`,
                      }}
                    >
                      {step.id}
                    </div>
                    {/* Circle */}
                    <div
                      className="relative cursor-pointer"
                      onClick={() => toggle(step.id)}
                      style={{
                        opacity: inView ? 1 : 0,
                        animation: inView
                          ? `popIn .5s cubic-bezier(.34,1.56,.64,1) ${delay} both`
                          : "none",
                      }}
                    >
                      {isActive && (
                        <span
                          className="ping-ring absolute inset-0 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                      )}
                      <div
                        className={`${circleSize} rounded-full ${step.bg} ep-circle-hover flex items-center justify-center shadow-xl ${isActive ? `ring-4 ${step.ring} ring-offset-2` : ""}`}
                        style={{
                          boxShadow: isActive
                            ? `0 0 32px 8px ${step.glow}`
                            : `0 6px 20px ${step.glow}`,
                          animation: isActive
                            ? "floatBob 2.8s ease-in-out infinite"
                            : "none",
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    {/* Connector down */}
                    <div
                      className="overflow-hidden"
                      style={{
                        width: 2,
                        height: "1.5rem",
                        opacity: inView ? 1 : 0,
                        transition: `opacity .3s ease ${parseInt(delay) + 120}ms`,
                      }}
                    >
                      <div
                        className={`w-full h-full ${step.bg} ${inView ? "grow-down" : ""}`}
                      />
                    </div>
                    {/* Road dot */}
                    <div
                      className={`w-3 h-3 rounded-full ${step.bg} border-2 border-white shadow-md`}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "scale(1)" : "scale(0)",
                        transition: `opacity .3s ease ${parseInt(delay) + 180}ms, transform .35s cubic-bezier(.34,1.56,.64,1) ${parseInt(delay) + 180}ms`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* ROAD */}
            <div className="relative h-8 flex items-center">
              {/* Road body */}
              <div
                className="absolute rounded-full overflow-hidden"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: 20,
                  left: 0,
                  width: roadVisible ? "100%" : "0%",
                  transition: "width 1.3s cubic-bezier(.22,1,.36,1)",
                  background:
                    "linear-gradient(180deg,#000 0%,#9ca3af 50%,#000 100%)",
                  boxShadow:
                    "0 4px 14px rgba(0,0,0,.13), inset 0 1px 3px rgba(255,255,255,.45)",
                }}
              />
              {/* Animated dashes */}
              <div
                className="dash-scroll absolute"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "100%",
                  height: 3,
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,.9) 0, rgba(255,255,255,.9) 20px, transparent 20px, transparent 38px)",
                  opacity: roadVisible ? 0.9 : 0,
                  transition: "opacity .5s ease 1.2s",
                }}
              />
              {/* Shimmer overlay */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "100%",
                  height: 20,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.2) 40%, rgba(255,255,255,.5) 50%, rgba(255,255,255,.2) 60%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: roadVisible
                    ? "shimmer 3s linear infinite 1.5s"
                    : "none",
                }}
              />
            </div>

            {/* BOTTOM NODES */}
            <div className="flex justify-between items-start">
              {steps.map((step, i) => {
                if (step.position !== "bottom")
                  return <div key={step.id} style={{ width: "12.5%" }} />;
                const isActive = activeStep === step.id;
                const delay = `${i * 110}ms`;
                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center"
                    style={{ width: "12.5%" }}
                  >
                    {/* Road dot */}
                    <div
                      className={`w-3 h-3 rounded-full ${step.bg} border-2 border-white shadow-md`}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "scale(1)" : "scale(0)",
                        transition: `opacity .3s ease ${parseInt(delay) + 180}ms, transform .35s cubic-bezier(.34,1.56,.64,1) ${parseInt(delay) + 180}ms`,
                      }}
                    />
                    {/* Connector up */}
                    <div
                      className="overflow-hidden"
                      style={{
                        width: 2,
                        height: "1.5rem",
                        opacity: inView ? 1 : 0,
                        transition: `opacity .3s ease ${parseInt(delay) + 120}ms`,
                      }}
                    >
                      <div
                        className={`w-full h-full ${step.bg} ${inView ? "grow-up" : ""}`}
                      />
                    </div>
                    {/* Number badge */}
                    <div
                      className={`w-8 h-8 rounded-full ${step.bg} text-white  font-extrabold flex items-center justify-center mb-1 shadow`}
                      style={{
                        opacity: inView ? 1 : 0,
                        transition: `opacity .4s ease ${delay}`,
                      }}
                    >
                      {step.id}
                    </div>
                    {/* Circle */}
                    <div
                      className="relative cursor-pointer"
                      onClick={() => toggle(step.id)}
                      style={{
                        opacity: inView ? 1 : 0,
                        animation: inView
                          ? `popIn .5s cubic-bezier(.34,1.56,.64,1) ${delay} both`
                          : "none",
                      }}
                    >
                      {isActive && (
                        <span
                          className="ping-ring absolute inset-0 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                      )}
                      <div
                        className={`${circleSize} rounded-full ${step.bg} ep-circle-hover flex items-center justify-center shadow-xl ${isActive ? `ring-4 ${step.ring} ring-offset-2` : ""}`}
                        style={{
                          boxShadow: isActive
                            ? `0 0 32px 8px ${step.glow}`
                            : `0 6px 20px ${step.glow}`,
                          animation: isActive
                            ? "floatBob 2.8s ease-in-out infinite"
                            : "none",
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    {/* Label */}
                    <p
                      className={`text-[18px]  font-bold text-center leading-tight whitespace-pre-line ${step.text} mt-1.5`}
                      style={{
                        minHeight: "2.8rem",
                        opacity: inView ? 1 : 0,
                        transform: inView
                          ? "translateY(0)"
                          : "translateY(14px)",
                        transition: `opacity .5s ease ${delay}, transform .5s cubic-bezier(.22,1,.36,1) ${delay}`,
                      }}
                    >
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── ACTIVE TOOLTIP ── */}
          {activeStep && active && (
            <div key={activeStep} className="mt-8 flex justify-center tip-pop">
              <div
                className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white shadow-2xl border-l-4 max-w-sm w-full sm:w-auto"
                style={{
                  borderColor: active.color,
                  boxShadow: `0 12px 40px ${active.glow}, 0 2px 10px rgba(0,0,0,.07)`,
                }}
              >
                <div
                  className={`w-11 h-11 rounded-full ${active.bg} flex items-center justify-center flex-shrink-0`}
                  style={{
                    animation: "floatBob 2.8s ease-in-out infinite",
                    boxShadow: `0 0 20px 5px ${active.glow}`,
                  }}
                >
                  {active.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Step {active.id}
                  </p>
                  <p
                    className={`font-extrabold text-md sm:text-base leading-snug ${active.text}`}
                  >
                    {active.label.replace(/\n/g, " ")}
                  </p>
                </div>
                <button
                  className="text-gray-300 hover:text-gray-500 transition-colors text-base font-bold leading-none flex-shrink-0"
                  onClick={() => setActiveStep(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* ── DOT NAV ── */}
          <div className="mt-6 flex justify-center gap-2.5 flex-wrap">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                className="rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: activeStep === s.id ? 28 : 10,
                  height: 10,
                  backgroundColor: activeStep === s.id ? s.color : "#d1d5db",
                  boxShadow:
                    activeStep === s.id ? `0 0 10px 3px ${s.glow}` : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
