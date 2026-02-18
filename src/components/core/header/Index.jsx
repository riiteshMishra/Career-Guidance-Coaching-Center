import { useScroll, motion } from "framer-motion";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <motion.header
      className={`sticky top-0 z-10  transition-all duration-300 bg-transparent sm:bg-gray-800`}
    >
      <Navbar />
    </motion.header>
  );
};

export default Header;
