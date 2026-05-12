import ProductCard, { type Product } from "./ProductCard";

const beautyProducts: Product[] = [
  {
    id: 1,
    emoji: "☀️",
    images: [
      "https://m.media-amazon.com/images/I/6166ORRIHbL._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/51ubxqzNGIL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/610IgxQeWyL._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/712oAAov1ML._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/61KZjEozd3L._SL1280_.jpg",
    ],
    badge: "Amazons Tipp",
    badgeType: "bestseller",
    name: "Nivea Sun Primer 2in1 UV-Serum LSF 50+",
    category: "Sonnenschutz",
    description:
      "Tägliches UV-Serum mit LSF 50+, Hyaluronsäure und Lycocalcon A — schützt vor vorzeitiger Hautalterung und glättet die Haut. Parfümfrei, ideal als Primer unter Make-up.",
    price: "€14,11",
    rating: 4,
    reviews: 173,
    gradient: "linear-gradient(135deg, #F5DCA0 0%, #FCE8C4 100%)",
    href: "https://amzn.to/42N81xY",
  },
  {
    id: 2,
    emoji: "💦",
    images: [
      "https://m.media-amazon.com/images/I/51+S2bui9tL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/619hADFxF7L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61tMuZ2Ct9L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61mriolZQoL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61Bt0PVSUQL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61OJuXhfJWL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/81wIQMgTbWL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61jRvJZDb9L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61RO+wHzkdL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61-FahlciPL._SL1080_.jpg",
    ],
    badge: "Bestseller",
    badgeType: "love",
    name: "d'alba Italian White Truffle First Spray Serum",
    category: "Feuchtigkeitspflege",
    description:
      "Veganes Spray-Serum mit italienischem Weißtrüffel-Extrakt und Vitamin E — sofortiger Feuchtigkeits-Boost und Glashaut-Glow. K-Beauty Kult-Produkt (40 Mio. Flaschen verkauft).",
    price: "€21,99",
    rating: 4,
    reviews: 37836,
    gradient: "linear-gradient(135deg, #E8E4D5 0%, #F5F0E0 100%)",
    href: "https://amzn.to/48GgeaT",
  },
  {
    id: 3,
    emoji: "🧴",
    badge: "Premium Beauty",
    badgeType: "bestseller",
    name: "La Roche-Posay Anthelios UVmune 400 LSF 50+",
    category: "Sonnenschutz",
    description:
      "Mattierendes Sonnenfluid für ölige Haut mit Mexoryl 400 Filter und Airlicium-Technologie. Bis zu 12 Std. mattierender Effekt — auch für sensible Haut geeignet.",
    price: "€22,80",
    rating: 4,
    reviews: 6767,
    gradient: "linear-gradient(135deg, #DCE7F0 0%, #F0F4F8 100%)",
    href: "https://amzn.to/4tTjqbN",
  },
  {
    id: 4,
    emoji: "🌸",
    badge: "Bestseller Nr. 1",
    badgeType: "love",
    name: "Biodance Bio-Collagen Real Deep Mask (4er Pack)",
    category: "Gesichtsmaske",
    description:
      "Tuchmasken mit Oligo-Hyaluronsäure und Kollagen — minimiert Poren, strafft die Haut und spendet tiefe Feuchtigkeit. Wird transparent — ideal für die Übernacht-Pflege.",
    price: "€13,00",
    rating: 4,
    reviews: 35765,
    gradient: "linear-gradient(135deg, #EDD5D8 0%, #F5EDE4 100%)",
    href: "https://amzn.to/4tg0in4",
  },
];

const lifestyleProducts: Product[] = [
  {
    id: 7,
    emoji: "📒",
    images: [
      "https://m.media-amazon.com/images/I/61XRfhFUWUL._SL1499_.jpg",
      "https://m.media-amazon.com/images/I/51stmCFzXnL.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0d862cb3-ca33-47fc-8b4b-e15343f1ab54.__CR0,0,970,600_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cccd292f-ebf7-4331-b2df-f96311a09f24.__CR0,0,970,600_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5e5c565e-626e-4f65-bbe5-bf30519e6cef.__CR0,0,970,600_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1b06cb7f-1c4a-4ba7-97a9-ab758ff75b7c.__CR0,0,970,600_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/bf98c8c3-50bf-4dc7-a8a4-b5f390cf5589.__CR0,0,970,600_PT0_SX970_V1___.png",
    ],
    badge: "5 Sterne",
    badgeType: "love",
    name: "Finanzplaner für junge Erwachsene – Geschenk zum 18. Geburtstag",
    category: "Finanzen & Planung",
    description:
      "12-Monats-Haushaltsbuch speziell für den Start ins Erwachsenenleben — Budget planen, Ausgaben tracken und Geld verstehen mit System. Perfektes Geschenk zum 18. Geburtstag.",
    price: "€13,99",
    rating: 5,
    reviews: 3,
    gradient: "linear-gradient(135deg, #C8DDD4 0%, #E4F0EC 100%)",
    href: "https://amzn.to/4dh9eCD",
  },
  {
    id: 5,
    emoji: "🎙️",
    badge: "Amazons Tipp",
    badgeType: "bestseller",
    name: "DJI Mic Mini (2 Sender, 1 Empfänger, Ladeschale)",
    category: "Content Creation",
    description:
      "Kabelloses Lavalier-Mikrofon — nur 10 g, bis zu 48 Std. Akkulaufzeit, 400 m Reichweite. Ideal für Vlogs, Interviews und Reels. OsmoAudio-Direktverbindung.",
    price: "€79,00",
    rating: 5,
    reviews: 8399,
    gradient: "linear-gradient(135deg, #2C1A1A 0%, #4A3535 100%)",
    href: "https://amzn.to/4d3bYDx",
  },
  {
    id: 6,
    emoji: "📸",
    badge: "Bestseller Nr. 1",
    badgeType: "new",
    name: "DJI Osmo Pocket 4 Kreativ Combo",
    category: "Vlog-Kamera",
    description:
      "Pocket-Gimbal-Kamera mit 1″ CMOS, 4K/240fps Zeitlupe, 3-Achsen-Stabilisierung und ActiveTrack. Kreativ-Combo mit DJI Mic 3, Fülllicht und Weitwinkel-Objektiv.",
    price: "€619,00",
    rating: 4,
    reviews: 42,
    gradient: "linear-gradient(135deg, #3A2D2D 0%, #5C4A3F 100%)",
    href: "https://amzn.to/4d3c3Hl",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ─── Beauty Section ─── */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#EDD5D8", color: "#A86570" }}
          >
            ✦ Beauty Favorites
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Aktuell verliebt in...
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8B7B78" }}>
            Hand-kuratierte Skincare und Beauty-Produkte mit echtem Mehrwert —
            alle persönlich getestet und auf Amazon erhältlich.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {beautyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ─── Lifestyle Section ─── */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#EBD9B4", color: "#8A6A30" }}
          >
            ✧ Lifestyle Essentials
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
          >
            Tools, die mich begleiten
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8B7B78" }}>
            Equipment für Content Creation und meinen kreativen Alltag —
            getestet und für gut befunden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Affiliate disclaimer */}
        <p className="text-center text-xs mt-16" style={{ color: "#8B7B78" }}>
          * Als Amazon-Partnerin verdiene ich an qualifizierten Verkäufen.
          Für dich entstehen keine Mehrkosten.
        </p>
      </div>
    </section>
  );
}
