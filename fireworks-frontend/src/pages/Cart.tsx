import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

/* CART ITEM COMPONENT */
const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => removeFromCart(item._id), 300);
  };

  return (
    <div
      className={
        "flex gap-4 p-4 bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 " +
        (removing ? "cart-item-removing" : "cart-item-animate")
      }
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold">{item.name}</h3>
        <p className="text-muted-foreground text-sm">{item.category}</p>
        <p className="font-display text-lg font-bold mt-1">₹{item.price}</p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRemove}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item._id, item.quantity - 1)}
          >
            <Minus className="w-4 h-4" />
          </Button>

          <span className="font-body w-8 text-center">{item.quantity}</span>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item._id, item.quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart, getCartTotal, placeOrder } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });

  const [showCheckout, setShowCheckout] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerInfo.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    placeOrder(customerInfo);

    setCustomerInfo({ name: "", phone: "", address: "", paymentMethod: "" });
    setShowCheckout(false);
  };

  /* EMPTY CART */
  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - JT&Co Crackers</title>
        </Helmet>

        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-20 md:pt-24">
            <div className="container mx-auto px-4 py-16 text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl font-bold">Your Cart is Empty</h1>

              <Link to="/products">
                <Button size="lg" className="mt-8">
                  Browse Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  /* MAIN CART PAGE */
  return (
    <>
      <Helmet>
        <title>{`Cart (${cart.length} items) - JT&Co Crackers`}</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                  {!showCheckout ? (
                    <>
                      <h2 className="font-display text-xl font-semibold mb-4">
                        Order Summary
                      </h2>

                      {cart.map((item) => (
                        <div key={item._id} className="flex justify-between text-sm mb-2">
                          <span>{item.name} × {item.quantity}</span>
                          <span>₹{item.price * item.quantity}</span>
                        </div>
                      ))}

                      <div className="border-t border-border pt-4 mb-6 flex justify-between">
                        <span className="font-display text-lg font-semibold">Total</span>
                        <span className="font-display text-2xl font-bold">
                          ₹{getCartTotal()}
                        </span>
                      </div>

                      <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)}>
                        Proceed to Checkout
                      </Button>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display text-xl font-semibold mb-4">
                        Delivery Details
                      </h2>

                      <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div>
                          <Label>Full Name</Label>
                          <Input
                            value={customerInfo.name}
                            onChange={(e) =>
                              setCustomerInfo({ ...customerInfo, name: e.target.value })
                            }
                            required
                          />
                        </div>

                        <div>
                          <Label>Phone Number</Label>
                          <Input
                            type="tel"
                            value={customerInfo.phone}
                            onChange={(e) =>
                              setCustomerInfo({ ...customerInfo, phone: e.target.value })
                            }
                            required
                          />
                        </div>

                        <div>
                          <Label>Delivery Address</Label>
                          <Textarea
                            rows={3}
                            value={customerInfo.address}
                            onChange={(e) =>
                              setCustomerInfo({ ...customerInfo, address: e.target.value })
                            }
                            required
                          />
                        </div>

                        {/* PAYMENT METHOD */}
                        <div>
                          <Label className="font-medium">Payment Method</Label>

                          <div className="flex flex-col gap-2 mt-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="payment"
                                value="cod"
                                onChange={() =>
                                  setCustomerInfo({
                                    ...customerInfo,
                                    paymentMethod: "cod",
                                  })
                                }
                                required
                              />
                              Cash on Delivery
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="payment"
                                value="online"
                                onChange={() =>
                                  setCustomerInfo({
                                    ...customerInfo,
                                    paymentMethod: "online",
                                  })
                                }
                                required
                              />
                              Pay Online (UPI / QR)
                            </label>
                          </div>
                        </div>

                        <div className="border-t border-border pt-4 flex justify-between mb-4">
                          <span className="font-display text-lg font-semibold">Total</span>
                          <span className="font-display text-2xl font-bold">
                            ₹{getCartTotal()}
                          </span>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Place Order
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="w-full mt-2"
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
