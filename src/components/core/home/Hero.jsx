import { motion } from "framer-motion";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Arrow from "../../common/Arrow";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      {/* 🔹 SEO - Only Main Page Identity */}
      <Helmet>
        <title>
          Best English Coaching for Class 9 & 10 | Career Coaching Center
        </title>
        <meta
          name="description"
          content="Expert English coaching with full grammar coverage, textbook explanation, and board exam preparation for Class 9th and 10th students."
        />
      </Helmet>

      <motion.div
        className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 pb-5"
        id="home"
      >
        <section className="container mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <Leftside />
          <Rightside />
        </section>

        <Arrow />
      </motion.div>
    </>
  );
};

export default Hero;
