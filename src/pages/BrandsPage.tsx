
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Brand } from '@/types/product';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Count products by brand
function getProductCountByBrand() {
  const counts: Record<string, number> = {};
  products.forEach(product => {
    counts[product.brand] = (counts[product.brand] || 0) + 1;
  });
  return counts;
}

export default function BrandsPage() {
  const brandCounts = getProductCountByBrand();
  
  // Brand details with logos, descriptions, and links
  const brandDetails = [
    {
      name: 'Apple',
      slug: 'apple',
      logo: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1780&auto=format&fit=crop',
      description: 'Discover the latest iPhones with cutting-edge features, superior build quality, and the powerful iOS ecosystem.',
      count: brandCounts['Apple'] || 0,
    },
    {
      name: 'Samsung',
      slug: 'samsung',
      logo: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2071&auto=format&fit=crop',
      description: 'Explore Samsung\'s innovative Galaxy lineup with stunning displays, powerful cameras, and advanced features.',
      count: brandCounts['Samsung'] || 0,
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      logo: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2064&auto=format&fit=crop',
      description: 'Experience flagship performance with OnePlus phones, featuring fast charging, smooth displays, and clean OxygenOS.',
      count: brandCounts['OnePlus'] || 0,
    },
    {
      name: 'Xiaomi',
      slug: 'xiaomi',
      logo: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
      description: 'Find value-packed Xiaomi phones with impressive specs, versatile cameras, and the feature-rich MIUI experience.',
      count: brandCounts['Xiaomi'] || 0,
    },
    {
      name: 'Google',
      slug: 'google',
      logo: 'https://images.unsplash.com/photo-1699439098260-f797a2c41371?q=80&w=2071&auto=format&fit=crop',
      description: 'Discover Google Pixel phones with exceptional cameras, pure Android experience, and intelligent features.',
      count: brandCounts['Google'] || 0,
    },
    {
      name: 'Motorola',
      slug: 'motorola',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1935&auto=format&fit=crop',
      description: 'Explore Motorola\'s innovative Edge series with clean Android experience, stunning displays, and long-lasting batteries.',
      count: brandCounts['Motorola'] || 0,
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Browse by Brand
            </h1>
            <p className="text-lg text-white/90">
              Explore our collection of smartphones from top manufacturers.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandDetails.map((brand) => (
                <Link 
                  key={brand.slug} 
                  to={`/brand/${brand.slug}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} smartphones`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white font-heading text-3xl font-bold">{brand.name}</h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{brand.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{brand.count} product{brand.count !== 1 ? 's' : ''}</span>
                        <span className="text-primary-700 font-medium group-hover:underline">View Collection →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
