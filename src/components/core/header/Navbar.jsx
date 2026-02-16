import { Link, Links } from "react-router-dom";
import { navLinks } from "../../../data/Nav-links";
import Logo from "../../common/Logo";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Logo />
          <div className="sm:flex items-center gap-x-10 hidden">
            {navLinks.map((link) => (
              <div key={link.id}>
                <Link to={link.path} className="hover:text-gray-300">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
