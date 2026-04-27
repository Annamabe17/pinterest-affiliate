const categories = [
  {
    emoji: "🌿",
    name: "Skincare",
    description: "Seren, Cremes & Masken",
    count: "18 Produkte",
    gradient: "linear-gradient(135deg, #D4E8E0, #EDD5D8)",
    href: "#",
  },
  {
    emoji: "💋",
    name: "Makeup",
    description: "Foundation, Lippenstift & mehr",
    count: "12 Produkte",
    gradient: "linear-gradient(135deg, #EDD5D8, #F5EDE4)",
    href: "#",
  },
  {
    emoji: "💇‍♀️",
    name: "Haircare",
    description: "Masken, Öle & Styling",
    count: "9 Produkte",
    gradient: "linear-gradient(135deg, #E8D5E8, #EDD5D8)",
    href: "#",
  },
  {
    emoji: "🌸",
    name: "Fragrance",
    description: "Parfums & Body Mists",
    count: "7 Produkte",
    gradient: "linear-gradient(135deg, #EBD9B4, #EDD5D8)",
    href: "#",
  },
  {
    emoji: "🧘‍♀️",
    name: "Wellness",
    description: "Jade Roller, Baths & mehr",
    count: "11 Produkte",
    gradient: "linear-gradient(135deg, #D5EBE4, #F0E6DC)",
    href: "#",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-24 px-6"
      style={{ background: "#F0E6DC" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "white", color: "#C9A96E" }}
          >
            ✦ Kategorien
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ background: cat.gradient, border: "1px solid rgba(255,255,255,0.6)" }}
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <div
                className="font-bold text-base mb-1"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#2C1A1A",
                }}
              >
                {cat.name}
              </div>
              <div className="text-xs mb-2" style={{ color: "#8B7B78" }}>
                {cat.description}
              </div>
              <div
                className="text-xs font-semibold"
                style={{ color: "#C4838A" }}
              >
                {cat.count}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
