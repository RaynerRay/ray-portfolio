"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-950 text-white px-6 py-4 border-b border-gray-800 shadow-lg backdrop-blur-md font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          Home
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-base font-medium">
          {[
            // { label: "Home", href: "/", color: "teal-400" },
            { label: "Case Studies", href: "/#case-studies", color: "blue-400" },
            { label: "Contact", href: "/contact", color: "orange-400" },
          ].map(({ label, href, color }) => (
            <Link key={label} href={href}>
              <span
                className={`relative group cursor-pointer text-gray-300 hover:text-white transition-colors duration-200`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-${color} transition-all group-hover:w-full`}
                ></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4 bg-gray-950/95 rounded-b-xl shadow-inner animate-fade-in-down">
          {[
            // { label: "Home", href: "/", hover: "hover:text-teal-300" },
            { label: "Case Studies", href: "/#case-studies", hover: "hover:text-blue-300" },
            { label: "Contact", href: "/contact", hover: "hover:text-orange-300" },
          ].map(({ label, href, hover }) => (
            <Link key={label} href={href}>
              <span
                className={`block text-gray-200 ${hover} transition-colors font-medium text-lg py-2`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
