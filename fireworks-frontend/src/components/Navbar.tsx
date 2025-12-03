import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-foreground group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
              JT&Co
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* Home */}
            <Link
              to="/"
              className={cn(
                "font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground relative",
                isActive("/") ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-foreground" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* About */}
            <button
              onClick={() => scrollToSection("about")}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            {/* Contact */}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>

            {/* Products */}
            <Link
              to="/products"
              className={cn(
                "font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground relative",
                isActive("/products") ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-foreground" : "text-muted-foreground"
              )}
            >
              Products
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className={cn(
                "font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground relative",
                isActive("/cart") ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-foreground" : "text-muted-foreground"
              )}
            >
              Cart
            </Link>

          </div>

          {/* Cart + Admin */}
          <div className="flex items-center gap-4">

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Admin */}
            <a
              href="https://jt-co-fireworks-hub-ee8w.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">

              {/* Home */}
              <Link to="/" onClick={() => setIsOpen(false)} className="font-body text-base text-muted-foreground hover:text-foreground">
                Home
              </Link>

              {/* About */}
              <button onClick={() => scrollToSection("about")} className="text-left font-body text-base text-muted-foreground hover:text-foreground">
                About
              </button>

              {/* Products */}
              <Link to="/products" onClick={() => setIsOpen(false)} className="font-body text-base text-muted-foreground hover:text-foreground">
                Products
              </Link>

              {/* Contact */}
              <button onClick={() => scrollToSection("contact")} className="text-left font-body text-base text-muted-foreground hover:text-foreground">
                Contact
              </button>

              {/* Cart */}
              <Link to="/cart" onClick={() => setIsOpen(false)} className="font-body text-base text-muted-foreground hover:text-foreground">
                Cart
              </Link>

              {/* Admin */}
              <a
                href="https://jt-co-fireworks-hub-3cev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hidden md:block"
              >
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </a>


            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
