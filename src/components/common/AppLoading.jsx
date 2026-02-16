import { motion } from "framer-motion";
import Logo from "../common/Logo";

const AppLoading = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-800 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="min-h-70 max-w-64 w-11/12 bg-amber-50/20 flex justify-center flex-col items-center rounded-xl backdrop-blur-md p-6 shadow-xl"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Logo height={80} width={80} />
        </motion.div>

        {/* Coaching Name Wrapper for Gradient Animation */}
        <motion.div
          className="
    bg-gradient-to-r from-cyan-400 via-blue-400 to-green-300
    bg-clip-text text-transparent
  "
          style={{ backgroundSize: "200% 200%" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.h1 className="text-2xl font-bold mt-4 text-center leading-snug">
            <motion.span className="block">Career Guidance</motion.span>

            <motion.span className="block">&</motion.span>

            <motion.span className="block">Coaching Center</motion.span>
          </motion.h1>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-gray-200 mt-4 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Preparing Your Future...
        </motion.p>

        {/* Progress Bar */}
        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mt-4">
          <motion.div
            className="bg-amber-300 h-2 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "250%" }}
            transition={{
              duration: 1.2,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "50%" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppLoading;
