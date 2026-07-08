import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:underline">Return to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} ${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link to="/products" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" /> Back to Products
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-100 dark:bg-gray-700 p-8 flex items-center justify-center min-h-[400px]">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                  {product.name}
                </h1>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full border transition-colors ${isWishlisted ? 'bg-red-50 border-red-200 text-red-500 dark:bg-red-900/20 dark:border-red-900' : 'border-gray-200 text-gray-400 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
                <button className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-6 text-yellow-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star size={20} />
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">(4.0 / 5)</span>
            </div>

            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ₹{product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-full">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-full transition"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-gray-900 dark:text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-full transition"
                >
                  +
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
            >
              <ShoppingCart size={24} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
