export default function PinterestCTA() {
  return (
    <section className="py-24 px-6" style={{ background: "#F0E6DC" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Pinterest icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
          style={{ background: "linear-gradient(135deg, #C4838A, #E05A6E)" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ background: "white", color: "#C9A96E" }}
        >
          ✦ Tägliche Inspiration
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
        >
          Folge mir auf Pinterest
          <br />
          <span className="gradient-text">für mehr Beauty-Inspo</span>
        </h2>

        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "#8B7B78" }}>
          Täglich neue Beauty-Trends, DIY-Routinen, Produkt-Reviews und
          Lifestyle-Inspiration — alles auf einem Board.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-10">
          {[
            { value: "50K+", label: "Follower" },
            { value: "200+", label: "Pins" },
            { value: "1M+", label: "monatliche Aufrufe" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#C4838A",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: "#8B7B78" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #C4838A 0%, #E05A6E 100%)",
            boxShadow: "0 12px 32px rgba(196, 131, 138, 0.4)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
          Jetzt auf Pinterest folgen
        </a>
      </div>
    </section>
  );
}
