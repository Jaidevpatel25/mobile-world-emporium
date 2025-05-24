
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product, FilterOptions } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Search, Filter, IndianRupee, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';

// Get the max price from products
const maxPrice = Math.max(...products.map(p => p.price));
const minPrice = Math.min(...products.map(p => p.price));

export default function Index() {
  const featuredProducts = products.filter(product => product.featured);
  // Find the Motorola Edge 50 Fusion for new arrival section
  const newArrivalProduct = products.find(product => product.id === "google-pixel-8");
  
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
  
  const handleBrandFilterClick = (brand: string) => {
    setFilters(prev => {
      const newBrands = prev.brands.includes(brand) 
        ? prev.brands.filter(b => b !== brand) 
        : [...prev.brands, brand];
      
      return {
        ...prev,
        brands: newBrands
      };
    });
  };
  
  // Function to get brand slug from name
  const getBrandSlug = (brandName: string): string => {
    return brandName.toLowerCase();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Find Your Perfect Smartphone
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white/90">
                  Browse our collection of premium phones from top brands at the best prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent-600"
                    asChild
                  >
                    <Link to="/phones">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Shop All Phones
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-black hover:bg-white/10"
                    asChild
                  >
                    <Link to="/brands">Shop by Brand</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop" 
                  alt="Smartphone Collection" 
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="font-bold text-primary-700 flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" /> INR Pricing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Arrival Section */}
        {newArrivalProduct && (
          <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="font-heading text-3xl font-bold mb-2">New Arrival</h2>
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-full text-sm">
                      Just Launched
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{newArrivalProduct.brand} {newArrivalProduct.name}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">{newArrivalProduct.description}</p>
                    <div className="flex flex-wrap gap-y-2 gap-x-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium">Display:</span> 
                        <span className="ml-2">{newArrivalProduct.specs.display}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium">Processor:</span> 
                        <span className="ml-2">{newArrivalProduct.specs.processor}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium">Camera:</span> 
                        <span className="ml-2">{newArrivalProduct.specs.camera}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium">Battery:</span> 
                        <span className="ml-2">{newArrivalProduct.specs.battery}</span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-primary-700">
                      ₹{(newArrivalProduct.price).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to={`/product/${newArrivalProduct.id}`}>Shop Now</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/brand/motorola">View All Motorola</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <img 
                      src={newArrivalProduct.image} 
                      alt={`${newArrivalProduct.brand} ${newArrivalProduct.name}`} 
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Brand Quick Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-semibold mb-6 text-center">Popular Brands</h2>
            <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 md:flex-wrap md:justify-center">
              {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Motorola'].map(brand => (
                <Link
                  key={brand}
                  to={`/brand/${getBrandSlug(brand)}`}
                  className={`flex-none px-6 py-3 border rounded-full text-sm font-medium transition-all ${
                    filters.brands.includes(brand) 
                      ? 'brand-filter-active border-primary-700 bg-primary-100' 
                      : 'border-gray-300 hover:border-primary-500'
                  }`}
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-semibold">Featured Phones</h2>
              
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
        
        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-semibold mb-8 text-center">Why Shop With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Free delivery within 48 hours for all orders over ₹25,000.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Warranty Included</h3>
                <p className="text-gray-600">All phones come with manufacturer warranty and our own service guarantee.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Easy Payment</h3>
                <p className="text-gray-600">Multiple payment options including COD, UPI, and card payments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
