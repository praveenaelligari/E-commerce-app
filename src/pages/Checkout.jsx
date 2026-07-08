import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: user ? user.name : '',
    email: user ? user.email : '',
    address: '',
    city: '',
    zip: '',
    card: '',
    exp: '',
    cvv: ''
  });

  const total = getCartTotal();
  const finalTotal = total + (total > 500 ? 0 : 50) + (total * 0.05); // Using INR, 500+ free delivery, 5% tax

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Cart is empty!');
      return navigate('/products');
    }
    
    toast.loading('Processing your order...', { duration: 1500 });
    
    setTimeout(() => {
      navigate('/order-summary', { state: { order: { ...formData, total: finalTotal, method: paymentMethod } } });
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <p className="mb-4 text-xl dark:text-white">Cart is empty</p>
        <Link to="/products" className="text-blue-500 underline font-bold">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={formData.fullName} placeholder="Full Name" className="col-span-1 sm:col-span-2 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" onChange={e => setFormData({...formData, fullName: e.target.value})} />
                <input required value={formData.email} type="email" placeholder="Email Address" className="col-span-1 sm:col-span-2 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="Street Address" className="col-span-1 sm:col-span-2 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" onChange={e => setFormData({...formData, address: e.target.value})} />
                <input required placeholder="City" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" onChange={e => setFormData({...formData, city: e.target.value})} />
                <input required placeholder="PIN Code" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" onChange={e => setFormData({...formData, zip: e.target.value})} />
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Payment Method</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div 
                  onClick={() => setPaymentMethod('card')} 
                  className={`p-4 border rounded-xl cursor-pointer text-center font-bold transition-all ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/30' : 'border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  Credit / Debit Card
                </div>
                <div 
                  onClick={() => setPaymentMethod('upi')} 
                  className={`p-4 border rounded-xl cursor-pointer text-center font-bold transition-all ${paymentMethod === 'upi' ? 'border-purple-500 bg-purple-50 text-purple-600 dark:bg-purple-900/30' : 'border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  PhonePe / UPI
                </div>
                <div 
                  onClick={() => setPaymentMethod('cod')} 
                  className={`p-4 border rounded-xl cursor-pointer text-center font-bold transition-all ${paymentMethod === 'cod' ? 'border-green-500 bg-green-50 text-green-600 dark:bg-green-900/30' : 'border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  Cash on Delivery
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="Card Number" className="col-span-2 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" />
                  <input required placeholder="MM/YY" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" />
                  <input required placeholder="CVV" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" />
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800 text-center">
                  <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">Pay securely using any UPI app like PhonePe, GPay, or Paytm.</p>
                  <input required placeholder="Enter UPI ID (e.g. 9876543210@ybl)" className="w-full max-w-md p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl dark:text-white" />
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 text-center">
                  <p className="text-green-700 dark:text-green-300 font-medium">You can pay via Cash or UPI at the time of delivery.</p>
                </div>
              )}
            </motion.div>
          </form>
        </div>

        <div className="lg:w-[400px]">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl sticky top-24 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4 mb-4 text-gray-600 dark:text-gray-400">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fix</span>
                <span>{total > 500 ? 'Free' : '₹50.00'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (5%)</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4 mb-8">
              <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" form="checkout-form" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
