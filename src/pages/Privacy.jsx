import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Privacy Policy</h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
        <p className="text-gray-600 dark:text-gray-400"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We collect information you provide directly to us, such as when you create or modify your account, make a purchase, or contact customer support. This includes your name, email, shipping address, and payment details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We use the information we collect to process transactions, fulfill orders, send you notifications, and improve our services to provide a better shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">3. Information Sharing</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We do not sell or rent your personal information to third parties. We only share information with trusted third-party service providers necessary to complete your order (e.g., shipping carriers, payment processors).
          </p>
        </section>
      </div>
    </div>
  );
}
