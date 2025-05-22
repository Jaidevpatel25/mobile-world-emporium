
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function PrivacyPage() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Last updated: May 20, 2025"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">1. Introduction</h2>
          <p>
            At TechBazaar, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you 
            visit our website or make a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold mb-3">2. Information We Collect</h2>
          <p className="mb-2">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal information:</strong> Name, email address, phone number, billing address, 
              shipping address, payment information
            </li>
            <li>
              <strong>Usage data:</strong> Information about how you interact with our website, including 
              browsing history, clicks, and other activities
            </li>
            <li>
              <strong>Device information:</strong> IP address, browser type, operating system, and 
              other technical information about your device
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your order or inquiries</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no 
            method of transmission over the Internet is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">5. Your Rights</h2>
          <p className="mb-2">
            Under applicable laws, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            privacy@techbazaar.in.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
