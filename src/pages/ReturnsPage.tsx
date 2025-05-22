
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function ReturnsPage() {
  return (
    <PageLayout 
      title="Returns Policy" 
      description="Learn about our customer-friendly return and refund process."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Return Window</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>30-Day Return Policy:</strong> Unopened products can be returned within 30 days of delivery for a full refund.</li>
            <li><strong>7-Day Replacement:</strong> Defective items can be replaced within 7 days of delivery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Return Process</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <p><strong>Initiate a Return:</strong> Log into your account and select the order you wish to return. Choose the items and reason for the return.</p>
            </li>
            <li>
              <p><strong>Return Approval:</strong> Our team will review your return request within 24 hours.</p>
            </li>
            <li>
              <p><strong>Packaging:</strong> Pack the item(s) securely in the original packaging with all accessories and documentation.</p>
            </li>
            <li>
              <p><strong>Pickup Scheduling:</strong> Once approved, we'll arrange a pickup from your address, or you can drop off the package at our partner courier locations.</p>
            </li>
            <li>
              <p><strong>Inspection:</strong> Returned items undergo quality inspection at our warehouse.</p>
            </li>
            <li>
              <p><strong>Refund Processing:</strong> After successful inspection, refunds will be processed within 5-7 business days to the original payment method.</p>
            </li>
          </ol>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Refund Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Original Payment Method:</strong> Refunds are issued to the original payment method used for the purchase.</li>
            <li><strong>Processing Time:</strong> Card refunds take 5-7 business days, UPI refunds take 3-5 business days.</li>
            <li><strong>Shipping Fees:</strong> Original shipping charges are non-refundable unless the return is due to our error.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Non-Returnable Items</h2>
          <p className="mb-3">
            The following items cannot be returned unless they are defective:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Screen protectors or protective films that have been installed</li>
            <li>Software or digital products that have been activated</li>
            <li>Personalized or custom-made products</li>
            <li>Products with tampered IMEI or serial numbers</li>
          </ul>
        </section>
        
        <section className="bg-primary-50 p-6 rounded-lg">
          <h2 className="text-xl font-heading font-bold mb-3">Damaged or Defective Items</h2>
          <p className="mb-3">
            If you receive a damaged or defective item:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact us within 48 hours of delivery</li>
            <li>Provide photos of the damaged item and packaging</li>
            <li>We will arrange for an immediate replacement or refund</li>
            <li>You are not required to return the defective product in some cases (subject to verification)</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> For issues covered under manufacturer warranty after the 7-day replacement 
            window, please refer to our <a href="/warranty" className="text-primary-600 hover:underline">Warranty Page</a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Need Help?</h2>
          <p>
            If you have any questions about returns or need assistance with the process, 
            please contact our customer support team at <a href="mailto:returns@techbazaar.in" className="text-primary-600 hover:underline">returns@techbazaar.in</a> or 
            call us at <a href="tel:1234567890" className="text-primary-600 hover:underline">1234567890</a>.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
