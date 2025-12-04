import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border w-full">
      <div className="w-full px-4">

        <div className="relative flex items-center justify-between h-12 md:h-20">

          {/* LEFT → LOGO */}
          <Link to="/" className="flex items-center gap-2 z-20">
            <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-foreground" />
            <span className="font-display text-lg md:text-2xl font-bold">
              JT&Co
            </span>
          </Link>

          {/* ⭐ CENTER → PERFECT CENTER MENU on DESKTOP ⭐ */}
          <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">

            <Link
              to="/"
              className={cn(
                "font-body text-sm font-medium hover:text-foreground",
                isActive("/") ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            <a
              href="#about"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </a>

            <Link
              to="/products"
              className={cn(
                "font-body text-sm font-medium hover:text-foreground",
                isActive("/products") ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Products
            </Link>

            <a
              href="#contact"
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </div>

          {/* RIGHT → CART + ADMIN + MOBILE MENU */}
          <div className="flex items-center gap-3 z-20">

            {/* Cart (icon on mobile, icon + label on md+) */}
<Link to="/cart" className="relative flex items-center">
  {/* Mobile: icon-only button */}
  <span className="md:hidden">
    <Button variant="ghost" size="icon" aria-label="Cart">
      <ShoppingCart className="w-5 h-5" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Button>
  </span>

  {/* Desktop: button with icon + "Cart" text */}
  <span className="hidden md:inline-block">
    <Button variant="ghost" className="inline-flex items-center gap-2 px-3 py-1">
      <ShoppingCart className="w-5 h-5" />
      <span className="font-body text-sm">Cart</span>
      {cartCount > 0 && (
        <span className="ml-1 inline-flex items-center justify-center w-5 h-5 bg-foreground text-background text-xs font-bold rounded-full">
          {cartCount}
        </span>
      )}
    </Button>
  </span>
</Link>


            {/* Admin Button */}
            <a
              href="https://jt-co-fireworks-hub-admin.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <Button variant="outline" size="sm">Admin</Button>
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

        {/* ⭐ MOBILE MENU ⭐ */}
        {isOpen && (
          <div className="md:hidden w-full border-t border-border px-4 py-4 bg-background">
            <div className="flex flex-col gap-3">

              <Link to="/" onClick={() => setIsOpen(false)} className="text-base text-foreground">Home</Link>

              <a href="#about" onClick={() => setIsOpen(false)} className="text-base text-foreground">About</a>

              <Link to="/products" onClick={() => setIsOpen(false)} className="text-base text-foreground">Products</Link>

              <a href="#contact" onClick={() => setIsOpen(false)} className="text-base text-foreground">Contact</a>

              <Link to="/cart" onClick={() => setIsOpen(false)} className="text-base text-foreground">Cart</Link>

              <a
                href="https://jt-co-fireworks-hub-3cev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full">
                  Admin Dashboard
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
