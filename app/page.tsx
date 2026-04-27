import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import TrustSection from "./components/TrustSection";
import PinterestCTA from "./components/PinterestCTA";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <TrustSection />
      <PinterestCTA />
      <Newsletter />
      <Footer />
    </main>
  );
}
