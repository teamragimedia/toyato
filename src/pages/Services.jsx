import React from "react";
import Servicehero from "../components/Services/Servicehero";
import EngagementModel from "../components/EngagementModel";
import StartupSolution from "../components/Services/StartupSolution";
import EngagementPathway from "../components/Services/EngagementPathway";
import CorporateSolution from "../components/Services/CorporateSolution";
import EngagementProcess from "../components/Services/EngagementProcess";
import IncubationHub from "../components/Services/Incubation";
import Process from "../components/Services/Process";
import CustomSolutions from "../components/Services/CustomSolutions";

const Services = () => {
  return (
    <>
      <Servicehero />
      <EngagementModel />
      <StartupSolution />
      <EngagementPathway />
      <CorporateSolution />
      <EngagementProcess />
      <IncubationHub />
      <Process />
      <CustomSolutions />
    </>
  );
};

export default Services;
