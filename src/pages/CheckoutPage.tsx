
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/products';

type PaymentMethod = 'cod' | 'upi' | 'card';

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: PaymentMethod;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  upiId?: string;
}

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if we're checking out a single product via Buy Now
  const productId = searchParams.get('productId');
  let checkoutItems = [...cartItems];
  
  if (productId) {
    const buyNowProduct = products.find(p => p.id === productId);
    if (buyNowProduct) {
      checkoutItems = [{ ...buyNowProduct, quantity: 1 }];
    }
  }
  
  const subtotal = productId 
    ? products.find(p => p.id === productId)?.price || 0
    : getCartTotal();
  
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'cod',
  });
  
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formErrors[name as keyof CheckoutFormData]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof CheckoutFormData];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: Partial<Record<keyof CheckoutFormData, string>> = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.zipCode.trim()) errors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber?.trim()) errors.cardNumber = 'Card number is required';
      if (!formData.cardExpiry?.trim()) errors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCvv?.trim()) errors.cardCvv = 'CVV is required';
    }
    
    if (formData.paymentMethod === 'upi') {
      if (!formData.upiId?.trim()) errors.upiId = 'UPI ID is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Successful checkout
      if (!productId) {
        clearCart(); // Only clear cart if not "Buy Now"
      }
      
      // Display success toast
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. You will receive a confirmation soon.",
        duration: 5000,
      });
      
      // Redirect to confirmation page
      navigate('/order-confirmation');
    }, 1500);
  };
  
  if (checkoutItems.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="font-heading text-xl font-semibold mb-4">Delivery Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={formErrors.fullName ? "border-destructive" : ""}
                      />
                      {formErrors.fullName && (
                        <p className="text-destructive text-sm mt-1">{formErrors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? "border-destructive" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-destructive text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={formErrors.phone ? "border-destructive" : ""}
                      />
                      {formErrors.phone && (
                        <p className="text-destructive text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className={formErrors.address ? "border-destructive" : ""}
                      />
                      {formErrors.address && (
                        <p className="text-destructive text-sm mt-1">{formErrors.address}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city}
                        onChange={handleInputChange}
                        className={formErrors.city ? "border-destructive" : ""}
                      />
                      {formErrors.city && (
                        <p className="text-destructive text-sm mt-1">{formErrors.city}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input 
                          id="state" 
                          name="state" 
                          value={formData.state}
                          onChange={handleInputChange}
                          className={formErrors.state ? "border-destructive" : ""}
                        />
                        {formErrors.state && (
                          <p className="text-destructive text-sm mt-1">{formErrors.state}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input 
                          id="zipCode" 
                          name="zipCode" 
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={formErrors.zipCode ? "border-destructive" : ""}
                        />
                        {formErrors.zipCode && (
                          <p className="text-destructive text-sm mt-1">{formErrors.zipCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h2 className="font-heading text-xl font-semibold mb-4">Payment Method</h2>
                  
                  <RadioGroup 
                    defaultValue="cod"
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData(prev => ({ 
                      ...prev, 
                      paymentMethod: value as PaymentMethod 
                    }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-gray-200 rounded flex items-center justify-center text-xs">₹</div>
                        <span>Cash on Delivery</span>
                      </Label>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-2">
                          <div className="h-6 w-6 bg-gray-200 rounded flex items-center justify-center text-xs">U</div>
                          <span>UPI</span>
                        </Label>
                      </div>
                      
                      {formData.paymentMethod === 'upi' && (
                        <div className="ml-8 mt-4">
                          <Label htmlFor="upiId">UPI ID</Label>
                          <Input 
                            id="upiId" 
                            name="upiId" 
                            placeholder="example@upi"
                            value={formData.upiId || ''}
                            onChange={handleInputChange}
                            className={formErrors.upiId ? "border-destructive" : ""}
                          />
                          {formErrors.upiId && (
                            <p className="text-destructive text-sm mt-1">{formErrors.upiId}</p>
                          )}
                          
                          <div className="mt-4">
                            <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                              <div className="bg-gray-100 h-32 w-32 mb-2 flex items-center justify-center">
                                <span className="text-gray-500">QR Code Preview</span>
                              </div>
                              <p className="text-sm text-gray-500">Scan to pay</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2">
                          <div className="h-6 w-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 8v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-2 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2h16z" />
                              <path d="M6 13h12" />
                            </svg>
                          </div>
                          <span>Credit / Debit Card</span>
                        </Label>
                      </div>
                      
                      {formData.paymentMethod === 'card' && (
                        <div className="ml-8 mt-4">
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input 
                                id="cardNumber" 
                                name="cardNumber" 
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber || ''}
                                onChange={handleInputChange}
                                className={formErrors.cardNumber ? "border-destructive" : ""}
                              />
                              {formErrors.cardNumber && (
                                <p className="text-destructive text-sm mt-1">{formErrors.cardNumber}</p>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="cardExpiry">Expiry Date</Label>
                                <Input 
                                  id="cardExpiry" 
                                  name="cardExpiry" 
                                  placeholder="MM/YY"
                                  value={formData.cardExpiry || ''}
                                  onChange={handleInputChange}
                                  className={formErrors.cardExpiry ? "border-destructive" : ""}
                                />
                                {formErrors.cardExpiry && (
                                  <p className="text-destructive text-sm mt-1">{formErrors.cardExpiry}</p>
                                )}
                              </div>
                              
                              <div>
                                <Label htmlFor="cardCvv">CVV</Label>
                                <Input 
                                  id="cardCvv" 
                                  name="cardCvv" 
                                  placeholder="123"
                                  value={formData.cardCvv || ''}
                                  onChange={handleInputChange}
                                  className={formErrors.cardCvv ? "border-destructive" : ""}
                                />
                                {formErrors.cardCvv && (
                                  <p className="text-destructive text-sm mt-1">{formErrors.cardCvv}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-600"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-20">
              <div className="p-6">
                <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="mb-4 max-h-80 overflow-y-auto divide-y">
                  {checkoutItems.map(item => (
                    <div key={item.id} className="py-4 flex items-start gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-16 w-16 object-cover rounded-md flex-shrink-0" 
                      />
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs">{item.specs.ram}, {item.specs.storage}</span>
                          <span className="font-medium">${item.price} × {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-semibold text-lg">Total</span>
                      <span className="font-heading font-bold text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
