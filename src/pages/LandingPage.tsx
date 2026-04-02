import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowToUse from '../components/landing/HowToUse';
import Platforms from '../components/landing/Platforms';
import Pricing from '../components/landing/Pricing';
import MobileApp from '../components/landing/MobileApp';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowToUse />
      <Platforms />
      <Pricing />
      <MobileApp />
      <CTA />
      <Footer />
    </div>
  );
}
