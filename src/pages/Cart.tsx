import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, placeOrder } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [showCheckout, setShowCheckout] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerInfo.name && customerInfo.phone && customerInfo.address) {
      placeOrder(customerInfo);
      setCustomerInfo({ name: '', phone: '', address: '' });
      setShowCheckout(false);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - JT&Co Crackers</title>
          <meta name="description" content="View your shopping cart at JT&Co Crackers." />
        </Helmet>

        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-20 md:pt-24">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="text-center max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground">Your Cart is Empty</h1>
                <p className="font-body text-muted-foreground mt-4">
                  Looks like you haven't added any crackers yet. Start shopping to fill your cart!
                </p>
                <Link to="/products" className="inline-block mt-8">
                  <Button size="lg">
                    Browse Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Cart (${cart.length} items) - JT&Co Crackers`}</title>
        <meta name="description" content="Review and checkout your cracker order from JT&Co." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0" />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-display text-lg font-bold text-foreground mt-1">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-body w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary / Checkout */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-28">
                  {!showCheckout ? (
                    <>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                        Order Summary
                      </h2>
                      
                      <div className="space-y-3 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between font-body text-sm">
                            <span className="text-muted-foreground truncate pr-2">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="text-foreground">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-border pt-4 mb-6">
                        <div className="flex justify-between">
                          <span className="font-display text-lg font-semibold text-foreground">Total</span>
                          <span className="font-display text-2xl font-bold text-foreground">
                            ₹{getCartTotal()}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)}>
                        Proceed to Checkout
                      </Button>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                        Delivery Details
                      </h2>
                      
                      <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={customerInfo.name}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                            placeholder="Enter your name"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={customerInfo.phone}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                            placeholder="Enter phone number"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea
                            id="address"
                            value={customerInfo.address}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                            placeholder="Enter complete address"
                            rows={3}
                            required
                          />
                        </div>

                        <div className="border-t border-border pt-4">
                          <div className="flex justify-between mb-4">
                            <span className="font-display text-lg font-semibold">Total</span>
                            <span className="font-display text-2xl font-bold">₹{getCartTotal()}</span>
                          </div>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Place Order
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full"
                          onClick={() => setShowCheckout(false)}
                        >
                          Back to Cart
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cart;
