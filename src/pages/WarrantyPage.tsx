
import React from 'react';
import PageLayout from '@/components/PageLayout';

export default function WarrantyPage() {
  return (
    <PageLayout 
      title="Warranty Information" 
      description="Understanding the warranty coverage for your smartphone purchase."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Manufacturer Warranty</h2>
          <p className="mb-3">
            All phones purchased from TechBazaar come with the manufacturer's official warranty:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Warranty Period</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What's Covered</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Apple</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Samsung</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions, display issues</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Motorola</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2 years</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions, battery defects</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">OnePlus</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Xiaomi</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Google</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 year</td>
                  <td className="px-6 py-4 text-sm">Manufacturing defects, hardware malfunctions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Extended Warranty Options</h2>
          <p className="mb-3">
            Protect your investment with our extended warranty plans:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>TechBazaar Care (1 year):</strong> Extends manufacturer warranty by an additional year. 
              Cost: 10% of device price.
            </li>
            <li>
              <strong>TechBazaar Care+ (2 years):</strong> Extends manufacturer warranty by two additional years. 
              Cost: 15% of device price.
            </li>
            <li>
              <strong>TechBazaar Complete Protection:</strong> Includes accidental damage, liquid damage, and theft 
              protection for 1 year. Cost: 20% of device price.
            </li>
          </ul>
          <p className="mt-3">
            Extended warranty can be purchased at checkout or within 7 days of device purchase.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">What's Not Covered</h2>
          <p className="mb-3">
            The following are generally excluded from standard manufacturer warranty:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Physical damage (drops, cracks, broken screens)</li>
            <li>Water or liquid damage</li>
            <li>Normal wear and tear</li>
            <li>Damage from unauthorized repairs</li>
            <li>Software issues not related to hardware</li>
            <li>Cosmetic damage that doesn't affect functionality</li>
            <li>Theft or loss of device</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">How to Claim Warranty</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <p><strong>Contact TechBazaar Support:</strong> Reach out to our support team with your order details and issue description.</p>
            </li>
            <li>
              <p><strong>Verification:</strong> Our team will verify your purchase and warranty status.</p>
            </li>
            <li>
              <p><strong>Assessment:</strong> We'll help determine if the issue is covered under warranty.</p>
            </li>
            <li>
              <p><strong>Service Options:</strong> Based on the assessment, we'll provide options for repair, replacement, or service center visit.</p>
            </li>
            <li>
              <p><strong>Resolution:</strong> We'll facilitate the warranty service with the manufacturer or our authorized service partners.</p>
            </li>
          </ol>
        </section>
        
        <section className="bg-primary-50 p-6 rounded-lg">
          <h2 className="text-xl font-heading font-bold mb-3">Service Center Options</h2>
          <p className="mb-3">
            For warranty service, you can choose from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>TechBazaar Service:</strong> Drop off at any of our service centers for facilitated warranty claims.</li>
            <li><strong>Doorstep Pickup:</strong> Available in select cities for devices under warranty.</li>
            <li><strong>Manufacturer Service Centers:</strong> Direct service at brand authorized centers (we'll provide locations).</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> Keep all original packaging, accessories, and proof of purchase for warranty claims.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-bold mb-3">Need Help with Warranty?</h2>
          <p>
            If you need assistance with warranty claims or have questions about coverage, 
            please contact our warranty specialists at <a href="mailto:warranty@techbazaar.in" className="text-primary-600 hover:underline">warranty@techbazaar.in</a> or 
            call our dedicated warranty helpline at <a href="tel:1234567899" className="text-primary-600 hover:underline">1234567899</a>.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
