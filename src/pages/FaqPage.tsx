
import React from 'react';
import PageLayout from '@/components/PageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "After your order is shipped, you will receive an email with a tracking number. You can use this tracking number on our website or the courier's website to track your order status."
    },
    {
      question: "Do you offer EMI options?",
      answer: "Yes, we offer EMI options on most products for purchases above ₹3,000. You can select your preferred bank and EMI tenure at checkout. We support major banks including HDFC, ICICI, SBI, and Axis Bank."
    },
    {
      question: "How long is the Motorola warranty?",
      answer: "All Motorola phones purchased from TechBazaar come with a 2-year manufacturer's warranty. This includes coverage for hardware defects and malfunctions, but does not cover physical damage or water damage."
    },
    {
      question: "Can I cancel my order after placing it?",
      answer: "Yes, you can cancel your order as long as it has not been shipped. To cancel, log into your account and go to the order details page, or contact our customer support team."
    },
    {
      question: "Are the products on TechBazaar genuine?",
      answer: "Yes, all products sold on TechBazaar are 100% genuine with manufacturer warranty. We source our products directly from authorized distributors and offer proper GST invoices with every purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, UPI payments (Google Pay, PhonePe, Paytm), net banking, and cash on delivery (COD) for orders under ₹20,000."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 2-3 business days for metro cities and 5-7 business days for other locations. Exact delivery times will be shown at checkout based on your pincode."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. We plan to expand to international shipping in the future."
    },
    {
      question: "What if I receive a defective product?",
      answer: "If you receive a defective product, please contact our customer support within 7 days of delivery. We will arrange for a replacement or refund based on your preference."
    },
    {
      question: "Do you offer any discounts for students?",
      answer: "Yes, we offer a 5% discount for students with valid student ID. Please contact our customer support team for more details on how to avail this discount."
    }
  ];
  
  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      description="Find answers to common questions about orders, shipping, returns, and more."
    >
      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="pt-2 pb-4">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="bg-primary-50 p-6 rounded-lg mt-8">
          <h2 className="text-lg font-bold mb-3">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer you're looking for, please reach out to our 
            customer support team.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Us
            </a>
            <a 
              href="tel:1234567890" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
