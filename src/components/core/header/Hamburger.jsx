import { motion, AnimatePresence } from "framer-motion";
import { GiTireIronCross } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <motion.div
      className="text-white cursor-pointer text-2xl block sm:hidden z-50"
      onClick={() => setDrawerOpen((prev) => !prev)}
    >
      <AnimatePresence mode="wait">
        {drawerOpen ? (
          <motion.div
            key="close"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            className="z-104"
          >
            <GiTireIronCross />
          </motion.div>
        ) : (
          <motion.div
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
