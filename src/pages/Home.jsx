import React from "react";
import Leftside from "../components/core/home/Leftside";
import Rightside from "../components/core/home/Rightside";
import Arrow from "../components/common/Arrow";
import Instructor from "../components/core/home/Instructor";

const Home = () => {
  return (
    <div className=" bg-black/70 py-5  h-fit">
      <section className="flex flex-col md:flex-row justify-between gap-4   container mx-auto ">
        <Leftside />
        <Rightside />
      </section>

      {/* ARROW */}
      <Arrow />
      <Instructor />
    </div>
  );
};

export default Home;
