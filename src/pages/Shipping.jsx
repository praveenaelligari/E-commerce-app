
export default function Shipping() {
  return (
    <div className="min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Shipping & Returns</h1>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Shipping Policy</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to dispatch all orders within 1-2 business days. Delivery times and shipping costs are calculated at checkout based on your location and selected shipping method.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Standard Shipping: 3-5 business days</li>
            <li>Express Shipping: 1-2 business days</li>
            <li>International Shipping: 7-14 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Return Policy</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            If you are not completely satisfied with your purchase, you may return it within 30 days of receiving the item. Please ensure that items are unworn, unwashed, and in their original packaging.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Once we receive your return, we will process the refund to your original payment method. Please note that return shipping costs are non-refundable unless the item is defective.
          </p>
        </section>
      </div>
    </div>
  );
}

