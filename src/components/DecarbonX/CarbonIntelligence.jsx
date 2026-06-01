import {
  Monitor,
  Search,
  Clock3,
  BarChart3,
  Target,
} from "lucide-react";

export default function CarbonIntelligence() {
  const items = [
    {
      icon: <Monitor size={42} strokeWidth={1.5} />,
      title: "Carbon Measurement & Visualization",
      desc: "A unified platform consolidates energy and activity data, calculates emissions via standard GHG methods, and ties carbon KPIs to business performance.",
    },
    {
      icon: <Search size={42} strokeWidth={1.5} />,
      title: "Emissions Baselining (Scope 1, 2 & 3)",
      desc: "Comprehensive source mapping and boundary definition produce a baseline that anchors net-zero targets and tracks reduction progress.",
    },
    {
      icon: <Clock3 size={42} strokeWidth={1.5} />,
      title: "Live Dashboards & Monitoring",
      desc: "Role-based dashboards fed by live data provide real-time emissions visibility, with alerts and mobile access for rapid anomaly response.",
    },
    {
      icon: <BarChart3 size={42} strokeWidth={1.5} />,
      title: "Visualization & Reporting",
      desc: "Intuitive BI visualizations clarify emission drivers, automate reports, streamline reviews and ESG disclosures with consistent data governance.",
    },
    {
      icon: <Target size={42} strokeWidth={1.5} />,
      title: "Benchmarking & Target-Setting",
      desc: "Industry and framework benchmarking reveals performance gaps, informing science-aligned targets and guiding investment and stakeholder decisions.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1750px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-[#D7E4DE] bg-[#F7FAF8] text-[#2B6A57] text-sm font-semibold mb-6">
            01
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#1F5E4C]">
            Carbon Intelligence
          </h2>

          <h3 className="text-xl md:text-2xl font-medium text-[#1F5E4C] mt-3">
            Measurement & Visualization
          </h3>

          <p className="mt-6 text-[#66756D] text-lg leading-8 max-w-3xl mx-auto">
            Precise carbon measurement, monitoring, and reduction across
            operations and the full value chain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-green-50 border border-[#E4ECE7] rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EEF6F2] flex items-center justify-center text-[#2B6A57] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h4 className="text-[#1F5E4C] text-xl font-semibold leading-7 mb-4">
                {item.title}
              </h4>

              <p className="text-[#66756D] text-[15px] leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}