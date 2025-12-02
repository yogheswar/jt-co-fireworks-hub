import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpecializationSection from '@/components/SpecializationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JT&Co Crackers - Premium Quality Crackers from Sivakasi</title>
        <meta name="description" content="Shop premium quality crackers from JT&Co, Sivakasi's finest since 1985. Wide range of fireworks, sparklers, and celebration packs for Diwali and special occasions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SpecializationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
