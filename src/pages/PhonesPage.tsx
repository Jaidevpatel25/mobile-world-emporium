
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product, FilterOptions } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';

// Get the max price from products
const maxPrice = Math.max(...products.map(p => p.price));
const minPrice = Math.min(...products.map(p => p.price));

export default function PhonesPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [filters, setFilters] = useState<FilterOptions>({
    brands: [],
    priceRange: [minPrice, maxPrice],
    ram: [],
    storage: [],
  });
  
  // Filter and sort products based on current filters and sort option
  useEffect(() => {
    let result = [...products];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.specs.ram.toLowerCase().includes(query) ||
        product.specs.storage.toLowerCase().includes(query)
      );
    }
    
    // Apply brand filter
    if (filters.brands.length > 0) {
      result = result.filter(product => filters.brands.includes(product.brand));
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Apply RAM filter
    if (filters.ram.length > 0) {
      result = result.filter(product => filters.ram.includes(product.specs.ram));
    }
    
    // Apply storage filter
    if (filters.storage.length > 0) {
      result = result.filter(product => filters.storage.includes(product.specs.storage));
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For now, just use the default sorting as we don't have date fields
        // In a real app, you would sort by a date field
        break;
      case 'featured':
      default:
        // Featured products first, then rest
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(result);
  }, [searchQuery, filters, sortOption]);
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              All Phones
            </h1>
            <p className="text-lg text-white/90">
              Browse our complete collection of premium smartphones.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-semibold">All Smartphones</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search phones..." 
                    className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="md:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    Filters
                  </Button>
                  
                  <select 
                    className="border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary-500"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Sidebar Filters (Desktop) */}
              <div className="hidden md:block md:col-span-3 lg:col-span-2">
                <FilterSidebar 
                  filters={filters} 
                  onFilterChange={handleFilterChange}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
              </div>
              
              {/* Mobile Filters */}
              {showFilters && (
                <div className="md:hidden col-span-full bg-white shadow-lg rounded-lg p-4 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-heading text-xl font-semibold">Filters</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowFilters(false)}
                    >
                      &times;
                    </Button>
                  </div>
                  <FilterSidebar 
                    filters={filters} 
                    onFilterChange={handleFilterChange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                  />
                </div>
              )}
              
              {/* Products Grid */}
              <div className="col-span-full md:col-span-9 lg:col-span-10">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500 mb-4">No products match your filters.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setFilters({
                          brands: [],
                          priceRange: [minPrice, maxPrice],
                          ram: [],
                          storage: [],
                        });
                        setSearchQuery('');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
