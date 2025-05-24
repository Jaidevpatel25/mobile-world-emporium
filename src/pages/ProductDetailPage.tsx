
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [expandedSections, setExpandedSections] = useState({
    display: false,
    performance: false,
    camera: false,
    battery: false
  });
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <NotFound />;
  }

  // Calculate EMI (simple calculation for demo)
  const emiAmount = Math.round(product.price / 10);
  
  // Mock rating data
  const rating = 4.5;
  const reviewCount = 200;
  
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
    toast({
      title: "Redirecting to checkout",
      description: "Taking you to secure checkout...",
    });
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Enhanced Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={`/brand/${product.brand.toLowerCase()}`}>{product.brand}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Enhanced Image Gallery */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-sm text-gray-500">📱 Swipe for more views</span>
                </div>
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

            {/* Enhanced Product Info */}
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
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name} ({product.colors?.[selectedColor] || 'Default'}, {product.specs.storage})
                </h1>
                
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
                    {rating}/5 ({reviewCount}+ reviews)
                  </span>
                </div>
              </div>

              {/* Enhanced Pricing */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.oldPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  EMI from ₹{emiAmount.toLocaleString('en-IN')}/month | No cost EMI available
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Key Specifications */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📱 Key Specifications</h2>
            
            {/* Display Section */}
            <Card>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleSection('display')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📺</span>
                    <div className="text-left">
                      <h3 className="font-semibold">Display</h3>
                      <p className="text-sm text-gray-600">{product.specs.display || '6.7" pOLED, 144Hz'}</p>
                    </div>
                  </div>
                  {expandedSections.display ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {expandedSections.display && (
                  <div className="px-4 pb-4 border-t bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div><span className="text-gray-600">Size:</span> <span className="font-medium">6.7 inches</span></div>
                      <div><span className="text-gray-600">Type:</span> <span className="font-medium">pOLED</span></div>
                      <div><span className="text-gray-600">Refresh Rate:</span> <span className="font-medium">144Hz</span></div>
                      <div><span className="text-gray-600">Resolution:</span> <span className="font-medium">FHD+</span></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Performance Section */}
            <Card>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleSection('performance')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">⚡</span>
                    <div className="text-left">
                      <h3 className="font-semibold">Performance</h3>
                      <p className="text-sm text-gray-600">{product.specs.processor || 'Snapdragon 7s Gen 2'}, {product.specs.ram}</p>
                    </div>
                  </div>
                  {expandedSections.performance ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {expandedSections.performance && (
                  <div className="px-4 pb-4 border-t bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div><span className="text-gray-600">Chipset:</span> <span className="font-medium">Snapdragon 7s Gen 2</span></div>
                      <div><span className="text-gray-600">RAM:</span> <span className="font-medium">{product.specs.ram}</span></div>
                      <div><span className="text-gray-600">Storage:</span> <span className="font-medium">{product.specs.storage}</span></div>
                      <div><span className="text-gray-600">OS:</span> <span className="font-medium">Android 14</span></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Camera Section */}
            <Card>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleSection('camera')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📸</span>
                    <div className="text-left">
                      <h3 className="font-semibold">Camera</h3>
                      <p className="text-sm text-gray-600">{product.specs.camera} | 32MP front</p>
                    </div>
                  </div>
                  {expandedSections.camera ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {expandedSections.camera && (
                  <div className="px-4 pb-4 border-t bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div><span className="text-gray-600">Main:</span> <span className="font-medium">50MP</span></div>
                      <div><span className="text-gray-600">Ultra-wide:</span> <span className="font-medium">13MP</span></div>
                      <div><span className="text-gray-600">Front:</span> <span className="font-medium">32MP</span></div>
                      <div><span className="text-gray-600">Video:</span> <span className="font-medium">4K@30fps</span></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Battery Section */}
            <Card>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleSection('battery')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🔋</span>
                    <div className="text-left">
                      <h3 className="font-semibold">Battery</h3>
                      <p className="text-sm text-gray-600">{product.specs.battery || '5000mAh'}, 68W charging</p>
                    </div>
                  </div>
                  {expandedSections.battery ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {expandedSections.battery && (
                  <div className="px-4 pb-4 border-t bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div><span className="text-gray-600">Capacity:</span> <span className="font-medium">5000mAh</span></div>
                      <div><span className="text-gray-600">Charging:</span> <span className="font-medium">68W TurboPower</span></div>
                      <div><span className="text-gray-600">Wireless:</span> <span className="font-medium">15W</span></div>
                      <div><span className="text-gray-600">Usage:</span> <span className="font-medium">All-day battery</span></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
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

          {/* Action Buttons - Moved to Bottom */}
          <div className="bg-white border rounded-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex-1 h-12 text-lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button 
                className="flex-1 h-12 text-lg bg-primary-600 hover:bg-primary-700 font-bold"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                🚀 Buy Now
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-4">
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

      {/* Enhanced Fixed Footer Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 h-12"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            className="flex-1 h-12 bg-primary-600 hover:bg-primary-700 font-bold"
            onClick={handleBuyNow}
            disabled={!product.inStock}
          >
            🚀 Buy Now
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
