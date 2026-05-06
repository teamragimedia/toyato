import React, { useState, useEffect } from "react";
import getImage from "../utils/getImage";
import getSDG from "../utils/getSDG";
import API from "../api";
import "../styles/SolutionCard.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const SolutionCard = ({
  item,
  refresh,
  isAdmin = false,
  onEdit,
  onDelete,
  onOpen, // ✅ added
}) => {
  const [reaction, setReaction] = useState(null);

  // ✅ LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem(`reaction-${item._id}`);
    if (saved) {
      setReaction(saved);
    }
  }, [item._id]);

  // =========================
  // 👍 LIKE CLICK
  // =========================
  const handleLikeClick = async () => {
    if (reaction === "like") return;

    try {
      if (reaction === "dislike") {
        await API.patch(`/solutions/${item._id}/switch-to-like`);
      } else {
        await API.patch(`/solutions/${item._id}/like`);
      }

      setReaction("like");
      localStorage.setItem(`reaction-${item._id}`, "like");

      refresh && refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // =========================
  // 👎 DISLIKE CLICK
  // =========================
  const handleDislikeClick = async () => {
    if (reaction === "dislike") return;

    try {
      if (reaction === "like") {
        await API.patch(`/solutions/${item._id}/switch-to-dislike`);
      } else {
        await API.patch(`/solutions/${item._id}/dislike`);
      }

      setReaction("dislike");
      localStorage.setItem(`reaction-${item._id}`, "dislike");

      refresh && refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="solution-card">
      {/* ================= IMAGE ================= */}
      <div className="card-img">
        <img src={getImage(item.image)} alt={item.title} />

        <div className="sdg-badges">
          {item.sdgs?.map((s) => (
            <img key={s} src={getSDG(s)} alt="sdg" />
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="card-body">
        {/* TAG */}
        <div className="top-tags">
          <span className="pill">{item.category}</span>

          <span className={`status ${item.status}`}>{item.status}</span>
        </div>

        {/* TITLE */}
        <h3 className="solutioncardhead3">{item.title}</h3>

        {/* ================= LIKE / DISLIKE ================= */}
        <div className="actions">
          <button
            className={`icon-btn ${reaction === "like" ? "active like" : ""}`}
            onClick={handleLikeClick}
          >
            <FaThumbsUp />
            <span>{item.likes}</span>
          </button>

          <button
            className={`icon-btn ${
              reaction === "dislike" ? "active dislike" : ""
            }`}
            onClick={handleDislikeClick}
          >
            <FaThumbsDown />
            <span>{item.dislikes}</span>
          </button>
        </div>

        {/* ================= PROBLEM ================= */}
        <div className="section">
          <p className="label">Problem</p>
          <p>{item.problem}</p>
        </div>

        {/* ================= SOLUTION ================= */}
        <div className="section">
          <p className="label">Solution</p>
          <p>{item.solution}</p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="section">
          <p className="label">Key Features</p>
          <div className="features">
            {item.features?.slice(0, 3).map((f, i) => (
              <span key={i}>{f}</span>
            ))}
            {item.features?.length > 3 && (
              <span>+{item.features.length - 3}</span>
            )}
          </div>
        </div>

        {/* ================= LEARN MORE ================= */}
        <button
          className="learn-btn"
          onClick={() => {
            console.log("CLICK WORKING"); // 🔍 debug
            onOpen && onOpen(item);
          }}
        >
          Learn More
        </button>
        {/* ================= ADMIN ================= */}
        {isAdmin && (
          <div className="card-actions">
            <button className="edit" onClick={() => onEdit(item)}>
              Edit
            </button>

            <button className="delete" onClick={() => onDelete(item._id)}>
              Delete
            </button>

            <button
              className="reset"
              onClick={async () => {
                await API.patch(`/solutions/${item._id}/reset`);
                localStorage.removeItem(`reaction-${item._id}`);
                refresh && refresh();
              }}
            >
              Reset Likes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;
