
import React from 'react';
import { Product } from '@/types/product';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, CreditCard, IndianRupee } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

// Function to format price in Indian Rupees format
const formatIndianPrice = (price: number) => {
  // Convert to Indian format (e.g., 1,23,456)
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

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const productSlug = generateSlug(product.name, product.brand);
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      <Link to={`/phones/${productSlug}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image object-cover w-full h-full"
          />
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          <Link to={`/phones/${productSlug}`}>
            <h3 className="font-heading text-lg font-semibold mb-1 hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="space-y-2 mb-4 flex-grow">
          <div className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-16">RAM:</span> 
            <span className="font-medium">{product.specs.ram}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-16">Storage:</span> 
            <span className="font-medium">{product.specs.storage}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-16">Camera:</span> 
            <span className="font-medium">{product.specs.camera}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-baseline mb-4">
            <span className="font-heading text-2xl font-bold text-primary-700 flex items-center">
              <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(product.price).substring(1)}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{formatIndianPrice(product.oldPrice).substring(1)}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
            <Link to={`/phones/${productSlug}`} className="w-full">
              <Button 
                variant="default" 
                size="sm" 
                className="w-full bg-accent hover:bg-accent-600"
              >
                <CreditCard className="h-4 w-4 mr-1" />
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
