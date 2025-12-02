import { Flame, Rocket, Stars, Zap, Sparkle, PartyPopper } from 'lucide-react';

const SpecializationSection = () => {
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
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="font-display text-3xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {item.count}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
