import { motion } from "framer-motion";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Arrow from "../../common/Arrow";
import { useSelector } from "react-redux";

const Hero = () => {
  const { theme } = useSelector((state) => state.ui);
  return (
    <motion.div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500 h-fit pb-5`}
      id="home"
    >
      <section className="  flex-col md:flex-row justify-between gap-4   container mx-auto ">
        <div className=" flex flex-col md:flex-row justify-between gap-4   ">
          <Leftside />
          <Rightside />
        </div>

        <Arrow />
      </section>
    </motion.div>
  );
};

export default Hero;
