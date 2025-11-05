import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF59E] text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            ✦  PureSpace
          </h1>
          <button className="mt-6 bg-[#0F2D2C] text-white px-8 py-3 rounded-full  hover:bg-[#FFF59E]  transition">
            Book Now
          </button>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h2 className="font-semibold mb-4">Operating Hours</h2>
          <ul className="text-sm space-y-1">
            <li>Mon - Fri: 8am - 8pm</li>
            <li>Saturday: 9am - 7pm</li>
            <li>Sunday: 9am - 8pm</li>
          </ul>
          <p className="mt-4 text-sm">Follow us for PureSpace tips</p>
          <div className="flex items-center gap-4 mt-2 text-lg">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
           
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold mb-4">Contact</h2>
          <ul className="text-sm space-y-1">
            <li>PureSpace</li>
            <li>LBS Marg, Mulund West</li>
            <li>Mumbai, 400 080</li>
            <li>123-456-7890</li>
            <li>info@purespace.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-800 mt-10 border-t border-gray-300 pt-4 bg-[#FFFAE5]">
    
        © 2035 by PureSpace. Designed by{" "}
        <a href="#" className="underline font-medium ">
          Aditya Kharatmal.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
