import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import groundSpinner from '@/assets/ground-spinner.jpg';
import skyRockets from '@/assets/sky-rockets.jpg';
import sparklers from '@/assets/sparklers.jpg';
import fireworksHero from '@/assets/fireworks-hero.jpg';

const ImageGallery = () => {
  const scrollY = useParallax();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  const images = [
    { src: groundSpinner, alt: 'Traditional ground spinner chakra with colorful sparks', title: 'Ground Spinners', subtitle: 'Traditional favorites' },
    { src: skyRockets, alt: 'Sky rockets launching into the night sky', title: 'Sky Rockets', subtitle: 'Spectacular aerial displays' },
    { src: sparklers, alt: 'Golden sparklers lighting up celebrations', title: 'Sparklers', subtitle: 'Safe for all ages' },
    { src: fireworksHero, alt: 'Colorful fireworks display', title: 'Grand Celebrations', subtitle: 'Make memories' }
  ];

  const isMobile = window.innerWidth < 768; // mobile check

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div
          ref={galleryRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Moments of Joy
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6">
            Experience the magic of our premium crackers through these stunning visuals
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative perspective-1000">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[280px] gap-4 md:gap-6">


            {images.map((image, index) => {
              const direction = index % 2 === 0 ? 1 : -1;
              const speed = 0.05 + index * 0.02;
              const baseOffset = index === 1 ? 47 : 0;

              // STATIC MOBILE CARDS — NO ANIMATION
              const mobileTransform = 'none';

              // DESKTOP 3D PARALLAX (original code)
              const desktopTransform = galleryVisible
                ? `perspective(500px) rotateY(${direction * 3}deg) translateY(${baseOffset + (scrollY - 2000) * speed * direction}px)`
                : `perspective(500px) rotateY(10deg) translateY(${baseOffset}px)`;

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700
                    h-40 sm:h-48 md:h-64
                    ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                    transform: isMobile ? mobileTransform : desktopTransform
                  }}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      transform: isMobile
                        ? 'none'
                        : `scale(1.1) translateY(${(scrollY - 2000) * 0.02}px)`
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Text */}
                  <div className="absolute bottom-4 left-4 right-4 transition-all duration-500">
                    <h3 className="font-display text-lg md:text-xl font-bold text-white drop-shadow-lg">
                      {image.title}
                    </h3>
                    <p className="font-body text-sm text-white/80 mt-1">
                      {image.subtitle}
                    </p>
                  </div>

                  {/* Shine Effect (Desktop Only) */}
                  {!isMobile && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
                          transform: 'translateX(-100%)',
                          animation: 'shine 1.5s ease-in-out infinite'
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Floating Decorations (Desktop Only) */}
          {!isMobile && (
            <>
              <div
                className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                style={{ transform: `translateY(${(scrollY - 2000) * 0.1}px)` }}
              />
              <div
                className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                style={{ transform: `translateY(${-(scrollY - 2000) * 0.08}px)` }}
              />
            </>
          )}

        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
