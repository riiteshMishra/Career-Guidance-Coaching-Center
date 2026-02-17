import { motion, AnimatePresence } from "framer-motion";
import { GiTireIronCross } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = ({ drawerOpen, setDrawerOpen }) => {
  const handleClick = () => {
    if ("vibrate" in navigator) navigator.vibrate(50);

    return setDrawerOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="text-white cursor-pointer text-2xl block sm:hidden z-50"
      onClick={() => handleClick()}
    >
      <AnimatePresence mode="wait">
        {drawerOpen ? (
          <motion.div
            key="close"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.2, 1], rotate: 90, color: "red" }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="z-104"
          >
            <GiTireIronCross />
          </motion.div>
        ) : (
          <motion.div
            className="text-green-400"
            key="menu"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <RxHamburgerMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hamburger;
