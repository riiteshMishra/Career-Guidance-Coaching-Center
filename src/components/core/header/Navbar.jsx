import { Link, Links } from "react-router-dom";
import { navLinks } from "../../../data/Nav-links";
import Logo from "../../common/Logo";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import Hamburger from "./Hamburger";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className="bg-gray-800 text-white p-2 z-40 sticky top-4 mx-auto transition-all duration-300 border-white"
      animate={{
        borderRadius: scrolled ? "0 0 10px 10px" : "0px",
        borderBottomWidth: scrolled ? "1px" : "0px",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center justify-center gap-x-4">
            <Logo />
            <ThemeSwitcher />
          </div>

          <div className="sm:flex items-center gap-x-10 hidden">
            {navLinks.map((link) => (
              <div key={link.id}>
                <Link to={link.path} className="hover:text-gray-300">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          {/* HAMBURGER */}
          <Hamburger drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

          {drawerOpen && (
            <Drawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
