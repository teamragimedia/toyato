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
              Avenida Marta Lopes, Nº2 <br />
              8400-401 Vila Real, Bengaluru
            </p>
          </div>

          <div className="contact-block">
            <h3>Open hours</h3>
            <p>
              Weekdays - 9:00am to 6:00pm <br />
              Weekends - Closed
            </p>
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
