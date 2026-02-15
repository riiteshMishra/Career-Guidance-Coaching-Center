import React from "react";
import Leftside from "../components/core/home/Leftside";
import Rightside from "../components/core/home/Rightside";
import Arrow from "../components/common/Arrow";

const Home = () => {
  return (
    <div className=" bg-black/70 py-5  h-fit">
      <section className="flex flex-col md:flex-row justify-between gap-4   container mx-auto ">
        <Leftside />
        <Rightside />
      </section>

      {/* ARROW */}
      <Arrow />
    </div>
  );
};

export default Home;
