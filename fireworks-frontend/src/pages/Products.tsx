import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import { Search, Flame, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { productApi } from '@/lib/api';
import { Toaster } from "sonner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);

        const uniqueCats = [
          "all",
          ...new Set(data.map((p: any) => p.category?.toLowerCase())),
        ];

        setCategories(uniqueCats);
        setLoading(false);
      } catch (err) {
        console.error("API error:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product: any) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category?.toLowerCase() === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Our Products | JT&Co Crackers</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-hero text-foreground overflow-hidden">
        <Navbar />

        <main className="pt-20">
          {/* HERO SECTION */}
          <section className="relative pt-14 pb-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.25),transparent_70%)]" />

            <div className="absolute inset-0 pointer-events-none">
              <div className="firework firework-1" />
              <div className="firework firework-2" />
              <div className="firework firework-3" />
            </div>

            <div className="relative container mx-auto px-4 text-center animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-white/10 border border-white/20 animate-glow">
                <Flame size={14} /> Sivakasi Fireworks
              </span>

              <h1 className="mt-7 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[hsl(var(--primary))] via-orange-400 to-red-500 bg-clip-text text-transparent">
                Explore Our Crackers
              </h1>

              {/* SEARCH */}
              <div className="max-w-md mx-auto mt-7 relative animate-slide-up">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search crackers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border text-foreground shadow-md focus:border-primary"
                />
              </div>

              {/* CATEGORIES */}
              <div className="flex flex-wrap justify-center gap-3 mt-8 perspective-1000">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "group relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 transform-gpu",
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[hsl(var(--primary))] to-orange-400 text-black scale-110 shadow-glow"
                        : "bg-card/70 border border-border text-foreground hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="opacity-70" />
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* PRODUCTS SECTION */}
          <section className="py-14">
            <div className="container mx-auto px-4 relative">

              {/* ⭐ LOCAL TOASTER INSIDE PRODUCTS BLOCK ⭐ */}
              <Toaster
                position="bottom-right"
                offset={20}
                className="!absolute !right-0 !top-0 z-[9999]"
              />

              {loading ? (
                <p className="text-center text-muted-foreground py-20 animate-pulse">
                  Loading products...
                </p>
              ) : (
                <>
                  <p className="text-muted-foreground mb-8">
                    Showing {filteredProducts.length} products
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {filteredProducts.map((product: any) => (
                      <div
                        key={product._id}
                        className="animate-scale-in hover:-translate-y-8 hover:shadow-[0_40px_120px_hsl(var(--primary)/0.35)] transition-all duration-700"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                      No products found
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Products;
