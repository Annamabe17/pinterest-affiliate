const pillars = [
  {
    icon: "🔬",
    title: "Persönlich getestet",
    text: "Ich kaufe und teste alle Produkte selbst, bevor ich sie empfehle. Nur was ich wirklich liebe, kommt auf meine Liste.",
  },
  {
    icon: "⭐",
    title: "Top Amazon-Bewertungen",
    text: "Alle empfohlenen Produkte haben mindestens 4 Sterne und Hunderte von echten Kundenbewertungen.",
  },
  {
    icon: "📦",
    title: "Amazon Prime Eligible",
    text: "Schnelle Lieferung, einfache Rückgabe — alle Produkte sind über Amazon mit Prime-Versand verfügbar.",
  },
  {
    icon: "💰",
    title: "Bestes Preis-Leistungs-Verhältnis",
    text: "Ich suche gezielt nach Produkten, die wirken — ohne dich zu ruinieren. Beauty muss nicht teuer sein.",
  },
];

export default function TrustSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#EDD5D8", color: "#A86570" }}
          >
            ✦ Mein Versprechen
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Warum du mir vertrauen kannst
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8B7B78" }}>
            Meine Empfehlungen sind ehrlich, durchdacht und kommen immer aus eigener Erfahrung.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "linear-gradient(135deg, #EDD5D8, #F0E6DC)" }}
              >
                {p.icon}
              </div>
              <h3
                className="font-bold text-lg mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8B7B78" }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial quote */}
        <div
          className="mt-16 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2C1A1A 0%, #4A2D2D 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
          />
          <div className="text-5xl mb-4" style={{ color: "#C9A96E" }}>"</div>
          <p
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "white",
            }}
          >
            Beauty sollte sich gut anfühlen — innen wie außen. Ich helfe dir,
            Produkte zu finden, die wirklich funktionieren.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ background: "linear-gradient(135deg, #C4838A, #C9A96E)" }}
            >
              ✨
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold" style={{ color: "white" }}>
                Lumina Beauty
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Beauty &amp; Lifestyle Curator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
