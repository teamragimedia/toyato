import React from "react";
import "../styles/Contact-Section.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-block">
            <h3>Location</h3>
            <p>
              Toyota Tsusho India Private Limited (TTIPL)- Plot No. 33 & 34,
              Bidadi Industrial Area, Ramanagara Taluk & District, Karnataka -
              562 109.
            </p>
          </div>

          <div className="contact-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4615.428815968971!2d77.42242827572117!3d12.78219351900137!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae461f320c044d%3A0x4194e06710983ca6!2sTOYOTA%20TSUSHO%20INDIA%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1778759275511!5m2!1sen!2sin"
              width="100%"
              height="330"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toyota Tsusho India Location"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3 className="contact-title">Contact us</h3>
          <p className="contact-desc">
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Company (optional)" />
            </div>

            <textarea placeholder="Message"></textarea>

            <div className="form-check">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree with the <span>terms and conditions</span>
              </label>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
