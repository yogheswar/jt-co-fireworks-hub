import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span className="font-display text-2xl font-bold">JT&Co</span>
            </div>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Sivakasi's finest crackers since 1985. Bringing joy and celebrations to families across Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-background transition-colors font-body text-sm">
                Home
              </Link>
              <Link to="/products" className="text-background/70 hover:text-background transition-colors font-body text-sm">
                Products
              </Link>
              <Link to="/cart" className="text-background/70 hover:text-background transition-colors font-body text-sm">
                Cart
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-background/70 font-body text-sm">
                  123, Cracker Street, Sivakasi, Tamil Nadu - 626123
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-background/70 font-body text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-background/70 font-body text-sm">info@jtco-crackers.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-background/70 font-body text-sm">
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 9:00 PM</p>
                  <p className="mt-2">Sunday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 font-body text-sm">
              © 2024 JT&Co Crackers. All rights reserved.
            </p>
            <p className="text-background/60 font-body text-sm">
              Made with ❤️ in Sivakasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
