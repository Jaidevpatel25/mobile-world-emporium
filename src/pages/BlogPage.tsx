
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "iPhone 15 vs. Motorola Edge 50 Fusion: Best Under ₹30,000?",
      excerpt: "We compare these two popular phones to help you decide which offers the best value for money under ₹30,000.",
      date: "May 15, 2025",
      image: "https://placehold.co/600x400/png",
      slug: "iphone-15-vs-motorola-edge-50"
    },
    {
      title: "5 Features to Look for When Buying a New Smartphone in 2025",
      excerpt: "From battery life to camera quality, here's what you should consider before purchasing your next phone.",
      date: "May 10, 2025",
      image: "https://placehold.co/600x400/png",
      slug: "features-to-look-for-smartphones-2025"
    },
    {
      title: "Understanding Smartphone Processors: A Beginner's Guide",
      excerpt: "Learn the basics of mobile processors and how they affect your phone's performance.",
      date: "May 5, 2025",
      image: "https://placehold.co/600x400/png",
      slug: "understanding-smartphone-processors"
    }
  ];
  
  return (
    <PageLayout 
      title="Blog" 
      description="Tech news, smartphone reviews, and buying guides"
    >
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="border-b pb-8 last:border-none">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="rounded-lg w-full object-cover h-48"
                />
              </div>
              <div className="md:w-2/3">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-xl md:text-2xl font-bold mb-2 mt-1">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-primary-600 font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-4">
          <p className="text-gray-500">
            More articles coming soon! Check back for regular updates.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
