import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f9f6ea] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-lg">✨</span>
          <Link to="/" className="font-medium text-gray-800 text-lg">
            PureSpace
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <li>
            <Link to="/plans" className="hover:text-black transition">
              Plans
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-black transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black transition">
              About
            </Link>
          </li>
          <li className="hover:text-black transition flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
            <Link to="/login">Log In</Link>
          </li>
        </ul>

        {/* Book Now Button */}
        <Link
          to="/booknow"
          className="bg-[#001c17] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
