import React from "react";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <>
        <ContactHero />
        <ContactSection />
        {/* Your contact form or content below */}
      </>
    </PageWrapper>
  );
};

export default Contact;
