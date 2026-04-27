"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDF8F3]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">✨</span>
          <span
            className="text-xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Lumina <span style={{ color: "#C4838A" }}>Beauty</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#" },
            { label: "Favorites", href: "#products" },
            { label: "Kategorien", href: "#categories" },
            { label: "Über mich", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#8B7B78" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C4838A")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8B7B78")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Pinterest CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://de.pinterest.com/lumina0404/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #C4838A, #C9A96E)",
              color: "white",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            Pinterest folgen
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#2C1A1A" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <div className="w-5 h-0.5 mb-1 bg-current transition-all" />
          <div className="w-5 h-0.5 mb-1 bg-current transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#FDF8F3]/95 backdrop-blur-md">
          <div className="flex flex-col gap-4 pt-2 border-t border-[#EDD5D8]">
            {[
              { label: "Home", href: "#" },
              { label: "Favorites", href: "#products" },
              { label: "Kategorien", href: "#categories" },
              { label: "Über mich", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium py-1"
                style={{ color: "#8B7B78" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://de.pinterest.com/lumina0404/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #C4838A, #C9A96E)",
                color: "white",
              }}
            >
              Pinterest folgen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
