
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function TermsPage() {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Last updated: May 20, 2025"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">1. Introduction</h2>
          <p>
            These Terms of Service govern your use of the TechBazaar website and the purchase 
            of products through our platform. By accessing our website or placing an order, 
            you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold mb-3">2. Products and Pricing</h2>
          <p>
            All products displayed on our website are subject to availability. We reserve the 
            right to discontinue any product at any time. Prices for products are subject to 
            change without notice. We make every effort to ensure that prices displayed on our 
            website are accurate, but errors may occur.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">3. Orders and Payment</h2>
          <p>
            When you place an order, we will send you an order confirmation email. This email 
            confirms that we have received your order but does not constitute acceptance of your 
            order. We accept payment via credit/debit cards, UPI, and cash on delivery (COD). 
            All payments are processed securely through our payment providers.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">4. Shipping and Delivery</h2>
          <p>
            We aim to deliver products within the timeframes specified on our website. However, 
            delivery times are estimates and not guaranteed. We are not responsible for delays 
            that are beyond our control, such as customs processing or natural disasters.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">5. Returns and Refunds</h2>
          <p>
            You may return products within 30 days of delivery for unopened products and within 
            7 days for defective items. Refunds will be issued to the original payment method 
            within 5-7 business days after we receive the returned product. For detailed 
            information, please refer to our Returns Policy.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">6. Warranties</h2>
          <p>
            All products come with a manufacturer's warranty. TechBazaar does not provide 
            additional warranties unless specified. For warranty claims, please contact our 
            customer support team.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">7. Limitation of Liability</h2>
          <p>
            TechBazaar shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages arising out of or relating to your use of our website or the 
            purchase of products through our platform.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">8. Dispute Resolution</h2>
          <p>
            Any dispute arising from these terms shall be resolved through amicable negotiations. 
            If a resolution cannot be reached, the dispute shall be submitted to the jurisdiction 
            of the courts in Mumbai, India.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
