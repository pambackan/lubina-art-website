"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Artworks", href: "/#artworks" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#faf8f4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:h-[88px] md:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group relative z-50"
        >
          <span className="block font-serif text-xl tracking-[0.12em] md:text-2xl">
            LUBINA <span className="italic">N</span> SALAM
          </span>
          <span className="mt-1 block text-[9px] tracking-[0.32em] text-[#85745d] md:text-[10px]">
            ARTIST & CREATIVE SOUL
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative py-2 text-sm transition-colors duration-300 ${
                index === 0
                  ? "text-[#85745d]"
                  : "text-[#514d46] hover:text-[#85745d]"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#85745d] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/#contact"
            className="border border-[#29271f] px-5 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#29271f] hover:text-white"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-7 bg-[#29271f] transition-all duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-[#29271f] transition-all duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-black/10 bg-[#faf8f4] transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "visible max-h-[450px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-8 pt-3">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#85745d]">
            Explore
          </p>

          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-black/10 py-4 font-serif text-2xl transition-colors hover:text-[#85745d]"
            >
              <span>{link.label}</span>
              <span className="text-lg text-[#85745d] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          ))}

          <Link
            href="/#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-[#29271f] px-5 py-4 text-sm tracking-wide text-white transition-colors hover:bg-[#514b3e]"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}