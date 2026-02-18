import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/Features/Theme/Ui";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  const newTheme = theme === "light" ? "dark" : "light";

  return (
    <div>
      <motion.button
        onClick={() => dispatch(setTheme(newTheme))}
        className={`${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        } w-16 h-8 rounded-full relative flex items-center px-1 transition-colors cursor-pointer
        duration-300 `}
      >
        <motion.div
          className={`h-6 w-6 rounded-full shadow-md ${theme !== "dark" ? "bg-white border border-black" : "bg-black"}`}
          animate={{
            x: theme === "dark" ? 32 : 0,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
