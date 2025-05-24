
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="relative mb-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
            />
            {product.featured && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                Featured
              </span>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center rounded-lg">
                <span className="text-white font-medium">Out of Stock</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{product.brand}</span>
              {product.oldPrice && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>
            
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.oldPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>RAM:</span>
                <span className="font-medium">{product.specs.ram}</span>
              </div>
              <div className="flex justify-between">
                <span>Storage:</span>
                <span className="font-medium">{product.specs.storage}</span>
              </div>
              <div className="flex justify-between">
                <span>Camera:</span>
                <span className="font-medium">{product.specs.camera}</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full" 
            disabled={!product.inStock}
            onClick={handleAddToCart}
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
