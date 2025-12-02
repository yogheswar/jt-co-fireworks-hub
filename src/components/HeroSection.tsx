import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="font-body text-sm text-primary-foreground">Since 1985 • Sivakasi</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight animate-slide-up">
            JT&Co
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-normal">
              Crackers
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Celebrate every moment with Sivakasi's finest quality crackers. 
            Trusted by families for over 38 years.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/products">
              <Button variant="hero" size="xl" className="group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#about">
              <Button variant="elegant" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Story
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div>
              <span className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">38+</span>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Years Experience</p>
            </div>
            <div>
              <span className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">500+</span>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Products</p>
            </div>
            <div>
              <span className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">1M+</span>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
