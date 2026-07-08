import { motion } from 'framer-motion';
import { products, getCategories } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categoryImages = {
  Electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600',
  Clothing: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600',
  Jewelry: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600',
  Watches: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
  Sneakers: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
};

export default function Categories() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Browse Categories
        </motion.h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Find products from your favourite category</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category, idx) => {
          const count = products.filter(p => p.category === category).length;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={categoryImages[category] || 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600'}
                alt={category}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <Link to={`/products?category=${category}`} className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/70 text-sm mb-1">{count} Products</p>
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
