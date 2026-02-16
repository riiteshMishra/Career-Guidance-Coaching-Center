import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <div className="flex justify-center mb-4">
      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: "0 8px 40px rgba(255,165,0,0.6)",
        }}
        whileTap={{
          scale: 0.92,
          boxShadow: "0 8px 40px rgba(255,165,0,0.6)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          flex items-center justify-center
          px-26 py-2
          bg-white/10
          backdrop-blur-xl
          border border-white/30
          rounded-full
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          cursor-pointer
        "
      >
        <motion.div
          whileHover={{ x: 8 }}
          whileTap={{ x: 6 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HiArrowRight
            className="
              text-3xl
              text-white
              drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]
            "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Arrow;
