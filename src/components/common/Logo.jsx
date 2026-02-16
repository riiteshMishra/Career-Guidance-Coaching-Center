import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoImg from "/logo.png";

const Logo = ({ height, width }) => {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <motion.img
        src={LogoImg}
        alt="Career Coaching Center Logo"
        height={height || 40}
        width={width || 40}
        className="rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
    </Link>
  );
};

export default Logo;
