import React from "react";
import "../styles/About.css";
import AboutCards from "../components/AboutCards";
import Objectives from "../components/Objectives";
import VisionMission from "../components/VisionMission";
import PriorityAreas from "../components/PriorityAreas";
import aboutImg from "../assets/renewable energy animation.gif";
import Growth from "../components/Journeytimeline";
import GlobalOutreach from "../components/GlobalOutreach";
import EngagementModel from "../components/EngagementModel";
import CoreTeam from "../components/CoreTeam";
import Partners from "../components/Partners";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <>
        <section className="about-hero"></section>
        <AboutCards />
        <Objectives />
        <VisionMission />
        <PriorityAreas image={aboutImg} />
        <Growth />
        <GlobalOutreach />
        <EngagementModel />
        <CoreTeam />
        <Partners />
      </>
    </PageWrapper>
  );
};
export default About;
