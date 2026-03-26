"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          {/* LOGO */}
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="Orlando Beauty Studio"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="/beauty-school">Beauty School</Link>
            <Link href="/press">Press</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* BOOKING BUTTON */}
          <a
            href="https://www.vagaro.com/juliabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Online Booking
          </a>

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <nav className="mobile-nav">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/gift-cards" onClick={() => setMenuOpen(false)}>
            Gift Cards
          </Link>
          <Link href="/beauty-school" onClick={() => setMenuOpen(false)}>
            Beauty School
          </Link>
          <Link href="/press" onClick={() => setMenuOpen(false)}>
            Press
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <a
          href="https://www.vagaro.com/juliabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-booking"
        >
          Online Booking
        </a>
      </div>
    </>
  );
}
