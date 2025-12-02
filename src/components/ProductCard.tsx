import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Package } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Package className="w-16 h-16 text-muted-foreground/30" />
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-foreground text-background text-xs font-body font-medium px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold line-clamp-1 group-hover:text-foreground transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground font-body text-sm line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-xl font-bold">₹{product.price}</span>
            <span className="text-muted-foreground font-body text-xs ml-2">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
        </div>
        
        <Button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="w-full"
          variant="default"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
