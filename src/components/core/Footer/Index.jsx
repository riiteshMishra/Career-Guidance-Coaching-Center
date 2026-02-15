import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <footer className=" text-white py-12 px-6 md:px-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Sivanand Sir English Classes
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Providing complete English grammar and full textbook coverage for
              over 7+ years with a 98% success rate.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-(--secondary-color) transition">
                Home
              </li>
              <li className="hover:text-(--secondary-color) transition">
                About
              </li>
              <li className="hover:text-(--secondary-color) transition">
                Courses
              </li>
              <li className="hover:text-(--secondary-color) transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-(--secondary-color)" />
              <span>Near Main Market, Your City</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-(--secondary-color)" />
              <span>+91 98765 43210</span>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-6 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Shivanand Sir English Classes. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
