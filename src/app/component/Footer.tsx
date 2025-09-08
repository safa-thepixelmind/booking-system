"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between text-white gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Link href="/assets/image.png" passHref>
            <Image src="/assets/image.png" alt="FindVillas Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm font-medium text-white text-center md:text-left">
          <li>
            <a href="/venues" className="hover:text-blue-300 transition-colors">
              Venues
            </a>
          </li>
          <li>
            <a href="/Ocassions" className="hover:text-blue-300 transition-colors">
              Ocassions
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-300 transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-blue-300 transition-colors">
              FAQ
            </a>
          </li>
        </ul>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-xs text-center md:text-right">
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 underline"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 underline"
            >
              WhatsApp
            </a>
          </div>
          <span>Email: happybooking@email.com</span>
        </div>
      </div>

      <div className="relative z-10 text-gray-300 text-xs py-2 text-center bg-black bg-opacity-40">
        © 2025 HotelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
