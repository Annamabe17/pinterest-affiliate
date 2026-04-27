export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14 px-6"
      style={{ background: "#2C1A1A", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "white" }}
              >
                Lumina <span style={{ color: "#C4838A" }}>Beauty</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Hand-kuratierte Beauty & Lifestyle Produkte — persönlich getestet
              und mit Liebe ausgewählt.
            </p>
            <div className="flex gap-3">
              {/* Pinterest */}
              <a
                href="https://de.pinterest.com/lumina0404/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)" }}
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#C4838A" }}>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)" }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" style={{ color: "#C9A96E" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: "white" }}>
              Entdecken
            </h4>
            <ul className="space-y-3 text-sm">
              {["Alle Produkte", "Skincare", "Makeup", "Haircare", "Wellness"].map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: "white" }}>
              Info
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Über mich", href: "#about" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "Impressum", href: "/impressum" },
                { label: "Affiliate-Hinweis", href: "/affiliate-hinweis" },
                { label: "Kontakt", href: "mailto:business@lumina-vl.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          <p>© {year} Lumina Beauty. Alle Rechte vorbehalten.</p>
          <p className="text-center max-w-md">
            * Als Amazon-Partnerin verdiene ich an qualifizierten Verkäufen.
            Für dich entstehen keine Mehrkosten.
          </p>
        </div>
      </div>
    </footer>
  );
}
