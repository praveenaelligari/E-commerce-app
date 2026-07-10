import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products, getCategories } from '../data/products';
import { ShoppingCart, Star, TrendingUp, Zap, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);
  
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 group"
    >
      <div className="relative h-56 bg-gray-50 dark:bg-gray-700 overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold mb-1">{product.brand}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-gray-900 dark:text-white">₹{product.price.toLocaleString()}</span>
            {product.discount > 0 && (
              <span className="ml-2 text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          {cartItem ? (
            <div className="flex items-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full h-9 w-[90px] justify-between px-1 shadow-inner">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors font-bold text-lg"
              >
                -
              </motion.button>
              <span className="font-bold text-sm text-indigo-800 dark:text-indigo-300">{cartItem.quantity}</span>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors font-bold text-lg"
              >
                +
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => { addToCart(product); toast.success('Added to cart!'); }}
              className="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-md shadow-indigo-500/30 transition-colors shrink-0"
            >
              <ShoppingCart size={16} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const categories = getCategories();
const categoryImages = {
  Electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600',
  Clothing: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600',
  Jewelry: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
  Watches: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
  Sneakers: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
};

export default function Home() {
  const featured = products.filter(p => p.discount > 0).slice(0, 4);
  const newArrivals = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-indigo-300 font-semibold uppercase tracking-widest text-sm mb-4">
              ✦ New Season Arrivals
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Style Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Excellence
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover premium electronics, luxury fashion, fine jewelry, and iconic sneakers — all in one place.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4">
              <Link to="/products" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-indigo-500/40">
                Shop Now
              </Link>
              <Link to="/offers" className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-bold transition-colors backdrop-blur-sm">
                View Deals
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {categories.slice(0, 4).map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                className="relative h-36 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={categoryImages[cat]} alt={cat} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <Link to={`/products?category=${cat}`} className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-bold text-sm">{cat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-indigo-600 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          {[
            { icon: <Zap size={16}/>, text: 'Express Delivery' },
            { icon: <Shield size={16}/>, text: '100% Authentic Products' },
            { icon: <Star size={16}/>, text: 'Premium Brands' },
            { icon: <TrendingUp size={16}/>, text: 'Best Prices Guaranteed' },
          ].map(f => (
            <div key={f.text} className="flex items-center gap-2 opacity-90 hover:opacity-100">
              {f.icon} {f.text}
            </div>
          ))}
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">🔥 Hot Deals</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Limited time discounted products</p>
          </div>
          <Link to="/products" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={`/products?category=${cat}`} className="relative h-40 rounded-2xl overflow-hidden block group">
                  <img src={categoryImages[cat]} alt={cat} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white font-bold text-sm">{cat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">New Arrivals</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Fresh picks just added</p>
          </div>
          <Link to="/products" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">See All →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

