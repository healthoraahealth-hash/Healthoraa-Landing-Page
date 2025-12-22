import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/images/Logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#192347] text-gray-300">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="md:col-span-2">
          {/* <h2 className="text-2xl font-bold text-white">Healthoraa</h2> */}
          <img src={Logo} className="h-20 w-40 -ml-3"></img>
          <p className="mt-3 text-sm text-gray-400 max-w-sm">
            Building quality experiences with modern web technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/healthoraa_?igsh=MTB6NWpiZHJha2t5Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://linkedin.com/company/healthoraahub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Contact – pushed to right */}
        <div className="md:col-start-4 text-left md:text-right">
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Assam, India</p>
          <p className="text-sm mt-1">📧 healtoraa.health@gmail.com</p>
          <p className="text-sm mt-1">+91 6000206223</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Healthoraa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
