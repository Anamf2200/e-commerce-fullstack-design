import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 px-4 py-3">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-4 md:space-x-6">
          <button
            className="md:hidden flex items-center space-x-1 font-medium hover:text-blue-600 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span>All categories</span>
          </button>

          <div className="hidden md:flex items-center space-x-6 font-medium">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
              <Menu className="w-4 h-4" />
              <span>All category</span>
            </div>
            <a href="#" className="hover:text-blue-600 transition">Hot offers</a>
            <a href="#" className="hover:text-blue-600 transition">Gift boxes</a>
            <a href="#" className="hover:text-blue-600 transition">Projects</a>
            <a href="#" className="hover:text-blue-600 transition">Menu item</a>

            <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
              <span>Help</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
            <span>English, USD</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>

          <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
            <span>Ship to</span>
            <img
              src="https://flagcdn.com/de.svg"
              alt="German Flag"
              className="w-5 h-3 ml-2 border border-gray-300"
            />
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-gray-700 border-t border-gray-200 pt-3">
          <a href="#" className="block hover:text-blue-600 transition">Hot offers</a>
          <a href="#" className="block hover:text-blue-600 transition">Gift boxes</a>
          <a href="#" className="block hover:text-blue-600 transition">Projects</a>
          <a href="#" className="block hover:text-blue-600 transition">Menu item</a>

          <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
            <span>Help</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
              <span>English, USD</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
              <span>Ship to</span>
              <img
                src="https://flagcdn.com/de.svg"
                alt="German Flag"
                className="w-5 h-3 ml-2 border border-gray-300"
              />
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SecondaryNavbar;
