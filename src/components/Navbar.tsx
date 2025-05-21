
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold text-primary-700">
              PhoneHub
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link to="/phones" className="text-sm font-medium hover:text-primary-600 transition-colors">
            All Phones
          </Link>
          <Link to="/brands" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Brands
          </Link>
          <Link to="/deals" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Deals
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search phones..." 
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm"
            />
          </div>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4 animate-fade-in">
          <div className="flex flex-col space-y-6 py-6">
            <div className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search phones..." 
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <Link 
              to="/" 
              className="text-lg font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/phones" 
              className="text-lg font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              All Phones
            </Link>
            <Link 
              to="/brands" 
              className="text-lg font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
            <Link 
              to="/deals" 
              className="text-lg font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button onClick={() => setIsMenuOpen(false)} className="w-full bg-primary-700 hover:bg-primary-800">
                Close Menu
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
