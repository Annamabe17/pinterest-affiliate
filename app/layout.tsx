import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Beauty Favorites | Curated Beauty & Lifestyle",
  description:
    "Discover hand-curated beauty & lifestyle products — skincare, makeup, haircare and more. All available on Amazon.",
  keywords: "beauty, skincare, makeup, lifestyle, amazon favorites, affiliate",
  openGraph: {
    title: "Lumina Beauty Favorites",
    description: "Hand-curated beauty & lifestyle products, all on Amazon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
