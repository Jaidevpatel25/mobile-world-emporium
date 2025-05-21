
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Trash2, ShoppingBag, IndianRupee } from 'lucide-react';
import { products } from '@/data/products';

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

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Get related products for upselling (excluding ones already in cart)
  const cartProductIds = cartItems.map(item => item.id);
  const relatedProducts = products
    .filter(product => !cartProductIds.includes(product.id))
    .slice(0, 4);
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="font-heading text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  // Calculate tax amount (8% for example)
  const taxAmount = getCartTotal() * 0.08;
  // Grand total
  const grandTotal = getCartTotal() + taxAmount;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="divide-y">
                  {cartItems.map(item => (
                    <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-24 w-24 object-cover rounded-md" 
                        />
                      </div>
                      
                      <div className="flex-grow sm:flex sm:flex-col">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-heading text-lg font-medium">
                              <Link to={`/product/${item.id}`} className="hover:text-primary-600">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                            <p className="text-sm text-gray-700 mt-1">
                              {item.specs.ram} • {item.specs.storage}
                            </p>
                          </div>
                          
                          <div className="mt-2 sm:mt-0">
                            <span className="font-heading font-bold text-lg flex items-center">
                              <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(item.price).substring(1)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-4 sm:mt-auto">
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 border-x">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <div className="flex items-center mt-4 sm:mt-0">
                            <span className="font-heading font-bold text-lg mr-4 flex items-center">
                              <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(item.price * item.quantity).substring(1)}
                            </span>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-20">
              <div className="p-6">
                <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(getCartTotal()).substring(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-medium flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(taxAmount).substring(1)}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-semibold text-lg">Total</span>
                      <span className="font-heading font-bold text-xl flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(grandTotal).substring(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-accent hover:bg-accent-600">
                  <Link to="/checkout">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Proceed to Checkout
                  </Link>
                </Button>
                
                <div className="mt-4 text-center">
                  <Link to="/phones" className="text-sm text-primary-700 hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-semibold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <Link to={`/product/${product.id}`} className="block">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image object-cover w-full h-40"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-heading text-lg font-medium mb-1 hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                    <div className="flex items-baseline justify-between">
                      <span className="font-heading text-lg font-bold flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" /> {formatIndianPrice(product.price).substring(1)}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => {
                          const { addToCart } = useCart();
                          addToCart(product);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
