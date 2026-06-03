import React, { useEffect, useState } from "react";
import getImage from "../utils/getImage";
import API from "../api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../styles/Modal.css";

const SolutionModal = ({ data, onClose, refresh }) => {
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    if (!data) return;

    const saved = localStorage.getItem(`reaction-${data._id}`);
    setReaction(saved || null);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  if (!data) return null;

  const handleLike = async () => {
    if (reaction === "like") return;

    try {
      if (reaction === "dislike") {
        await API.patch(`/solutions/${data._id}/switch-to-like`);
      } else {
        await API.patch(`/solutions/${data._id}/like`);
      }

      setReaction("like");
      localStorage.setItem(`reaction-${data._id}`, "like");

      refresh?.();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDislike = async () => {
    if (reaction === "dislike") return;

    try {
      if (reaction === "like") {
        await API.patch(`/solutions/${data._id}/switch-to-dislike`);
      } else {
        await API.patch(`/solutions/${data._id}/dislike`);
      }

      setReaction("dislike");
      localStorage.setItem(`reaction-${data._id}`, "dislike");

      refresh?.();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* IMAGE */}
        <div className="modal-image-wrapper">
          {data.image && <img src={getImage(data.image)} alt={data.title} />}

          <button className="close-icon" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {/* HEADER */}
        <div className="modal-header">
          <span className="pill">{data.category}</span>

          <div className="actions">
            <button
              className={`icon-btn ${reaction === "like" ? "active like" : ""}`}
              onClick={handleLike}
            >
              <FaThumbsUp />
              <span>{data.likes || 0}</span>
            </button>

            <button
              className={`icon-btn ${
                reaction === "dislike" ? "active dislike" : ""
              }`}
              onClick={handleDislike}
            >
              <FaThumbsDown />
              <span>{data.dislikes || 0}</span>
            </button>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="modal-title">{data.title}</h2>

        {/* PROBLEM */}
        <div className="section">
          <p className="label">Problem</p>
          <p>{data.problem}</p>
        </div>

        {/* SOLUTION */}
        <div className="section">
          <p className="label">Solution</p>
          <p>{data.solution}</p>
        </div>

        {/* FEATURES */}
        <div className="section">
          <p className="label">Key Features</p>

          <div className="features">
            {data.features?.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        </div>

        <button className="contact-btn">Contact for more details</button>
      </div>
    </div>
  );
};

export default SolutionModal;
