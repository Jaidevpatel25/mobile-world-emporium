
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function CareersPage() {
  return (
    <PageLayout 
      title="Careers" 
      description="Join our growing team at TechBazaar"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-heading font-bold mb-4">Join Our Team</h2>
          <p>
            We're looking for passionate individuals to join our mission of making quality 
            technology accessible to everyone in India. As a rapidly growing company, we offer 
            exciting opportunities to learn, grow, and make an impact.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold mb-4">Open Positions</h2>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-2">Ecommerce Manager</h3>
            <p className="text-gray-600 mb-4">Full-time · Mumbai</p>
            <p>
              We're looking for an experienced Ecommerce Manager to oversee our online store 
              operations, optimize conversion rates, and drive growth strategies.
            </p>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-2">Customer Support Specialist</h3>
            <p className="text-gray-600 mb-4">Full-time · Remote (India)</p>
            <p>
              Join our support team to provide exceptional service to our customers via chat, 
              email, and phone. Experience with tech products preferred.
            </p>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-2">Content Writer (Tech)</h3>
            <p className="text-gray-600 mb-4">Part-time · Remote (India)</p>
            <p>
              Create engaging content for our blog, social media, and product pages. 
              Knowledge of smartphone technology and trends required.
            </p>
          </div>
        </section>
        
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Interested in joining us?</h3>
          <p className="mb-4">Send your resume and a brief introduction to careers@techbazaar.in</p>
          <Button className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Contact Recruiting Team</span>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
