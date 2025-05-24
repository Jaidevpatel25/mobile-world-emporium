
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import NotFound from './NotFound';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedColor, setSelectedColor] = useState(0);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <NotFound />;
  }

  // Calculate EMI (simple calculation for demo)
  const emiAmount = Math.round(product.price / 10);
  
  // Mock rating data
  const rating = 4.6;
  const reviewCount = 320;
  
  // Get related products from same brand
  const relatedProducts = products
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product);
    // Navigate to checkout would go here
    toast({
      title: "Redirecting to checkout",
      description: "Taking you to secure checkout...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/phones" className="hover:text-primary-600">Phones</Link>
              <span className="mx-2">/</span>
              <Link to={`/brand/${product.brand.toLowerCase()}`} className="hover:text-primary-600">{product.brand}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
              
              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold">Available Colors:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(index)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                          selectedColor === index 
                            ? 'border-primary-500 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {product.brand}
                  </span>
                  {product.featured && (
                    <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {rating} ({reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.oldPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  EMI from ₹{emiAmount.toLocaleString('en-IN')}/month
                </p>
              </div>

              {/* Key Features */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">📱 Key Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Display:</span>
                      <span className="font-medium">{product.specs.display || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processor:</span>
                      <span className="font-medium">{product.specs.processor || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">RAM:</span>
                      <span className="font-medium">{product.specs.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage:</span>
                      <span className="font-medium">{product.specs.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Camera:</span>
                      <span className="font-medium">{product.specs.camera}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Battery:</span>
                      <span className="font-medium">{product.specs.battery || 'N/A'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Highlights */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Truck className="h-6 w-6 text-primary-600" />
                  <span className="text-xs text-gray-600">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="h-6 w-6 text-primary-600" />
                  <span className="text-xs text-gray-600">1 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <RotateCcw className="h-6 w-6 text-primary-600" />
                  <span className="text-xs text-gray-600">7 Day Return</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1 bg-primary-600 hover:bg-primary-700"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          {product.description && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About this product</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">More from {product.brand}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Fixed Footer Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            className="flex-1 bg-primary-600 hover:bg-primary-700"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
