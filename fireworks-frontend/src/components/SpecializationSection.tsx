import { Flame, Rocket, Stars, Zap, Sparkle, PartyPopper } from 'lucide-react';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import skyRockets from '@/assets/sky-rockets.jpg';

const SpecializationSection = () => {
  const scrollY = useParallax();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  // 🔹 Mobile = no 3D / no parallax movement
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const specializations = [
    {
      icon: Flame,
      title: 'Ground Spinners',
      description: 'Mesmerizing chakras and wheels that spin with vibrant colors',
      count: '50+',
    },
    {
      icon: Rocket,
      title: 'Sky Rockets',
      description: 'High-flying rockets with spectacular aerial displays',
      count: '80+',
    },
    {
      icon: Stars,
      title: 'Aerial Shells',
      description: 'Professional-grade shells for grand celebrations',
      count: '100+',
    },
    {
      icon: Zap,
      title: 'Sound Crackers',
      description: 'Thunder bombs and loud crackers for festive vibes',
      count: '60+',
    },
    {
      icon: Sparkle,
      title: 'Sparklers',
      description: 'Safe and beautiful sparklers for all ages',
      count: '40+',
    },
    {
      icon: PartyPopper,
      title: 'Combo Packs',
      description: 'Curated family packs for complete celebrations',
      count: '25+',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-muted overflow-hidden relative">
      {/* Parallax Background – only desktop */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: isMobile
            ? 'none'
            : `translateY(${(scrollY - 800) * 0.1}px)`,
        }}
      >
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Our Specializations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Wide Range of Crackers
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 md:mt-6">
            From traditional favorites to modern innovations, we have everything
            to make your celebrations memorable.
          </p>
        </div>

        {/* Featured Image with 3D parallax – static on mobile */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 perspective-1000">
          <div
            className="relative h-56 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform-gpu transition-transform duration-500"
            style={{
              transform: isMobile
                ? 'none'
                : `perspective(1000px) rotateX(${Math.max(
                    -3,
                    Math.min(3, (scrollY - 1000) * 0.005),
                  )}deg)`,
            }}
          >
            <img
              src={skyRockets}
              alt="Sky rockets launching with colorful trails"
              className="w-full h-full object-cover"
              style={{
                transform: isMobile
                  ? 'scale(1.05)'
                  : `scale(1.1) translateY(${(scrollY - 1000) * 0.05}px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-2xl">
                Light Up the Sky
              </h3>
              <p className="font-body text-white/80 mt-1 md:mt-2 text-sm md:text-lg">
                Experience the magic of our premium sky rockets
              </p>
            </div>
          </div>
        </div>

        {/* Specializations Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {specializations.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 bg-background border border-border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${
                gridVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              } ${
                isMobile
                  ? 'shadow-md'
                  : 'hover:shadow-2xl hover:-translate-y-3 transform-gpu'
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
                transform: isMobile
                  ? 'none'
                  : gridVisible
                  ? 'perspective(500px) rotateY(0deg) rotateX(0deg)'
                  : `perspective(500px) rotateY(${
                      (index % 3) - 1
                    }0deg) rotateX(5deg)`,
              }}
            >
              {/* Background glow – subtle on mobile */}
              <div
                className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-12 md:translate-x-16 transition-all duration-700"
                style={{
                  opacity: isMobile ? 0.4 : 1,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-foreground text-background rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="font-display text-2xl md:text-3xl font-bold text-foreground/10 group-hover:text-primary/40 transition-all duration-300">
                    {item.count}
                  </span>
                </div>

                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>

              {/* Hover glow – mainly visible on desktop */}
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
