"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 border-b border-gray-800 shadow-xl backdrop-blur-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black px-4">
        .
        {/* <Link href="/">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer tracking-wider hover:scale-105 transition-transform duration-300 ease-in-out">
          GODFREY <span className="font-normal">NDINGINDWAYO</span>
          </span>
        </Link> */}

        <div className="hidden md:flex space-x-10 text-base font-semibold">
          <Link href="/">
            <span className="relative group cursor-pointer text-gray-200 hover:text-white transition-colors duration-200">
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-400 transition-all group-hover:w-full"></span>
            </span>
          </Link>
          <Link href="/#case-studies">
            <span className="relative group cursor-pointer text-gray-200 hover:text-white transition-colors duration-200">
              Case Studies
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full"></span>
            </span>
          </Link>
          {/* <Link href="/services">
            <span className="relative group cursor-pointer text-gray-200 hover:text-white transition-colors duration-200">
              Services
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all group-hover:w-full"></span>
            </span>
          </Link> */}
          <Link href="/contact">
            <span className="relative group cursor-pointer text-gray-200 hover:text-white transition-colors duration-200">
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all group-hover:w-full"></span>
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-5 px-6 pb-4 bg-gray-950/90 rounded-b-lg shadow-inner animate-fade-in-down">
          <Link href="/">
            <span
              className="block text-gray-200 hover:text-teal-300 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </span>
          </Link>
          <Link href="/case-studies">
            <span
              className="block text-gray-200 hover:text-blue-300 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </span>
          </Link>
          <Link href="/services">
            <span
              className="block text-gray-200 hover:text-purple-300 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </span>
          </Link>
          <Link href="/contact">
            <span
              className="block text-gray-200 hover:text-orange-300 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}