export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #EDD5D8 0%, #FDF8F3 55%, #F0E6DC 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #EDD5D8, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #EBD9B4, transparent)" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: "#EDD5D8", color: "#A86570" }}
          >
            <span>✦</span> Beauty &amp; Lifestyle Favorites
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Discover
            <br />
            <span className="gradient-text">Beauty Worth</span>
            <br />
            Loving
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-md" style={{ color: "#8B7B78" }}>
            Hand-kuratierte Beauty &amp; Lifestyle Produkte — von Skincare über
            Makeup bis hin zu Wellness. Alle auf Amazon verfügbar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #C4838A 0%, #C9A96E 100%)",
                boxShadow: "0 8px 24px rgba(196, 131, 138, 0.35)",
              }}
            >
              Shop My Favorites ✨
            </a>
            <a
              href="#categories"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[#EDD5D8]"
              style={{
                border: "2px solid #EDD5D8",
                color: "#C4838A",
              }}
            >
              Kategorien
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {[
              { value: "50+", label: "Kuratierte Produkte" },
              { value: "★ 4.8", label: "Ø Bewertung" },
              { value: "100%", label: "Persönlich getestet" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#C4838A",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#8B7B78" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Floating product cards */}
        <div className="hidden md:block relative h-[520px]">
          {/* Main big card */}
          <div
            className="animate-float absolute top-8 left-12 w-56 rounded-3xl p-4 shadow-xl"
            style={{ background: "#FFFBF8", border: "1px solid #EDD5D8" }}
          >
            <div
              className="w-full h-36 rounded-2xl mb-3 flex items-center justify-center text-5xl"
              style={{ background: "linear-gradient(135deg, #EDD5D8, #F5EDE4)" }}
            >
              🌸
            </div>
            <div className="text-xs font-semibold mb-1" style={{ color: "#C4838A" }}>
              BESTSELLER
            </div>
            <div className="text-sm font-bold mb-1" style={{ color: "#2C1A1A", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Rose Face Serum
            </div>
            <div className="text-xs mb-2" style={{ color: "#8B7B78" }}>
              Intensive Feuchtigkeitspflege
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold" style={{ color: "#C9A96E" }}>
                ab €24,99
              </span>
              <span className="text-xs" style={{ color: "#C4838A" }}>★★★★★</span>
            </div>
          </div>

          {/* Secondary card */}
          <div
            className="absolute top-48 right-4 w-48 rounded-2xl p-3 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #2C1A1A, #4A2D2D)",
              animationDelay: "1s",
            }}
          >
            <div
              className="w-full h-24 rounded-xl mb-2 flex items-center justify-center text-4xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              💄
            </div>
            <div className="text-xs font-semibold mb-0.5" style={{ color: "#C9A96E" }}>
              NEU
            </div>
            <div className="text-sm font-bold" style={{ color: "white", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Velvet Lipstick
            </div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              12 Farben verfügbar
            </div>
          </div>

          {/* Small accent card */}
          <div
            className="absolute bottom-12 left-4 w-44 rounded-2xl p-3 shadow-lg"
            style={{ background: "linear-gradient(135deg, #EBD9B4, #F5EDE4)" }}
          >
            <div className="text-3xl mb-2">✨</div>
            <div className="text-sm font-bold mb-0.5" style={{ color: "#2C1A1A", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Gold Glow Oil
            </div>
            <div className="text-xs" style={{ color: "#8B7B78" }}>
              Body &amp; Face
            </div>
            <div className="mt-2 text-xs font-semibold" style={{ color: "#C9A96E" }}>
              ab €18,90 →
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute top-4 right-8 px-3 py-2 rounded-full text-xs font-bold shadow-md"
            style={{ background: "#C4838A", color: "white" }}
          >
            Amazon Prime ✓
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#8B7B78" }}>
          Scroll
        </span>
        <div
          className="w-0.5 h-8 rounded-full animate-pulse"
          style={{ background: "linear-gradient(to bottom, #C4838A, transparent)" }}
        />
      </div>
    </section>
  );
}
