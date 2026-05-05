import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    emoji: "☀️",
    badge: "Amazons Tipp",
    badgeType: "bestseller",
    name: "Nivea Sun Primer 2in1 UV-Serum LSF 50+",
    category: "Sonnenschutz",
    description: "Tägliches UV-Serum mit LSF 50+, Hyaluronsäure und Lycocalcon A — schützt vor vorzeitiger Hautalterung und glättet die Haut. Parfümfrei, ideal als Primer unter Make-up.",
    price: "€14,11",
    rating: 4,
    reviews: 173,
    gradient: "linear-gradient(135deg, #F5DCA0 0%, #FCE8C4 100%)",
    href: "https://amzn.to/42N81xY",
  },
  {
    id: 2,
    emoji: "💦",
    badge: "Amazons Tipp",
    badgeType: "love",
    name: "d'alba Italian White Truffle First Spray Serum",
    category: "Feuchtigkeitspflege",
    description: "Veganes Spray-Serum mit italienischem Weißtrüffel-Extrakt und Vitamin E — sofortiger Feuchtigkeits-Boost und Glashaut-Glow. K-Beauty Bestseller (40 Mio. Flaschen verkauft).",
    price: "€21,99",
    rating: 4,
    reviews: 37836,
    gradient: "linear-gradient(135deg, #E8E4D5 0%, #F5F0E0 100%)",
    href: "https://amzn.to/48GgeaT",
  },
  {
    id: 3,
    emoji: "✨",
    badge: "I Love It",
    badgeType: "love",
    name: "Golden Glow Body Oil",
    category: "Bodycare",
    description: "Luxuriöses Körperöl mit Gold-Schimmer und Arganöl — für strahlende Haut von Kopf bis Fuß.",
    price: "€18,90",
    rating: 4,
    reviews: 982,
    gradient: "linear-gradient(135deg, #EBD9B4 0%, #F5EDE4 100%)",
    href: "#",
  },
  {
    id: 4,
    emoji: "🧴",
    badge: "Bestseller",
    badgeType: "bestseller",
    name: "Retinol Night Cream",
    category: "Skincare",
    description: "Anti-Aging Nachtcreme mit Retinol und Vitamin E — reduziert Fältchen über Nacht.",
    price: "€32,00",
    rating: 5,
    reviews: 4120,
    gradient: "linear-gradient(135deg, #D4E8E0 0%, #F0EDE4 100%)",
    href: "#",
  },
  {
    id: 5,
    emoji: "💆‍♀️",
    badge: "Neu",
    badgeType: "new",
    name: "Jade Gua Sha Set",
    category: "Wellness",
    description: "Jade-Stein Gua Sha + Massageroller Set — für entspannte Haut und den perfekten Morning Routine.",
    price: "€14,99",
    rating: 5,
    reviews: 3056,
    gradient: "linear-gradient(135deg, #D5EBE4 0%, #EDD5D8 100%)",
    href: "#",
  },
  {
    id: 6,
    emoji: "💇‍♀️",
    badge: "I Love It",
    badgeType: "love",
    name: "Silk Repair Hair Mask",
    category: "Haircare",
    description: "Tiefenpflegende Haarmaske mit Keratin und Seidenproteinen — für weiches, glänzendes Haar.",
    price: "€16,50",
    rating: 4,
    reviews: 1789,
    gradient: "linear-gradient(135deg, #E8D5E8 0%, #F5EDE4 100%)",
    href: "#",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#EDD5D8", color: "#A86570" }}
          >
            ✦ Meine Favorites
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Aktuell verliebt in...
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8B7B78" }}>
            Diese Produkte habe ich alle selbst getestet und liebe sie wirklich —
            alle sind auf Amazon erhältlich.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Affiliate disclaimer */}
        <p className="text-center text-xs mt-10" style={{ color: "#8B7B78" }}>
          * Als Amazon-Partnerin verdiene ich an qualifizierten Verkäufen.
          Für dich entstehen keine Mehrkosten.
        </p>
      </div>
    </section>
  );
}
