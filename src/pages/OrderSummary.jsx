import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect, useMemo } from 'react';

export default function OrderSummary() {
  const { clearCart } = useCart();
  const location = useLocation();
  const orderData = location.state?.order;
  const orderId = useMemo(() => Math.floor(Math.random() * 1000000), []);

  // Clear cart upon successful order load. 
  // Normally this happens in checkout action, but doing here for realism.
  useEffect(() => {
    if (orderData) {
      clearCart();
    }
  }, [orderData, clearCart]);

  if (!orderData) {
    return (
      <div className="min-h-screen py-20 flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">No recent orders found.</p>
        <Link to="/" className="text-blue-600 font-bold hover:underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          
          <div className="mx-auto w-24 h-24 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hi {orderData.fullName}, thank you for your purchase. We've received your order and are currently processing it.
          </p>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 text-left mb-8 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-gray-600 pb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Order ID:</span>
              <span className="font-bold text-gray-900 dark:text-white">ORD-{orderId}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Paid:</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{orderData.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center">
              Continue Shopping <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
