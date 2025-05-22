
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{title}</h1>
            {description && <p className="text-gray-600 mb-8">{description}</p>}
            <div className="prose prose-slate max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
