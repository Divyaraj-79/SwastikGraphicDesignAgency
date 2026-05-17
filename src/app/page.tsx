import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientMarquee from "@/components/ClientMarquee";
import TurnkeySection from "@/components/TurnkeySection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <PortfolioGrid />
      <ClientMarquee />
      <TurnkeySection />
      <Footer />
    </main>
  );
}
