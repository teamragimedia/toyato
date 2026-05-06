import React, { useEffect, useState } from "react";
import getImage from "../utils/getImage";
import API from "../api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // ✅ CLOSE ICON
import "../styles/Modal.css";

const SolutionModal = ({ data, onClose, refresh }) => {
  const [reaction, setReaction] = useState(null);
  const [localData, setLocalData] = useState(null);

  // ================= SYNC DATA =================
  useEffect(() => {
    if (data) {
      setLocalData(data);

      const saved = localStorage.getItem(`reaction-${data._id}`);
      setReaction(saved || null);
    }
  }, [data]);

  if (!data || !localData) return null;

  // ================= LIKE =================
  const handleLike = async () => {
    if (reaction === "like") return;

    try {
      let res;

      if (reaction === "dislike") {
        res = await API.patch(`/solutions/${data._id}/switch-to-like`);
      } else {
        res = await API.patch(`/solutions/${data._id}/like`);
      }

      setReaction("like");
      localStorage.setItem(`reaction-${data._id}`, "like");
      setLocalData(res.data);

      refresh && refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DISLIKE =================
  const handleDislike = async () => {
    if (reaction === "dislike") return;

    try {
      let res;

      if (reaction === "like") {
        res = await API.patch(`/solutions/${data._id}/switch-to-dislike`);
      } else {
        res = await API.patch(`/solutions/${data._id}/dislike`);
      }

      setReaction("dislike");
      localStorage.setItem(`reaction-${data._id}`, "dislike");
      setLocalData(res.data);

      refresh && refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* ================= IMAGE ================= */}
        <div className="modal-image-wrapper">
          {localData?.image && (
            <img src={getImage(localData.image)} alt={localData.title} />
          )}

          {/* ✅ CLOSE ICON */}
          <button className="close-icon" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {/* ================= HEADER ================= */}
        <div className="modal-header">
          <span className="pill">{localData.category}</span>

          <div className="actions">
            <button
              className={`icon-btn ${reaction === "like" ? "active like" : ""}`}
              onClick={handleLike}
            >
              <FaThumbsUp />
              <span>{localData.likes || 0}</span>
            </button>

            <button
              className={`icon-btn ${
                reaction === "dislike" ? "active dislike" : ""
              }`}
              onClick={handleDislike}
            >
              <FaThumbsDown />
              <span>{localData.dislikes || 0}</span>
            </button>
          </div>
        </div>

        {/* ================= TITLE ================= */}
        <h2 className="modal-title">{localData.title}</h2>

        {/* ================= PROBLEM ================= */}
        <div className="section">
          <p className="label">Problem</p>
          <p>{localData.problem}</p>
        </div>

        {/* ================= SOLUTION ================= */}
        <div className="section">
          <p className="label">Solution</p>
          <p>{localData.solution}</p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="section">
          <p className="label">Key Features</p>
          <div className="features">
            {localData.features?.map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>
        </div>

        {/* ================= BUTTON ================= */}
        <button className="contact-btn">Contact for more details</button>
      </div>
    </div>
  );
};

export default SolutionModal;
