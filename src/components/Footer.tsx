
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">TechBazaar</h3>
            <p className="text-sm text-gray-600 mb-4">
              India's fastest-growing online phone store, offering genuine devices from Apple, Samsung, Motorola, and more since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Shop By Brand</h3>
            <ul className="space-y-2">
              <li><Link to="/brand/apple" className="text-sm text-gray-600 hover:text-primary-700">Apple</Link></li>
              <li><Link to="/brand/samsung" className="text-sm text-gray-600 hover:text-primary-700">Samsung</Link></li>
              <li><Link to="/brand/google" className="text-sm text-gray-600 hover:text-primary-700">Google</Link></li>
              <li><Link to="/brand/oneplus" className="text-sm text-gray-600 hover:text-primary-700">OnePlus</Link></li>
              <li><Link to="/brand/xiaomi" className="text-sm text-gray-600 hover:text-primary-700">Xiaomi</Link></li>
              <li><Link to="/brand/motorola" className="text-sm text-gray-600 hover:text-primary-700">Motorola</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-700 flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary-700 flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  <span>FAQs</span>
                </Link>
              </li>
              <li><Link to="/shipping" className="text-sm text-gray-600 hover:text-primary-700">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-600 hover:text-primary-700">Returns Policy</Link></li>
              <li><Link to="/warranty" className="text-sm text-gray-600 hover:text-primary-700">Warranty</Link></li>
              <li>
                <a href="tel:1234567890" className="text-sm text-gray-600 hover:text-primary-700 flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  <span>1234567890</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary-700">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-primary-700">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-primary-700">Blog</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-700">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary-700">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} TechBazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
