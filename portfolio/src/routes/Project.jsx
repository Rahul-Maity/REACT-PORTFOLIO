import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Pcard from "../components/Pcard";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="PROJECTS" text="some of my recent projects" />
    <WorkCard/>
    <Pcard/>
<Footer/>
  </div>;
};

export default Project;
