"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
      role="dialog"
      aria-label="Cookie-Hinweis"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl"
        style={{
          background: "#2C1A1A",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>
          🍪 Diese Website verwendet ausschließlich technisch notwendige Cookies.
          Durch die weitere Nutzung stimmst du dem zu.{" "}
          <Link
            href="/datenschutz"
            className="underline transition-colors"
            style={{ color: "#C4838A" }}
          >
            Mehr erfahren
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #C4838A, #C9A96E)" }}
        >
          Verstanden ✓
        </button>
      </div>
    </div>
  );
}
