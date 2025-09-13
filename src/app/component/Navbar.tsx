"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
               <svg className="h-8 w-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              <span className="text-2xl font-bold text-gray-900">VillaVista</span>
            </div>
        {/* Hamburger button shown on small screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-8 items-center md:items-center absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-14 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen
              ? "flex shadow-md rounded-md py-4 md:py-0 px-6 md:px-0"
              : "hidden"
          } md:flex`}
        >
          <li>
            <Link href="/venue" passHref>
              <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0 cursor-pointer">
                Venue
              </span>
            </Link>
          </li>

          <li>
            <Link href="/venue" passHref>
              <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0 cursor-pointer">
                Blog
              </span>
            </Link>
          </li>


          <li>
            <Link href="/occasions" passHref>
              <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0 cursor-pointer">
                Occasions
              </span>
            </Link>
          </li>
          <li>
            <Link href="/faq" passHref>
              <span className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0 cursor-pointer">
                FAQ
              </span>
            </Link>
          </li>
          <li>
            <Link href="/login" passHref>
              <span className="block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-semibold transition-all cursor-pointer">
                Log in
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
