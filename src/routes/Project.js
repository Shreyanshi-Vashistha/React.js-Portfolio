import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg2 from "../components/BgImg2";
import ProjectCards from "../components/ProjectCards";

const project = () => {
  return (
    <div>
      <Navbar />
      <BgImg2 heading="PROJECTS." text="My recent works" />
      <ProjectCards />
      <Footer />
    </div>
  );
};

export default project;
