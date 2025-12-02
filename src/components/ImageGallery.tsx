import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import groundSpinner from '@/assets/ground-spinner.jpg';
import skyRockets from '@/assets/sky-rockets.jpg';
import sparklers from '@/assets/sparklers.jpg';
import fireworksHero from '@/assets/fireworks-hero.jpg';

const ImageGallery = () => {
  const scrollY = useParallax();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  const images = [
    {
      src: groundSpinner,
      alt: 'Traditional ground spinner chakra with colorful sparks',
      title: 'Ground Spinners',
      subtitle: 'Traditional favorites'
    },
    {
      src: skyRockets,
      alt: 'Sky rockets launching into the night sky',
      title: 'Sky Rockets',
      subtitle: 'Spectacular aerial displays'
    },
    {
      src: sparklers,
      alt: 'Golden sparklers lighting up celebrations',
      title: 'Sparklers',
      subtitle: 'Safe for all ages'
    },
    {
      src: fireworksHero,
      alt: 'Colorful fireworks display',
      title: 'Grand Celebrations',
      subtitle: 'Make memories'
    }
  ];

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

        {/* 3D Scroll Gallery */}
        <div className="relative perspective-1000">
          {/* Main staggered grid with parallax */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => {
              const direction = index % 2 === 0 ? 1 : -1;
              const speed = 0.05 + (index * 0.02);
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ${
                    index === 0 || index === 3 ? 'md:row-span-2 h-64 md:h-full' : 'h-40 md:h-64'
                  } ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transform: galleryVisible 
                      ? `perspective(500px) rotateY(${direction * 3}deg) translateY(${(scrollY - 2000) * speed * direction}px)` 
                      : 'perspective(500px) rotateY(10deg)'
                  }}
                >
                  {/* Image with parallax zoom */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      transform: `scale(1.1) translateY(${(scrollY - 2000) * 0.02}px)` 
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4 transform-gpu transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="font-display text-lg md:text-xl font-bold text-white drop-shadow-lg">
                      {image.title}
                    </h3>
                    <p className="font-body text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.subtitle}
                    </p>
                  </div>

                  {/* 3D shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
                        transform: 'translateX(-100%)',
                        animation: 'shine 1.5s ease-in-out infinite'
                      }}
                    />
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500" />
                </div>
              );
            })}
          </div>

          {/* Floating decoration elements */}
          <div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${(scrollY - 2000) * 0.1}px)` }}
          />
          <div 
            className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${-(scrollY - 2000) * 0.08}px)` }}
          />
        </div>
      </div>

      {/* Add shine keyframe */}
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
