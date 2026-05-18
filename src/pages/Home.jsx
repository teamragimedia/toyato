import React, { useEffect, useState } from "react";

// Sections
import Hero from "../components/Home/Hero";
import HomeStats from "../components/Home/HomeStats";
import EngagementServices from "../components/Home/EngagementServices";
import PriorityAreas from "../components/PriorityAreas";
import MissionSection from "../components/Home/MissionSection";
import ValuesSection from "../components/Home/ValuesSection";
import AboutSection from "../components/Home/AboutSection";
import CommitmentSection from "../components/Home/CommitmentSection";
import StrategicObjectives from "../components/Home/StrategicObjectives";
import SuccessStories from "../components/Home/SuccessStories";
import FAQSection from "../components/Home/FAQSection";
import CTASection from "../components/Home/CTASection";
import PageWrapper from "../components/PageWrapper";

// Assets
import homeImg from "../assets/prior.gif";

// API + Card
import API from "../api";
import SolutionCard from "../components/SolutionCard";

const Home = () => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const res = await API.get("/solutions");
        setSolutions(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSolutions();
  }, []);

  // ✅ TAKE ONLY 3
  const topSolutions = solutions.slice(0, 3);

  return (
    <PageWrapper>
      <>
        <Hero />
        <HomeStats />
        <EngagementServices />
        <PriorityAreas variant="home" image={homeImg} />
        <MissionSection />
        <ValuesSection />
        <AboutSection />

        {/* ===== SOLUTIONS SECTION ===== */}
        <section className="bg-[#f5f7f9] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* TITLE */}
            <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1c5d8c]">
              Our Solutions Portfolio
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-10">
              15+ innovative solutions across renewable energy, water
              management, industrial automation, and sustainable mobility
            </p>

            {/* CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(topSolutions) &&
                topSolutions.map((item) => (
                  <SolutionCard key={item._id} item={item} isAdmin={false} />
                ))}
            </div>

            {/* VIEW ALL */}
            <div className="text-center mt-10">
              <a
                href="/solutions"
                className="px-6 py-3 text-white no-underline rounded-md
    bg-[#2e8b57] inline-block"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </section>

        <CommitmentSection />
        <StrategicObjectives />
        <SuccessStories />
        <FAQSection />
        <CTASection />
      </>
    </PageWrapper>
  );
};

export default Home;
