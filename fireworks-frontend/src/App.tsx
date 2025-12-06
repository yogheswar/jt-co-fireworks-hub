import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/context/CartContext";

// User Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";

const queryClient = new QueryClient();

const App = () => (
  <div className="page-fade-in">
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TooltipProvider>

            


            <BrowserRouter>
              <Routes>

                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="/admin" element={<Login />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<ManageProducts />} />
                <Route path="/admin/products/add" element={<AddProduct />} />
                <Route path="/admin/products/edit/:id" element={<EditProduct />} />

                <Route path="*" element={<NotFound />} />

              </Routes>
            </BrowserRouter>

          </TooltipProvider>
        </CartProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </div>
);

export default App;
