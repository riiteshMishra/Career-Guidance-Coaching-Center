import React from "react";
import Leftside from "../components/core/home/Leftside";
import Rightside from "../components/core/home/Rightside";
import Arrow from "../components/common/Arrow";
import Instructor from "../components/core/home/Instructor";
import About from "../components/core/home/About";
import Courses from "../components/core/home/Courses";
import Result from "../components/core/home/Results";
import Contact from "../components/core/home/Contact";
import Hero from "../components/core/home/Hero";

const Home = () => {
  return (
    <div className=" h-fit">
      <Hero />

      {/* ARROW */}
      {/* <Arrow /> */}
      <Instructor />
      <About />
      <Courses />
      <Result />
      <Contact />
    </div>
  );
};

export default Home;
