import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/useScrollAnimation';
import fireworksHero from '@/assets/fireworks-hero.jpg';

const HeroSection = () => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src={fireworksHero} 
          alt="Colorful Diwali fireworks lighting up the night sky"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-[1] perspective-1000">
        <div 
          className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-full animate-float"
          style={{ 
            transform: `translateZ(50px) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.05}deg)`,
            animationDelay: '0s'
          }} 
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 border border-primary/30 rounded-full animate-float"
          style={{ 
            transform: `translateZ(30px) rotateX(${-scrollY * 0.08}deg)`,
            animationDelay: '1s' 
          }} 
        />
        <div 
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float blur-sm"
          style={{ 
            transform: `translateZ(80px) translateY(${-scrollY * 0.2}px)`,
            animationDelay: '2s' 
          }} 
        />
        <div 
          className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-primary/40 rounded-full animate-float"
          style={{ 
            transform: `translateZ(60px) scale(${1 + scrollY * 0.0005})`,
            animationDelay: '0.5s' 
          }} 
        />
        {/* Sparkle particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Badge with 3D effect */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in transform-gpu hover:scale-105 transition-transform duration-300 shadow-lg"
            style={{ transform: `perspective(500px) rotateX(${Math.min(scrollY * 0.02, 5)}deg)` }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-white">Since 1985 • Sivakasi</span>
          </div>

          {/* Main Heading with 3D text effect */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-slide-up drop-shadow-2xl"
            style={{ 
              textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)',
              transform: `perspective(1000px) rotateX(${Math.min(scrollY * 0.01, 3)}deg)`
            }}
          >
            JT&Co
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-normal text-primary drop-shadow-lg">
              Crackers
            </span>
          </h1>

          {/* Tagline */}
          <p 
            className="font-body text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto animate-slide-up drop-shadow-md" 
            style={{ animationDelay: '0.2s' }}
          >
            Celebrate every moment with Sivakasi's finest quality crackers. 
            Trusted by families for over 38 years.
          </p>

          {/* CTA Buttons with 3D hover effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/products">
              <Button 
                variant="hero" 
                size="xl" 
                className="group transform-gpu hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/30"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#about">
              <Button 
                variant="elegant" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white hover:text-foreground transform-gpu hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Our Story
              </Button>
            </a>
          </div>

          {/* Stats with 3D cards */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 animate-fade-in" 
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { value: '38+', label: 'Years Experience' },
              { value: '500+', label: 'Products' },
              { value: '1M+', label: 'Happy Customers' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group transform-gpu hover:scale-110 transition-all duration-300 cursor-default"
                style={{ 
                  transform: `perspective(500px) rotateY(${(index - 1) * 5}deg)`,
                }}
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-lg">
                  {stat.value}
                </span>
                <p className="font-body text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with glow effect */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm shadow-lg shadow-primary/20">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
