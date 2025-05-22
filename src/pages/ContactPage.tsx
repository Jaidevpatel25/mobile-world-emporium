
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Facebook, Twitter, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageLayout 
      title="Contact Us" 
      description="We're here to help! Reach out to our customer support team."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary-50 p-3 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <a 
              href="mailto:support@techbazaar.in" 
              className="text-primary-600 font-medium hover:underline"
            >
              support@techbazaar.in
            </a>
            <p className="text-gray-500 text-sm mt-2">Response time: Within 24 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary-50 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a 
              href="tel:1234567890" 
              className="text-primary-600 font-medium hover:underline"
            >
              1234567890
            </a>
            <p className="text-gray-500 text-sm mt-2">Available 9AM–9PM, 7 days a week</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary-50 p-3 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help with your queries</p>
            <Button>Start Chat</Button>
            <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              ></textarea>
            </div>
            <div>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Connect with us on social media</h3>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="text-gray-600 hover:text-primary-700">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-700">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-700">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
