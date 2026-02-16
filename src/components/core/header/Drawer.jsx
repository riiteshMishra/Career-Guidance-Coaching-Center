import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../../data/Nav-links";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};
const MotionLink = motion.create(Link);

const Drawer = ({ setDrawerOpen, drawerOpen }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setDrawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [drawerOpen]);

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          {/* 🔹 Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          />
          {/* Side Panel */}
          <motion.section
            className="fixed top-16 right-0 w-full h-full bg-black z-50 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* CLOSE BUTTON */}
            <motion.button
              className="absolute top-6 right-6 px-5 py-2 rounded-lg 
             bg-white text-black font-semibold 
             shadow-lg hover:shadow-xl 
             transition-all duration-300"
              onClick={() => setDrawerOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center flex-col mt-10"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={childVariants}
                  className="flex flex-col"
                >
                  <MotionLink
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    className="text-white text-2xl p-4 cursor-pointer 
                 hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.name}
                  </MotionLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
