import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const faqs = [
    { question: 'How can I track my order?', answer: 'You can easily track your order status in the "My Orders" section of your user profile. Once shipped, you will receive a tracking link via email.' },
    { question: 'What is your return policy?', answer: 'We offer a hassle-free 30-day return policy. Items must be unused, in their original packaging, and with tags attached.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship globally! Shipping costs and delivery times vary by destination, which will be calculated at checkout.' },
    { question: 'How can I contact customer support?', answer: 'You can reach out to us via the Contact page or use the live chat available during business hours.' },
  ];

  return (
    <div className="min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Got questions? We've got answers.</p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition">Contact Us</Link>
      </div>
    </div>
  );
}
