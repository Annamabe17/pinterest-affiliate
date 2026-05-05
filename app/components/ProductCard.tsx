import ProductImageCarousel from "./ProductImageCarousel";

interface Product {
  id: number;
  emoji: string;
  images?: string[];     // Optional: Array von Amazon CDN Bild-URLs (Karussell)
  badge?: string;
  badgeType?: "bestseller" | "new" | "love";
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  gradient: string;
  href: string;
}

const badgeColors: Record<string, { bg: string; text: string }> = {
  bestseller: { bg: "#EDD5D8", text: "#A86570" },
  new:        { bg: "#EBD9B4", text: "#8A6A30" },
  love:       { bg: "#2C1A1A", text: "#C9A96E" },
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="product-card rounded-3xl overflow-hidden"
      style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
    >
      {/* Image area */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: product.gradient }}
      >
        {product.badge && (
          <span
            className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase"
            style={{
              background: badgeColors[product.badgeType ?? "love"].bg,
              color:      badgeColors[product.badgeType ?? "love"].text,
            }}
          >
            {product.badge}
          </span>
        )}
        {product.images && product.images.length > 0 ? (
          <ProductImageCarousel images={product.images} alt={product.name} />
        ) : (
          <span className="text-6xl">{product.emoji}</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#C9A96E" }}>
          {product.category}
        </div>
        <h3
          className="text-lg font-bold mb-2 leading-snug"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
        >
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B7B78" }}>
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-sm"
                style={{ color: i < Math.floor(product.rating) ? "#C9A96E" : "#EBD9B4" }}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs" style={{ color: "#8B7B78" }}>
            {product.rating} ({product.reviews} Bewertungen)
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs" style={{ color: "#8B7B78" }}>ab</div>
            <div
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#C4838A" }}
            >
              {product.price}
            </div>
          </div>
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ background: "linear-gradient(135deg, #C4838A, #C9A96E)" }}
          >
            Amazon
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export type { Product };
