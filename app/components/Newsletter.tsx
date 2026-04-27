"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 px-6">
      <div
        className="max-w-3xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EDD5D8 0%, #EBD9B4 100%)",
        }}
      >
        {/* Decorative */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
          style={{ background: "#C4838A" }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
          style={{ background: "#C9A96E" }}
        />

        <div className="relative">
          <div className="text-4xl mb-4">💌</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Beauty-Insider werden
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#8B7B78" }}>
            Erhalte wöchentlich neue Produkt-Empfehlungen, exklusive Deals und
            Beauty-Tipps direkt in dein Postfach.
          </p>

          {submitted ? (
            <div
              className="flex items-center justify-center gap-2 text-lg font-semibold"
              style={{ color: "#A86570" }}
            >
              <span>✓</span> Danke! Du bist jetzt dabei.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                required
                className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none"
                style={{
                  background: "white",
                  border: "2px solid rgba(196,131,138,0.2)",
                  color: "#2C1A1A",
                }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C4838A, #C9A96E)" }}
              >
                Anmelden ✨
              </button>
            </form>
          )}

          <p className="text-xs mt-4" style={{ color: "#8B7B78" }}>
            Kein Spam. Jederzeit abmeldbar.
          </p>
        </div>
      </div>
    </section>
  );
}
