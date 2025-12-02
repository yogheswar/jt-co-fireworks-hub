import { Flame, Rocket, Stars, Zap, Sparkle, PartyPopper } from 'lucide-react';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import skyRockets from '@/assets/sky-rockets.jpg';

const SpecializationSection = () => {
  const scrollY = useParallax();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const specializations = [
    {
      icon: Flame,
      title: 'Ground Spinners',
      description: 'Mesmerizing chakras and wheels that spin with vibrant colors',
      count: '50+'
    },
    {
      icon: Rocket,
      title: 'Sky Rockets',
      description: 'High-flying rockets with spectacular aerial displays',
      count: '80+'
    },
    {
      icon: Stars,
      title: 'Aerial Shells',
      description: 'Professional-grade shells for grand celebrations',
      count: '100+'
    },
    {
      icon: Zap,
      title: 'Sound Crackers',
      description: 'Thunder bombs and loud crackers for festive vibes',
      count: '60+'
    },
    {
      icon: Sparkle,
      title: 'Sparklers',
      description: 'Safe and beautiful sparklers for all ages',
      count: '40+'
    },
    {
      icon: PartyPopper,
      title: 'Combo Packs',
      description: 'Curated family packs for complete celebrations',
      count: '25+'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted overflow-hidden relative">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${(scrollY - 800) * 0.1}px)` }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Our Specializations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Wide Range of Crackers
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6">
            From traditional favorites to modern innovations, we have everything 
            to make your celebrations memorable.
          </p>
        </div>

        {/* Featured Image with 3D parallax */}
        <div className="max-w-4xl mx-auto mb-16 perspective-1000">
          <div 
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform-gpu transition-transform duration-500"
            style={{ 
              transform: `perspective(1000px) rotateX(${Math.max(-3, Math.min(3, (scrollY - 1000) * 0.005))}deg)`
            }}
          >
            <img 
              src={skyRockets}
              alt="Sky rockets launching with colorful trails"
              className="w-full h-full object-cover"
              style={{ transform: `scale(1.1) translateY(${(scrollY - 1000) * 0.05}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white drop-shadow-2xl">
                Light Up the Sky
              </h3>
              <p className="font-body text-white/80 mt-2 text-lg">
                Experience the magic of our premium sky rockets
              </p>
            </div>
            {/* Decorative sparkles */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="absolute top-8 right-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-6 right-8 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>

        {/* Specializations Grid with 3D cards */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specializations.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-background border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform-gpu ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: gridVisible 
                  ? `perspective(500px) rotateY(0deg) rotateX(0deg)` 
                  : `perspective(500px) rotateY(${(index % 3 - 1) * 10}deg) rotateX(5deg)`
              }}
            >
              {/* Background Pattern with 3D effect */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-[2] group-hover:bg-primary/20 transition-all duration-700"
                style={{ transform: `translateZ(-20px) scale(${1 + (scrollY - 1200) * 0.0002})` }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="font-display text-3xl font-bold text-foreground/10 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300">
                    {item.count}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground mt-2 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
