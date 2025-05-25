import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("For buyers");

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-semibold text-lg">
            <img src="/logo-icon.png" alt="Logo" className="w-6 h-6" />
            <span>Realtor X</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm">
            <a
              href="#"
              onClick={() => setActiveNav("For buyers")}
              className={`relative pb-2 ${
                activeNav === "For buyers"
                  ? "text-white font-semibold after:content-[''] after:absolute after:-bottom-[18px] after:left-0 after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-blue-200"
              }`}
            >
              For buyers
            </a>

            <a href="#" className="relative pb-2 hover:text-blue-200">
              For tenants
            </a>
            <a href="#" className="relative pb-2 hover:text-blue-200">
              For owners
            </a>
            <a href="#" className="relative pb-2 hover:text-blue-200">
              For dealers / builders
            </a>
            <a href="#" className="relative pb-2 hover:text-blue-200">
              Insights
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-sm hover:text-blue-300">
              <FiUser className="mr-1" />
              Log in
            </button>
            <button className="border border-white hover:bg-white hover:text-[#003366] transition-all px-4 py-1.5 rounded-md text-sm">
              Post a property ↗
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className="w-auto border-b border-white/40"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        />

        {menuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-md text-white text-sm py-4 px-6 space-y-4">
            <a
              href="#"
              onClick={() => {
                setActiveNav("For buyers");
                setMenuOpen(false); 
              }}
              className={`block px-1 py-2 rounded-md text-sm font-medium transition ${
                activeNav === "For buyers"
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              For buyers
            </a>
            <a href="#" className="block">
              For tenants
            </a>
            <a href="#" className="block">
              For owners
            </a>
            <a href="#" className="block">
              For dealers / builders
            </a>
            <a href="#" className="block">
              Insights
            </a>
            <hr className="border-white/20" />
            <button className="flex items-center hover:text-blue-200">
              <FiUser className="mr-1" />
              Log in
            </button>
            <button className="mt-2 border border-white hover:bg-white hover:text-[#003366] transition-all px-4 py-1.5 rounded-md text-sm w-full">
              Post a property ↗
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
