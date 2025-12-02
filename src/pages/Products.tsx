import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Products - JT&Co Crackers | Shop Fireworks Online</title>
        <meta name="description" content="Browse our wide range of premium crackers, fireworks, sparklers, and celebration packs. Shop online from JT&Co Sivakasi with fast delivery." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 md:pt-24">
          {/* Header */}
          <section className="py-12 md:py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Our Products
                </h1>
                <p className="font-body text-lg text-muted-foreground mt-4">
                  Discover our complete collection of premium quality crackers
                </p>
              </div>

              {/* Search */}
              <div className="max-w-md mx-auto mt-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300",
                      selectedCategory === category
                        ? "bg-foreground text-background"
                        : "bg-background text-foreground border border-border hover:bg-accent"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="font-body text-muted-foreground mb-8">
                    Showing {filteredProducts.length} products
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="font-display text-2xl font-semibold text-foreground">
                    No products found
                  </p>
                  <p className="font-body text-muted-foreground mt-2">
                    Try adjusting your search or filter
                  </p>
                </div>
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
