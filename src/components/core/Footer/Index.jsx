import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white py-12 px-6 md:px-20 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Sivanand Sir English Classes
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Providing complete English grammar and full textbook coverage for
              over 7+ years with a 98% board exam success rate.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <nav>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-[var(--secondary-color)] transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--secondary-color)] transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[var(--secondary-color)] transition"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--secondary-color)] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3 - Contact Info */}
          <address className="not-italic text-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Contact Info
            </h2>

            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-[var(--secondary-color)]" />
              <span>Near Main Market, Lucknow</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-[var(--secondary-color)]" />
              <a href="tel:+919876543210" className="hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Sivanand Sir English Classes. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
