"use client";

import Link from "next/link";
import { useState } from "react";

const AFFILIATE_LINK = "https://polymarket.com?via=israel";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)] border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-[var(--primary)]">
            פולימרקט ישראל
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              בית
            </Link>
            <Link href="/about" className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              אודות
            </Link>
            <Link href="/contact" className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
              צור קשר
            </Link>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary)] text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              התחל לסחור
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בית
              </Link>
              <Link
                href="/about"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>
              <Link
                href="/contact"
                className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Link>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                התחל לסחור
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
