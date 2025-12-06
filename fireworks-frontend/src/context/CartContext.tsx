import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItem, Product, Order } from "@/types";
import { toast } from "@/hooks/use-toast";

interface CartContextType {
  cart: CartItem[];
  orders: Order[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  placeOrder: (customerInfo: {
    name: string;
    phone: string;
    address: string;
    paymentMethod: string;
  }) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("jt-cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("jt-orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jt-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("jt-orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(productId);

    setCart((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getCartCount = () =>
    cart.reduce((count, item) => count + item.quantity, 0);

  /* FIXED PLACE ORDER */
  const placeOrder = (customerInfo: {
    name: string;
    phone: string;
    address: string;
    paymentMethod: string;
  }) => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      customerAddress: customerInfo.address,
      paymentMethod: customerInfo.paymentMethod,
      paymentStatus:
        customerInfo.paymentMethod === "online" ? "unpaid" : "cod",
      items: [...cart],
      total: getCartTotal(),
      status: "pending",
      createdAt: new Date(),
    };

    setOrders((prev) => [newOrder, ...prev]);

    // ⭐ IMPORTANT ⭐
    // Clear ONLY for Cash On Delivery
    if (customerInfo.paymentMethod === "cod") {
      clearCart();
    }

    toast({
      title: "Order Created!",
      description: `Order ${newOrder.id} created successfully.`,
    });
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        placeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
