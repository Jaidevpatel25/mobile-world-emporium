
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about TechBazaar and our mission"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-heading font-bold mb-4">Who We Are</h2>
          <p>
            TechBazaar is India's fastest-growing online phone store, offering genuine devices 
            from Apple, Samsung, Motorola, and more since 2022.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
          <p>
            Democratizing tech with transparent pricing and 24/7 support. We believe everyone 
            deserves access to quality smartphones at fair prices, backed by exceptional 
            customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>100% genuine products with manufacturer warranty</li>
            <li>Best prices with transparent policies</li>
            <li>Fast delivery across India</li>
            <li>Dedicated customer support</li>
            <li>Easy return and replacement policies</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
