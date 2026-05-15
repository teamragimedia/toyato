import React, { useEffect, useState } from "react";
import SolutionsHero from "../components/SolutionHero";
import StatsSection from "../components/StatsSection";
import SolutionCard from "../components/SolutionCard";
import SolutionModal from "../components/SolutionModal"; 
import API from "../api";
import "../styles/Solutions.css";
import PageWrapper from "../components/PageWrapper";

const categories = [
  "All",
  "Transportation",
  "Water",
  "Environment",
  "Energy",
  "Waste",
  "Technology",
];

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  // ✅ NEW STATE FOR MODAL
  const [selectedSolution, setSelectedSolution] = useState(null);

  const fetchSolutions = async () => {
    try {
      const res = await API.get("/solutions");

      console.log("FULL API RESPONSE:", res.data);

      let solutionsData = [];

      // Case 1: direct array
      if (Array.isArray(res.data)) {
        solutionsData = res.data;
      }

      // Case 2: { data: [] }
      else if (Array.isArray(res.data.data)) {
        solutionsData = res.data.data;
      }

      // Case 3: { solutions: [] }
      else if (Array.isArray(res.data.solutions)) {
        solutionsData = res.data.solutions;
      } else {
        console.error("Unexpected API format:", res.data);
      }

      setSolutions(solutionsData);
    } catch (err) {
      console.error("Fetch solutions error:", err);
      setSolutions([]);
    }
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  // ✅ FILTER LOGIC
  const filteredSolutions =
    activeTab === "All"
      ? solutions
      : solutions.filter(
          (item) => item.category?.toLowerCase() === activeTab.toLowerCase(),
        );

  // ✅ OPEN MODAL
  const handleOpen = (item) => {
    setSelectedSolution(item);
  };

  // ✅ CLOSE MODAL
  const handleClose = () => {
    setSelectedSolution(null);
    // ✅ refresh data when modal closes
    // ✅ wait for modal close first
    setTimeout(() => {
      fetchSolutions();
    }, 100);
  };

  return (
    <PageWrapper>
      <>
        <SolutionsHero />
        <StatsSection />

        <section className="solutions-section">
          <div className="solutions-container">
            {/* ================= TABS ================= */}
            <div className="tabs-wrapper">
              <div className="tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`tab ${activeTab === cat ? "active" : ""}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= GRID ================= */}
            <div className="card-grid">
              {filteredSolutions.map((item) => (
                <SolutionCard
                  key={item._id}
                  item={item}
                  refresh={fetchSolutions}
                  isAdmin={false}
                  onOpen={handleOpen} // ✅ IMPORTANT
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        <SolutionModal
          data={selectedSolution}
          onClose={handleClose}
          refresh={fetchSolutions}
        />
      </>
    </PageWrapper>
  );
};

export default Solutions;
