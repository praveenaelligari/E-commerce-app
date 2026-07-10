import { motion } from 'framer-motion';
import { Store, ShieldCheck, Heart, Truck } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 dark:text-gray-200">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Style Store</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
          We are on a mission to redefine your online shopping experience by delivering quality products, fast shipping, and exceptional customer service directly to your doorstep.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { icon: <Store size={40} className="text-blue-500" />, title: 'Vast Selection', desc: 'Over 10,000+ curated products from top brands worldwide.' },
          { icon: <ShieldCheck size={40} className="text-green-500" />, title: 'Secure Shopping', desc: '100% secure payments with buyer protection guarantee.' },
          { icon: <Truck size={40} className="text-orange-500" />, title: 'Fast Delivery', desc: 'Express shipping options to get your items in record time.' },
          { icon: <Heart size={40} className="text-red-500" />, title: '24/7 Support', desc: 'Our dedicated team is always here to help you out.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-full">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-blue-100 dark:border-gray-700">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Founded in 2024, Style Store started as a small vision to bring convenience and trust to online shopping. What began as a passionate side project has rapidly grown into a trusted e-commerce platform loved by thousands.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We source our catalog directly from the most reputable manufacturers and ensure every product meets our strict quality standards before it goes live. Thank you for making us your preferred shopping destination!
          </p>
        </div>
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}


