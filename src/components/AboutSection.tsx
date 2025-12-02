import { Award, Shield, Truck, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'All our crackers are manufactured with the finest materials, ensuring brilliant colors and effects.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every product undergoes rigorous safety testing to meet national standards.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and secure delivery across Tamil Nadu with careful packaging.'
    },
    {
      icon: Heart,
      title: 'Family Values',
      description: 'Three generations of expertise in creating memorable celebrations.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            A Legacy of Celebrations
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            Founded in 1985 by Jayaraman Thangavel in the heart of Sivakasi, JT&Co has grown from 
            a small family workshop to one of the most trusted names in the fireworks industry. 
            Our commitment to quality and safety has made us the preferred choice for millions of families.
          </p>
        </div>

        {/* History Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <span className="font-display text-4xl font-bold text-foreground">1985</span>
              <h3 className="font-display text-lg font-semibold mt-2">The Beginning</h3>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Started as a small workshop with just 5 workers
              </p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <span className="font-display text-4xl font-bold text-foreground">2000</span>
              <h3 className="font-display text-lg font-semibold mt-2">Expansion</h3>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Opened our first retail outlet and expanded production
              </p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
              <span className="font-display text-4xl font-bold text-foreground">2024</span>
              <h3 className="font-display text-lg font-semibold mt-2">Digital Era</h3>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Launching online store to serve customers across India
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 bg-card border border-border rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="font-body text-muted-foreground mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
