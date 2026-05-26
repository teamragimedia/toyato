import React from "react";
import "../styles/Contact.css";
import bgImage from "../assets/contact.gif";

const ContactHero = () => {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact-hero-content">
        <h1 className="contact-hero-title text-black">Contact Us</h1>
      </div>
    </section>
  );
};

export default ContactHero;
