
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const [brandProducts, setBrandProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  
  // Get brand name with proper capitalization
  const getBrandName = () => {
    if (!brandId) return '';
    
    // For Apple, Samsung, etc. we can just capitalize first letter
    const brandMap: Record<string, string> = {
      'apple': 'Apple',
      'samsung': 'Samsung',
      'oneplus': 'OnePlus',
      'xiaomi': 'Xiaomi',
      'google': 'Google',
      'motorola': 'Motorola',
    };
    
    return brandMap[brandId.toLowerCase()] || brandId;
  };
  
  const brandName = getBrandName();
  
  // Filter products by brand and apply search/sort
  useEffect(() => {
    let filteredProducts = products.filter(product => 
      product.brand.toLowerCase() === brandName.toLowerCase()
    );
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.specs.ram.toLowerCase().includes(query) ||
        product.specs.storage.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For now, just use the default sorting as we don't have date fields
        break;
      case 'featured':
      default:
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
    
    setBrandProducts(filteredProducts);
  }, [brandName, searchQuery, sortOption]);
  
  // Get brand banner image based on brand
  const getBrandBannerImage = () => {
    const brandImages: Record<string, string> = {
      'Apple': 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1780&auto=format&fit=crop',
      'Samsung': 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2071&auto=format&fit=crop',
      'OnePlus': 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2064&auto=format&fit=crop',
      'Xiaomi': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
      'Google': 'https://images.unsplash.com/photo-1699439098260-f797a2c41371?q=80&w=2071&auto=format&fit=crop',
      'Motorola': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1935&auto=format&fit=crop',
    };
    
    return brandImages[brandName] || 'https://images.unsplash.com/photo-1616077168712-fc6141808ba7?q=80&w=2070&auto=format&fit=crop';
  };
  
  // Get brand tagline
  const getBrandTagline = () => {
    const brandTaglines: Record<string, string> = {
      'Apple': 'Think Different',
      'Samsung': 'Do What You Can\'t',
      'OnePlus': 'Never Settle',
      'Xiaomi': 'Innovation for Everyone',
      'Google': 'Made By Google',
      'Motorola': 'Innovation that moves you',
    };
    
    return brandTaglines[brandName] || '';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Brand Banner */}
        <section 
          className="relative bg-gray-900 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${getBrandBannerImage()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {brandName} Smartphones
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {getBrandTagline()}
              {getBrandTagline() && <br />}
              Discover our full range of {brandName} smartphones with the latest features and technology.
            </p>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-semibold">{brandName} Collection</h2>
              
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
            
            {brandProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {brandProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-gray-500 mb-4">No {brandName} products found.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
