
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function ShippingPage() {
  return (
    <PageLayout 
      title="Shipping Information" 
      description="Everything you need to know about our shipping policies and delivery times."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Delivery Times</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Delivery</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Express Delivery</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2-3 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Next day delivery (order before 2PM)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Other Major Cities</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">3-4 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Rest of India</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">5-7 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">3-4 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Remote Areas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">7-10 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Not available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Shipping Fees</h2>
          <p className="mb-4">
            We offer free standard shipping on all orders above ₹10,000. For orders below this amount, 
            shipping fees are calculated based on your location and the weight of the products.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders below ₹10,000: ₹99 for standard delivery</li>
            <li>Express delivery: Additional ₹199 (available for eligible pincodes)</li>
            <li>Remote areas may incur additional shipping charges</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Tracking Your Order</h2>
          <p>
            Once your order is shipped, you will receive a tracking number via email and SMS. 
            You can use this tracking number to monitor the status of your delivery on our 
            website or directly on the courier partner's website.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Delivery Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All deliveries require signature confirmation</li>
            <li>Please inspect the package at the time of delivery</li>
            <li>In case of any visible damage to the package, please make a note with the delivery person</li>
            <li>Keep the original packaging for at least 30 days after delivery</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-heading font-bold mb-3">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivery times are estimates and may vary due to unforeseen circumstances</li>
            <li>We do not ship on national holidays</li>
            <li>For pre-orders and out-of-stock items, estimated shipping dates will be provided separately</li>
            <li>We currently only ship within India</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
