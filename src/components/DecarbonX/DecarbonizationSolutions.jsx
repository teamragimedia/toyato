import { motion } from "framer-motion";
import {
  CheckCircle2,
  Leaf,
  Search,
  ClipboardCheck,
  Cog,
  Target,
} from "lucide-react";

const points = [
  {
    title: "Identification of Emission Hotspots",
    desc: "We map operational and value chain emissions to prioritize high-impact areas.",
  },
  {
    title: "Technology Scouting",
    desc: "We connect you with relevant technologies, partners, and solution pathways aligned to your goals.",
  },
  {
    title: "POC Validation & Deployment Support",
    desc: "We test feasibility, performance, and business impact before large-scale deployment.",
  },
  {
    title: "Process Optimization",
    desc: "We improve efficiency, reduce energy use, and transition to lower-carbon alternatives.",
  },
  {
    title: "Continuous Monitoring",
    desc: "Track progress and ensure measurable emissions reduction over time.",
  },
];

const orbitItems = [
  {
    icon: <Target size={36} />,
  },
  {
    icon: <Search size={36} />,
  },
  {
    icon: <ClipboardCheck size={36} />,
  },
  {
    icon: <Cog size={36} />,
  },
];

export default function DecarbonizationSolutions() {
  return (
    <section className="py-20 px-5 ">
      <div className="max-w-[1800px] bg-[url('assets/decarbonx1.jpeg')]  bg-contain bg-left mx-auto">
        <div
          className="  bg-[#F7F8F7]/50
            rounded-[28px]
            border
            border-[#E8ECEA]
            overflow-hidden
            p-6 md:p-10"
        >
          {/* LEFT + RIGHT */}
          <div className="grid lg:grid-cols-[430px_1fr] gap-12">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex px-3 py-1 rounded-md border border-[#D8E4DD] bg-white text-[#2B6A57] text-sm font-semibold">
                02
              </span>

              <h2 className="text-[36px] leading-tight font-bold text-[#215F4C] mt-4">
                Decarbonization Solutions
              </h2>

              <h3 className="text-[28px] font-bold text-[#215F4C]">
                (Reduction)
              </h3>

              <p className="mt-5 text-[#617067] leading-8">
                We help organizations reduce emissions by first identifying the
                most significant emission hotspots across operations, assets,
                and value chains.
              </p>

              {/* Orbit Diagram */}
              <div className="relative mt-12 h-[360px] hidden lg:block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 text-[#72AF61]">
                    {orbitItems[0].icon}
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#72AF61]">
                    {orbitItems[1].icon}
                  </div>

                  <div className="absolute bottom-10 right-10 text-[#72AF61]">
                    {orbitItems[2].icon}
                  </div>

                  <div className="absolute bottom-10 left-10 text-[#72AF61]">
                    {orbitItems[3].icon}
                  </div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="130"
                      fill="none"
                      stroke="#DCE6DF"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                    />
                  </svg>
                </motion.div>

                <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] rounded-full border-4 border-[#E4ECE6] bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-sm">
                  <Leaf size={80} className="text-[#72AF61]" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div>
              {/* TOP ROW - 3 CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {points.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="bg-[#fff] rounded-2xl border border-[#E6ECE8] p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle2 size={24} className="text-[#72AF61] mb-0" />

                    <h4 className="font-semibold text-[#275E4B] text-lg mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#68756E] leading-7">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* SECOND ROW - CENTERED 2 CARDS */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {points.slice(3, 5).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="bg-[#fff] rounded-2xl border border-[#E6ECE8] p-6 shadow-sm hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-12px)] xl:w-[31%]"
                  >
                    <CheckCircle2 size={24} className="text-[#72AF61] mb-0" />

                    <h4 className="font-semibold text-[#275E4B] text-lg mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#68756E] leading-7">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* RESULT CARD */}
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
                <p
                  className="
                    text-center
                    font-semibold
                    text-[#2A5E4B]
                    text-lg
                  "
                >
                  <span className="font-bold">The Result:</span> A practical
                  decarbonization roadmap that balances technical viability,
                  cost, and measured emissions reduction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
