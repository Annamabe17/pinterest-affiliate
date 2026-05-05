"use client";

import { useState } from "react";

interface Props {
  images: string[];
  alt: string;
}

export default function ProductImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (total === 0) return null;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };
  const goTo = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  };

  return (
    <div className="absolute inset-0 group">
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={alt}
        className="w-full h-full object-contain p-4 transition-opacity duration-200"
        loading="lazy"
      />

      {/* Arrows — only show if more than 1 image */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Vorheriges Bild"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.95)", color: "#2C1A1A" }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Nächstes Bild"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.95)", color: "#2C1A1A" }}
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => goTo(e, i)}
                aria-label={`Bild ${i + 1} von ${total}`}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  background: i === index ? "#2C1A1A" : "rgba(44,26,26,0.3)",
                  transform: i === index ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
