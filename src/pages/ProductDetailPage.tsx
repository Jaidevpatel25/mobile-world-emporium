
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from "@/hooks/use-toast";
import { 
  ShoppingCart, 
  CreditCard, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw,
  IndianRupee
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Function to format price in Indian Rupees format
const formatIndianPrice = (price: number) => {
  const priceString = price.toString();
  const lastThree = priceString.substring(priceString.length - 3);
  const otherNumbers = priceString.substring(0, priceString.length - 3);
  const formattedPrice = otherNumbers !== '' 
    ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree 
    : lastThree;
  
  return `₹${formattedPrice}`;
};

// Generate product slug from name
const generateSlug = (name: string, brand: string) => {
  return `${brand.toLowerCase()}-${name.toLowerCase()}`
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

export default function ProductDetailPage() {
  const { modelName } = useParams<{ modelName: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  useEffect(() => {
    // Find product by matching the slug
    const foundProduct = products.find(p => 
      generateSlug(p.name, p.brand) === modelName
    );
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || '');
      setSelectedStorage(foundProduct.storageOptions?.[0] || '');
    }
  }, [modelName]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/phones" className="text-primary-600 hover:underline">
            Browse all phones
          </Link>
        </div>
      </div>
    );
  }

  // Mock image gallery (in a real app, you'd have multiple images)
  const imageGallery = [
    product.image,
    product.image1, // You'd have different angles here
    product.image2,
  ];

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const handleBuyNow = () => {
    addToCart(product);
    window.location.href = '/checkout';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative pb-20">
      {/* Header with Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
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

      {/* Top Section - Image Gallery & Product Info (60% of screen) */}
      <div className="bg-white" style={{ minHeight: '60vh' }}>
        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto bg-gray-100 relative overflow-hidden">
            <img 
              src={imageGallery[currentImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* 360° View Button (for flagships) */}
            {product.featured && (
              <button className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-white">
                <RotateCcw className="h-4 w-4" />
                360° View
              </button>
            )}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imageGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 py-6">
          <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">
            📱 {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.5</span>
              <span className="text-gray-500">(320 reviews)</span>
            </div>
            <span className="text-sm text-gray-600">92% Recommended</span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-primary-700 flex items-center">
                <IndianRupee className="h-6 w-6 mr-1" />
                {formatIndianPrice(product.price).substring(1)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{formatIndianPrice(product.oldPrice).substring(1)}
                </span>
              )}
            </div>
            
            {/* Storage Options */}
            {product.storageOptions && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Storage:</p>
                <div className="flex gap-2">
                  {product.storageOptions.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        selectedStorage === storage
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Options */}
            {product.colors && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Colors:</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        selectedColor === color
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      🎨 {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Section - Scrollable Content */}
      <div className="bg-white mt-2 px-4 py-6">
        {/* Specifications */}
        <div className="mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">📋 Specifications</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Display:</span>
              <span className="text-gray-900">{product.specs.display || '6.7" pOLED, 144Hz'}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Processor:</span>
              <span className="text-gray-900">{product.specs.processor || 'Snapdragon 7s Gen 2'}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">RAM:</span>
              <span className="text-gray-900">{product.specs.ram}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Storage:</span>
              <span className="text-gray-900">{product.specs.storage}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Camera:</span>
              <span className="text-gray-900">{product.specs.camera}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Battery:</span>
              <span className="text-gray-900">{product.specs.battery || '5000mAh (68W charging)'}</span>
            </div>
          </div>
        </div>

        {/* In the Box */}
        <div className="mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">📦 In the Box</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Phone, Charger, USB-C Cable</li>
            <li>• SIM Tool, Protective Case</li>
            <li>• Quick Start Guide & Warranty Card</li>
          </ul>
        </div>

        {/* Warranty */}
        <div className="mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">🔄 12-Month Replacement Warranty</h2>
          <p className="text-gray-700">
            Complete protection against manufacturing defects. Free pickup and delivery service available across India.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 z-50 shadow-lg">
        <Button 
          variant="outline" 
          size="lg"
          className="flex-1 py-3 text-base font-medium border-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          🛒 Add to Cart
        </Button>
        <Button 
          size="lg"
          className="flex-1 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700"
          onClick={handleBuyNow}
        >
          <CreditCard className="h-5 w-5 mr-2" />
          🚀 Buy Now
        </Button>
      </div>
    </div>
  );
}
