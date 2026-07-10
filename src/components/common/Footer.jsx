import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black flex items-center gap-0.5 mb-4">
              <span className="text-indigo-600 dark:text-indigo-400">Style</span>
              <span className="text-gray-900 dark:text-white">Store</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your one-stop shop for premium electronics, fashion, jewelry, and sneakers delivered straight to your door.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors bg-gray-100 dark:bg-gray-800 p-2 rounded-full font-bold text-xs">FB</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors bg-gray-100 dark:bg-gray-800 p-2 rounded-full font-bold text-xs">TW</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors bg-gray-100 dark:bg-gray-800 p-2 rounded-full font-bold text-xs">IG</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</Link></li>
              <li><Link to="/categories" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Categories</Link></li>
              <li><Link to="/offers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Special Offers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Customer Service</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-3 transition-colors flex items-center"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Style Store. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="flex items-center gap-1 font-medium"><span className="text-xl">💳</span> Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
