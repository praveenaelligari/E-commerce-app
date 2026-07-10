import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag size={80} className="text-gray-300 dark:text-gray-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Browse our products to find something you'll love!
        </p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex flex-col sm:flex-row items-center gap-6 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-gray-100 dark:bg-gray-700" />
                  
                  <div className="flex-1 text-center sm:text-left">
                    <Link to={`/products/${item.id}`} className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      {item.name}
                    </Link>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.category}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-lg font-bold text-gray-900 dark:text-white w-20 text-right">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-[400px]">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>{total > 500 ? 'Free' : '₹50.00'}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax (Estimated)</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-8">
              <div className="flex justify-between items-center text-lg font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>₹{(total + (total > 500 ? 0 : 50) + (total * 0.05)).toFixed(2)}</span>
              </div>
              {total <= 500 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Add ₹{(500 - total).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group"
            >
              Proceed to Checkout
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

