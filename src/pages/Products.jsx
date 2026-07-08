import { useState, useMemo } from 'react';
import { products as allProducts, getCategories } from '../data/products';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 p-4 flex items-center justify-center overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800 dark:text-gray-200">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.discount > 0 && (
          <p className="text-xs text-red-500 font-semibold mb-1">Save {product.discount}% off</p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{product.price.toLocaleString()}
            {product.discount > 0 && (
              <span className="ml-2 text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </span>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart!`);
            }}
            className="h-10 w-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md shadow-blue-500/30"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = getCategories();
  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Products</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{filteredProducts.length} products found</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 top-24 sticky">
            <div className="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Filter size={20} /> Categories
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'All' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  All Products
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-gray-400 dark:text-gray-500 mb-4 flex justify-center">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or category filter</p>
              <button 
                onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                className="mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
