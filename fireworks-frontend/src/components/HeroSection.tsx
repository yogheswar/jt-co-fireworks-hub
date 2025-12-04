import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/useScrollAnimation';
import fireworksHero from '@/assets/fireworks-hero.jpg';

const HeroSection = () => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={fireworksHero}
          alt="Colorful fireworks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ✨ Floating Decorations (HIDDEN on mobile) */}
      <div className="hidden md:block absolute inset-0 z-[1] perspective-1000">
        <div
          className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-full animate-float"
          style={{
            transform: `translateZ(50px) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.05}deg)`
          }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 border border-primary/30 rounded-full animate-float"
          style={{
            transform: `translateZ(30px) rotateX(${-scrollY * 0.08}deg)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pt-24">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-white">Since 1985 • Sivakasi</span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            JT&Co
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2 font-normal text-primary">
              Crackers
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-base sm:text-lg text-white/90 mt-5 max-w-xl mx-auto drop-shadow-md">
            Celebrate every moment with Sivakasi's finest quality crackers.
            Trusted by families for over 38 years.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/products">
              <Button
                variant="hero"
                size="lg"
                className="group shadow-xl hover:shadow-primary/30 transition-all"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a href="#about">
              <Button
                variant="elegant"
                size="lg"
                className="text-white border-white/40 hover:bg-white hover:text-black"
              >
                Our Story
              </Button>
            </a>
          </div>

          {/* Stats (STACK on mobile, 3-col on desktop) */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-6 border-t border-white/20">
            {[
              { value: '38+', label: 'Years' },
              { value: '500+', label: 'Products' },
              { value: '1M+', label: 'Customers' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
