import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Arrow from "../../common/Arrow";

const Hero = () => {
  return (
    <div className="bg-black" id="home">
      <section className=" flex flex-col md:flex-row justify-between gap-4   container mx-auto ">
        <Leftside />
        <Rightside />
      </section>
      <Arrow />
    </div>
  );
};

export default Hero;
