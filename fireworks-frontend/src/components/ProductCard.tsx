import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="group relative bg-card border border-border rounded-2xl overflow-hidden
                 transition-all duration-700 shadow-lg hover:shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateY(4deg) translateY(${scrollY * 0.01}px)`
      }}
    >
      {/* IMAGE AREA */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-16 h-16 text-muted-foreground/30" />
        </div>

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ₹{product.price}
          </span>
          <span className="text-xs text-muted-foreground">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        <Button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="w-full rounded-xl transition-all hover:scale-[1.03]"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
