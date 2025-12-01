"use client";

import { useState } from "react";
import Link from "next/link";
import "./page.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "India", flag: "🇮🇳" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "China", flag: "🇨🇳" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Sweden", flag: "🇸🇪" },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="bg-zinc-900 text-white p-3 flex justify-between items-center fixed w-full top-0 left-0 z-20 px-6 shadow-lg">
        {/* LOGO */}
        <Link href="/" className="text-3xl font-bold font-serif">
          MyAICard
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-xl font-bold">
          <Link href="/doc" className="hover:text-orange-400">Docs</Link>
          <Link href="/features" className="hover:text-orange-400">Features</Link>
          <Link href="/useCase" className="hover:text-orange-400">Use Case</Link>

          <Link href="/contact" className="hover:text-orange-400">
            Contact
          </Link>

          {/* COUNTRY SELECTOR */}
          <select
            className="bg-zinc-900 border border-gray-600 text-white px-2 py-1 rounded-md text-sm cursor-pointer"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name} className="text-white cursor-pointer">
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* DARK OVERLAY WHEN MENU OPEN */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72  bg-zinc-900 text-white z-40 p-6 
        transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 shadow-xl`}
      >
        {/* MENU HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg font-bold">Menu</h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            ✕
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-6 text-lg font-bold">
          <Link href="/doc" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">
            Docs
          </Link>

          <Link href="/features" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">
            Features
          </Link>

          <Link href="/useCase" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">
            Use Case
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">
            Contact
          </Link>
        </div>

        {/* COUNTRY SELECTOR - MOBILE */}
        <div className="mt-10 ">
          <label className="block mb-2 text-sm text-gray-300 ">Select Country</label>

          <select
            className="w-full bg-zinc-800 border border-gray-600 text-white px-3 py-2 rounded-md"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name} className="text-white ">
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
