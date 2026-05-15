import React from "react";
import "../styles/Footer.css";

import bannerImg from "../assets/footer-banner.jpeg";
import logo from "../assets/footer-logo.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* CTA */}
      <div className="footer-banner">
        <img src={bannerImg} alt="banner" />
        <div className="banner-content">
          <h2>
            Start your sustainability <br />
            transition today.
          </h2>
        </div>
      </div>

      {/* MAIN */}
      <div className="footer-main">
        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Pioneering the future of clean energy through innovative hydrogen
            fuel cell technology. Building a sustainable tomorrow, today.
          </p>

          <ul className="contact">
            <li>
              <FaEnvelope /> info@arthaviskara.com
            </li>
            <li>
              <FaPhoneAlt /> +91 123 456 7890
            </li>
            <li>
              <FaMapMarkerAlt /> Toyota Tsusho India Private Limited (TTIPL)-
              <br />
              Plot No. 33 & 34, Bidadi Industrial Area, Ramanagara Taluk &
              District, <br /> Karnataka - 562109.
            </li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Solutions</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#">Press Release</a>
            <a href="#">Resources</a>
            <a href="#">Documentation</a>
            <a href="#">FAQ</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Arth Aviskara. All rights reserved.</p>

        <div className="social-icons">
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
