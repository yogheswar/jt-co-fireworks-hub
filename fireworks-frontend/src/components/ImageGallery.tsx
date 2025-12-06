import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import groundSpinner from "@/assets/ground-spinner.jpg";
import skyRockets from "@/assets/sky-rockets.jpg";
import sparklers from "@/assets/sparklers.jpg";
import fireworksHero from "@/assets/fireworks-hero.jpg";

const ImageGallery = () => {
  const scrollY = useParallax();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  const images = [
    { src: groundSpinner, alt: "Ground spinner", title: "Ground Spinners", subtitle: "Traditional favorites" },
    { src: skyRockets, alt: "Sky rockets", title: "Sky Rockets", subtitle: "Spectacular aerial displays" },
    { src: sparklers, alt: "Sparklers", title: "Sparklers", subtitle: "Safe for all ages" },
    { src: fireworksHero, alt: "Fireworks", title: "Grand Celebrations", subtitle: "Make memories" },
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-background overflow-visible">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div
          ref={galleryRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-1000 ${
            galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-medium text-muted-foreground tracking-widest uppercase">
            Gallery
          </span>

          {/* Slightly lifted text */}
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Moments of Joy
          </h2>

          <p className="text-lg text-muted-foreground mt-3">
            Experience the magic of our premium crackers through these stunning visuals
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => {

            const direction = index % 2 === 0 ? 1 : -1;

            // Default movement
            let speed = 0.06 + index * 0.02;
            let offset = (scrollY - 2000) * speed * direction;
            let rotation = direction * 3;

            // ⭐ FIX FOR 2ND CARD (index = 1)
            if (index === 1) {
              speed = 0.055;
              offset = (scrollY - 2000) * speed * direction;

              // Limit movement so text never hides
              offset = Math.max(-53, offset);


              // Remove rotation ONLY for 2nd card
              rotation = 0;
            }

            const transform = isMobile
              ? "none"
              : `perspective(600px) translateY(${offset}px) rotateY(${rotation}deg)`;

            return (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-700 ${
                  galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  height: "260px",
                  transitionDelay: `${index * 130}ms`,
                  transform,
                }}
              >
                {/* Image */}
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Space below */}
        <div className="h-32 md:h-44"></div>
      </div>
    </section>
  );
};

export default ImageGallery;
