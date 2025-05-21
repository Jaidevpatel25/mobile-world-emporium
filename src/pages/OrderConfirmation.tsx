
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, MapPin, Truck } from 'lucide-react';

export default function OrderConfirmation() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            
            <h1 className="font-heading text-3xl font-bold mb-2">Order Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="font-heading text-lg font-semibold">Order Number</h2>
                <p className="text-2xl font-bold text-primary-700 mt-1">{orderNumber}</p>
                <p className="text-sm text-gray-500 mt-1">Please keep this number for your reference</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Package className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="font-heading font-semibold">Order Processing</h3>
                  <p className="text-sm text-gray-500 mt-1">We're preparing your order</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="font-heading font-semibold">Delivery Address</h3>
                  <p className="text-sm text-gray-500 mt-1">Your shipping address</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Truck className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="font-heading font-semibold">Est. Delivery</h3>
                  <p className="text-sm text-gray-500 mt-1">Within 3-5 business days</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
              <div className="text-sm text-gray-500">
                <p>Have a question about your order?</p>
                <Link to="/contact" className="text-primary-700 hover:underline">Contact our support team</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
