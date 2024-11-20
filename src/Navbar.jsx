import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">FundsFolio</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/expense"
              className="hover:text-gray-400 transition-colors"
            >
              Add Expense
            </Link>
          </li>
          <li>
            <Link to="/view" className="hover:text-gray-400 transition-colors">
              View Expense
            </Link>
          </li>
        </ul>

        
        <button
          className="block md:hidden text-xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/expense"
                className="hover:text-gray-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Add Expense
              </Link>
            </li>
            <li>
              <Link
                to="/view"
                className="hover:text-gray-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Expense
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
