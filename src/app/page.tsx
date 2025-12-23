import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import TechStackSection from '@/components/sections/tech-stack-section';
import LatestWorksSection from '@/components/sections/latest-works-section';
import FaqSection from '@/components/sections/faq-section';
import ContactSection from '@/components/sections/contact-section';
import FAB from '@/components/fab';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <LatestWorksSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FAB />
    </div>
  );
}
