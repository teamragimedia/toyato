import React, { useEffect, useState } from "react";
import "../styles/StatsSection.css";
import API from "../api";

// ✅ Import your GIFs
import totalGif from "../assets/totalsolution.gif";
import completedGif from "../assets/completed.gif";
import categoriesGif from "../assets/categories.gif";
import sdgGif from "../assets/sdggoals.gif";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
};

const StatsSection = () => {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    categories: 0,
    sdgs: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/solutions");
        const solutions = res.data;

        // ✅ Total
        const total = solutions.length;

        // ✅ Completed
        const completed = solutions.filter(
          (item) => item.status === "completed",
        ).length;

        // ✅ Unique Categories
        const categories = new Set(solutions.map((item) => item.category)).size;

        // ✅ Unique SDGs
        const sdgSet = new Set();
        solutions.forEach((item) => {
          item.sdgs?.forEach((sdg) => sdgSet.add(sdg));
        });

        const sdgs = sdgSet.size;

        setStats({ total, completed, categories, sdgs });
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    {
      value: stats.total,
      suffix: "+",
      label: "Total Solutions",
      color: "#66bb6a",
      gif: totalGif,
    },
    {
      value: stats.completed,
      suffix: "",
      label: "Completed",
      color: "#f9a825",
      gif: completedGif,
    },
    {
      value: stats.categories,
      suffix: "",
      label: "Categories",
      color: "#00acc1",
      gif: categoriesGif,
    },
    {
      value: stats.sdgs,
      suffix: "",
      label: "SDG Goals",
      color: "#ef5350",
      gif: sdgGif,
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            {/* ✅ GIF Above Number */}
            <img src={item.gif} alt={item.label} className="stat-gif" />

            <Counter end={item.value} suffix={item.suffix} />

            <p style={{ color: item.color }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
