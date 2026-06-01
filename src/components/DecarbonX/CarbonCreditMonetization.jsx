import { motion } from "framer-motion";
import { FileCheck, ScrollText, MonitorSmartphone, Globe } from "lucide-react";

import carbonCreditImage from "../../assets/carbon-credit.png";

const services = [
  {
    icon: FileCheck,
    title: "Identification of Eligible Carbon Projects",
  },
  {
    icon: ScrollText,
    title: "Carbon Credit Generation Strategy",
  },
  {
    icon: MonitorSmartphone,
    title: "MRV (Monitoring, Reporting, Verification) Support",
  },
  {
    icon: Globe,
    title: "Carbon Market Linkage (Voluntary / Compliance)",
  },
];

export default function CarbonCreditMonetization() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[26px]
            bg-[#F6F8F7]
            border border-[#E7ECE8]
          "
        >
          {/* Background Glow */}
          <div className="absolute right-0 top-0 w-[500px] h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-[#dff1e7] via-transparent to-transparent opacity-40" />
          </div>

          {/* Background Image */}
          <motion.img
            src={carbonCreditImage}
            alt=""
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-60px]
              top-1/2
              -translate-y-1/2
              w-[450px]
              opacity-[0.08]
              pointer-events-none
              hidden lg:block
            "
          />

          <div className="relative z-10 grid lg:grid-cols-[600px_1fr] gap-10">
            {/* LEFT */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span
                className="
                  w-fit
                  px-3 py-1
                  rounded-lg
                  border border-[#D8E3DD]
                  bg-white
                  text-[#1E6A56]
                  font-semibold
                  text-sm
                "
              >
                03
              </span>

              <h2
                className="
                  mt-4
                  text-[34px]
                  leading-tight
                  font-bold
                  text-[#215E4B]
                "
              >
                Carbon Credit & Monetization
              </h2>

              <p
                className="
                  mt-5
                  text-[#66756D]
                  text-[17px]
                  leading-8
                "
              >
                We turn your decarbonization efforts into measurable value
                through high-quality carbon credits.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-8
                  w-fit
                  px-8
                  py-4
                  rounded-xl
                  bg-[#006D67]
                  text-white
                  font-medium
                  shadow-lg
                "
              >
                Learn More
              </motion.button>
            </div>

            {/* RIGHT - CARDS */}
            <div className="p-6 lg:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                      }}
                      whileHover={{
                        y: -8,
                      }}
                      className="
                        bg-green-100
                        rounded-[24px]
                        border
                        border-[#E5EAE7]
                        p-8
                        text-center
                        flex
                        flex-col
                        items-center
                        justify-center
                        min-h-[250px]
                        shadow-sm
                        hover:shadow-xl
                        transition-all
                        duration-300
                      "
                    >
                      <div
                        className="
                          w-24
                          h-24
                          rounded-full
                          bg-[#F7FAF8]
                          border
                          border-[#E5EAE7]
                          flex
                          items-center
                          justify-center
                          mb-6
                        "
                      >
                        <Icon
                          size={42}
                          className="text-[#79A96B]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3
                        className="
                          text-[#294D43]
                          font-semibold
                          leading-8
                          text-lg
                        "
                      >
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
