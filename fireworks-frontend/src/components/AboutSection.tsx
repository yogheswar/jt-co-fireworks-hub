import { Award, Shield, Truck, Heart } from 'lucide-react';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import groundSpinner from '@/assets/ground-spinner.jpg';
import sparklers from '@/assets/sparklers.jpg';

const AboutSection = () => {
  const scrollY = useParallax();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const features = [
    { icon: Award, title: 'Premium Quality', description: 'All our crackers are manufactured with the finest materials, ensuring brilliant colors and effects.' },
    { icon: Shield, title: 'Safety First', description: 'Every product undergoes rigorous safety testing to meet national standards.' },
    { icon: Truck, title: 'Fast Delivery', description: 'Quick and secure delivery across Tamil Nadu with careful packaging.' },
    { icon: Heart, title: 'Family Values', description: 'Three generations of expertise in creating memorable celebrations.' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">A Legacy of Celebrations</h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            Founded in 1985 by Jayaraman Thangavel in the heart of Sivakasi, JT&Co has grown from a small family workshop
            to one of the most trusted names in the fireworks industry. Our commitment to quality and safety has made
            us the preferred choice for millions of families.
          </p>
        </div>

        <div
          ref={imageRef}
          className={`relative mb-20 transition-all duration-1000 delay-200 ${
            imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
            <div
              className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-all duration-500 hover:scale-[1.02]"
              style={{
                transform: `perspective(1000px) rotateY(${Math.max(-5, Math.min(5, (scrollY - 400) * 0.02))}deg) rotateX(${Math.max(-3, Math.min(3, (scrollY - 400) * 0.01))}deg)`
              }}
            >
              <img src={groundSpinner} alt="Ground spinner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">Ground Spinners</h3>
                <p className="font-body text-sm text-white/80 mt-1">Traditional chakras with mesmerizing colors</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/20 to-transparent transition-opacity duration-500" />
            </div>

            <div
              className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-all duration-500 hover:scale-[1.02]"
              style={{
                transform: `perspective(1000px) rotateY(${Math.max(-5, Math.min(5, -(scrollY - 400) * 0.02))}deg) rotateX(${Math.max(-3, Math.min(3, (scrollY - 400) * 0.01))}deg)`
              }}
            >
              <img src={sparklers} alt="Sparklers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">Sparklers</h3>
                <p className="font-body text-sm text-white/80 mt-1">Safe and beautiful for all ages</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/20 to-transparent transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <div
          ref={timelineRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-300 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '1985', title: 'The Beginning', desc: 'Started as a small workshop with just 5 workers' },
              { year: '2000', title: 'Expansion', desc: 'Opened our first retail outlet and expanded production' },
              { year: '2024', title: 'Digital Era', desc: 'Launching online store to serve customers across India' }
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 border border-border rounded-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform-gpu bg-card"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: timelineVisible ? 'perspective(500px) rotateX(0deg)' : 'perspective(500px) rotateX(10deg)'
                }}
              >
                <span className="font-display text-4xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                  {item.year}
                </span>
                <h3 className="font-display text-lg font-semibold mt-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-card border border-border rounded-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform-gpu ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: featuresVisible
                  ? 'perspective(500px) rotateY(0deg)'
                  : `perspective(500px) rotateY(${index % 2 === 0 ? 10 : -10}deg)`
              }}
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="font-body text-muted-foreground mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
