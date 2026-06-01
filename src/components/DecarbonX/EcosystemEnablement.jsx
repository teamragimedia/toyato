import { motion } from "framer-motion";
import { Handshake, Users, Rocket, BookOpen, Target } from "lucide-react";

const cards = [
  {
    icon: Handshake,
    title: "Solution Matchmaking",
    desc: "Vetted connections between clean-tech innovators and industrial adopters ensure each match offers a clear path to commercial ROI.",
  },
  {
    icon: Users,
    title: "Collaborative Partnerships",
    desc: "OEMs, Tier-1 suppliers, and technical experts join forces to build resilient, low-carbon supply chains and shared infrastructure.",
  },
  {
    icon: Rocket,
    title: "Pilot & Scaling Programs",
    desc: "Structured pilots, performance validation, and deployment support de-risk innovation adoption across the Valley of Death.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    desc: "Cross-industry knowledge sharing, regulatory guidance, technical resources and workshops keep partners ahead of the market.",
  },
];

export default function EcosystemEnablement() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-[#F7F9F8]
            rounded-[28px]
            border
            border-[#E8ECEA]
            overflow-hidden
            p-6 md:p-10
          "
        >
          <div className="grid lg:grid-cols-[320px_1fr] gap-10">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span
                className="
                  inline-flex
                  px-3
                  py-1
                  rounded-lg
                  bg-white
                  border
                  border-[#DCE6E0]
                  text-[#2B6A57]
                  text-sm
                  font-semibold
                "
              >
                04
              </span>

              <h2
                className="
                  mt-4
                  text-[38px]
                  font-bold
                  text-[#1D5D4B]
                "
              >
                Ecosystem Enablement
              </h2>

              <p
                className="
                  mt-4
                  text-[#64726C]
                  leading-8
                "
              >
                Linking innovation to industrial-scale impact.
              </p>

              {/* Network Illustration */}
              <div className="relative mt-10 h-[260px] hidden md:block">
                <svg
                  viewBox="0 0 500 260"
                  className="absolute inset-0 w-full h-full"
                >
                  <g stroke="#D8E3DD" strokeWidth="2" fill="none">
                    <line x1="120" y1="120" x2="250" y2="70" />
                    <line x1="120" y1="120" x2="250" y2="190" />
                    <line x1="250" y1="70" x2="390" y2="100" />
                    <line x1="250" y1="190" x2="390" y2="160" />
                    <line x1="390" y1="100" x2="450" y2="60" />
                    <line x1="390" y1="160" x2="450" y2="220" />
                  </g>

                  <circle
                    cx="120"
                    cy="120"
                    r="42"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="250"
                    cy="70"
                    r="28"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="250"
                    cy="190"
                    r="28"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="390"
                    cy="100"
                    r="28"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="390"
                    cy="160"
                    r="28"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="450"
                    cy="60"
                    r="24"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />

                  <circle
                    cx="450"
                    cy="220"
                    r="24"
                    fill="#fff"
                    stroke="#D8E3DD"
                  />
                </svg>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    left-[88px]
                    top-[88px]
                    w-16
                    h-16
                    rounded-full
                    bg-white
                    border
                    border-[#D8E3DD]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Users size={30} className="text-[#67A55D]" />
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE CARDS */}
            <div>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                {cards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -8,
                      }}
                      className="
                        bg-white
                        rounded-[22px]
                        border
                        border-[#EDF1EE]
                        p-7
                        shadow-sm
                      "
                    >
                      <div
                        className="
                          w-20
                          h-20
                          rounded-full
                          bg-[#67A55D]
                          flex
                          items-center
                          justify-center
                          mx-auto
                        "
                      >
                        <Icon size={36} className="text-white" />
                      </div>

                      <h3
                        className="
                          text-center
                          font-semibold
                          text-[#245B49]
                          text-xl
                          mt-6
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          text-center
                          text-[#6A7770]
                          leading-7
                          mt-4
                        "
                      >
                        {card.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* GOAL BANNER */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="
                  mt-6
                  bg-[#EEF5EF]
                  border
                  border-[#E1ECE3]
                  rounded-2xl
                  p-5
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <Target size={28} className="text-[#67A55D]" />

                <p
                  className="
                    text-center
                    font-semibold
                    text-[#2A5E4B]
                    text-lg
                  "
                >
                  The Goal: Lower barriers so organizations move from commitment
                  to implementation at speed.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
