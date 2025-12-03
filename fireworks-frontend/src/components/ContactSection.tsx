import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Find Our Store
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6">
            Visit our showroom in Sivakasi or reach out to us for bulk orders and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Map */}
          <div className="bg-muted rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:h-full min-h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="font-display text-xl font-semibold text-foreground">JT&Co Crackers</p>
                <p className="font-body text-muted-foreground mt-2">
                  123, Cracker Street, Sivakasi<br />
                  Tamil Nadu - 626123
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Store Address</h3>
                <p className="font-body text-muted-foreground mt-1">
                  123, Cracker Street, Near Bus Stand<br />
                  Sivakasi, Virudhunagar District<br />
                  Tamil Nadu - 626123
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
                <p className="font-body text-muted-foreground mt-1">
                  +91 98765 43210<br />
                  +91 04562 234567
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                <p className="font-body text-muted-foreground mt-1">
                  info@jtco-crackers.com<br />
                  orders@jtco-crackers.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Business Hours</h3>
                <div className="font-body text-muted-foreground mt-1 space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                  <p className="text-foreground font-medium mt-2">
                    ✨ Extended hours during Diwali season
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
