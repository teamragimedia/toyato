import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Network,
  Droplets,
  Recycle,
  Wrench,
  PieChart,
  Leaf,
  ArrowRight,
} from "lucide-react";

import Dassplant from "../../assets/daas-plant.png";

const services = [
  {
    icon: ClipboardCheck,
    text: "Carbon footprint assessment & energy audits",
  },
  {
    icon: Network,
    text: "Technology identification and deployment",
  },
  {
    icon: Droplets,
    text: "Water recycling",
  },
  {
    icon: Recycle,
    text: "CCUS, renewable energy, Bio-CNG, and energy efficiency solutions",
  },
  {
    icon: Wrench,
    text: "EPC, operations & maintenance support",
  },
  {
    icon: PieChart,
    text: "Monitoring, reporting carbon accounting",
  },
  {
    icon: Leaf,
    text: "Performance-driven and outcome-based delivery models",
  },
];

export default function DaasSection() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="overflow-hidden rounded-[28px] border border-[#E7ECE8] bg-[#F7F9F8]">
          {/* Content */}
          <div className="relative px-6 md:px-10 lg:px-16 py-16 overflow-hidden">
            {/* Background Motifs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#75A66B]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#006D67]/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-5xl mx-auto text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#205B49]">
                Decarbonization-as-a-Service (DaaS)
              </h2>

              <p className="mt-6 text-[#64716A] text-lg leading-8 max-w-4xl mx-auto">
                Accelerate your sustainability journey with end-to-end
                decarbonization solutions delivered through a service-based
                model. We assess, design, finance, implement, and optimize
                carbon reduction initiatives helping businesses achieve
                measurable emission reductions with reduced upfront investment.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="relative z-10 mt-16">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="
              group
              bg-white
              border
              border-[#E3EBE6]
              rounded-[28px]
              p-8
              shadow-sm
              hover:shadow-2xl
              hover:border-[#75A66B]
              transition-all
              duration-300
              text-center
              min-h-[230px]
              flex
              flex-col
              justify-center
              items-center
            "
                    >
                      <div
                        className="
                w-20
                h-20
                rounded-3xl
                bg-[#F3F8F4]
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-[#75A66B]
                transition-all
                duration-300
              "
                      >
                        <Icon
                          size={36}
                          className="
                  text-[#75A66B]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
                        />
                      </div>

                      <p className="text-[#2B4F45] font-medium leading-8 text-lg">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Goal Banner */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="
              border-t
              border-[#E4EAE6]
              px-8
              py-6
              flex
              justify-center
              items-center
              gap-4
              bg-white
            "
          >
            <Leaf size={28} className="text-[#74A567]" />

            <p className="text-center font-semibold text-[#28604D] text-lg">
              Transform sustainability goals into measurable impact through a
              smarter, scalable approach to decarbonization.
            </p>
          </motion.div>

          {/* CTA Footer */}

          <div className="bg-[#006D67] relative overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_1fr_280px] gap-8 items-center px-8 lg:px-12 py-10">
              <div>
                <h3 className="text-white text-[38px] font-bold leading-tight">
                  Ready to Accelerate Your
                  <br />
                  Decarbonization Journey?
                </h3>
              </div>

              <div className="lg:border-l border-white/20 lg:pl-8">
                <p className="text-white/90 text-lg leading-8">
                  Partner with Arthaviskara to build a low-carbon, resilient,
                  and future-ready business.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    bg-white
                    text-[#006D67]
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    flex
                    items-center
                    gap-3
                  "
                >
                  Connect With Us
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute right-0 top-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
