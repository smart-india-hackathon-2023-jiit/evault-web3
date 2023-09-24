import React from 'react';
import { Link } from 'react-router-dom';
import law from '../images/law.jpg';

const Navbar = ({ onConnect }) => {
  return (
    <nav className="bg-white text-white p-2 z-10 fixed top-0 left-0 w-full font-display">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={law} alt="Your Logo" className="h-12 w-12" />
            </Link>
          </div>
          <div className="space-x-6">
            <a
              href="About"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-[#053B50] hover:border-b-2 hover:border-[#053B50] px-2 py-1 rounded text-lg text-[#176B87]"
            >
              Contact
            </a>
            <button
              className="bg-[#176B87] hover:bg-[#053B50] text-white font-semibold py-2 px-4 rounded-lg border-2 border-[#176B87] hover:border-[#053B50] transition-all duration-300 ease-in-out"
              onClick={onConnect}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
