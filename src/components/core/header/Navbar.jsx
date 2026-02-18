import { Link, Links } from "react-router-dom";
import { navLinks } from "../../../data/Nav-links";
import Logo from "../../common/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";

import { useState } from "react";
import Drawer from "./Drawer";
import Hamburger from "./Hamburger";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 relative z-1">
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
    </nav>
  );
};

export default Navbar;
