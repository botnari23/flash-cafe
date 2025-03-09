"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-100 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-75" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold font-sans flex items-center space-x-2"
        >
          <span className="text-red-600 text-3xl">FLASH</span>
          <span className="text-yellow-500 text-4xl">⚡</span>
          <span className="text-red-600 text-3xl">CAFE</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white space-y-4 py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:text-yellow-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
