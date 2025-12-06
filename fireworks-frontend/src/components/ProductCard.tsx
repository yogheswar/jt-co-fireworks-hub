import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from "sonner";

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
                 transition-all duration-700 shadow-lg hover:shadow-2xl h-[480px] flex flex-col"
      style={{
        transform: `perspective(1000px) translateY(${scrollY * 0.01}px)`
      }}
    >
      {/* IMAGE */}
      <div className="h-60 w-full overflow-hidden bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300?text=No+Image";
          }}
        />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="text-muted-foreground text-sm mt-1 line-clamp-2 h-[40px]">
          {product.description || "No description available"}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-primary">
            ₹{product.price}
          </span>
        </div>

        {/* ADD TO CART BUTTON WITH TOAST */}
        <Button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart`);
          }}
          className="w-full mt-auto rounded-xl transition-all hover:scale-[1.03]"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
