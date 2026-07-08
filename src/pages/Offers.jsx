import { motion } from 'framer-motion';
import { Percent, Tag, Zap, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'Mega Electronics Sale',
    description: 'Get up to 50% OFF on top electronics — smartphones, tablets, headphones & more.',
    code: 'ELECTRONICS50',
    icon: <Zap size={28} />,
    color: 'from-blue-600 to-indigo-700',
    badgeColor: 'bg-blue-100 text-blue-800',
    expiresOn: 'Ends Sunday',
  },
  {
    id: 2,
    title: 'First Purchase Offer',
    description: 'New to our store? Enjoy flat ₹500 off on your first order — no minimum required!',
    code: 'WELCOME500',
    icon: <Gift size={28} />,
    color: 'from-pink-500 to-rose-600',
    badgeColor: 'bg-pink-100 text-pink-800',
    expiresOn: 'No Expiry',
  },
  {
    id: 3,
    title: 'Fashion Week Deal',
    description: 'Shop Clothing & Sneakers and save 30% — limited stock available.',
    code: 'FASHION30',
    icon: <Tag size={28} />,
    color: 'from-purple-500 to-violet-700',
    badgeColor: 'bg-purple-100 text-purple-800',
    expiresOn: 'Today Only',
  },
  {
    id: 4,
    title: 'Luxury Jewelry Flash Deal',
    description: '20% OFF on all Jewelry & Watches — because you deserve the finest.',
    code: 'LUXURY20',
    icon: <Percent size={28} />,
    color: 'from-amber-500 to-yellow-600',
    badgeColor: 'bg-amber-100 text-amber-800',
    expiresOn: 'Ends in 2 days',
  },
];

export default function Offers() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4"
        >
          Exclusive Deals & Offers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg"
        >
          Save big with these limited-time promo codes
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, idx) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative rounded-3xl p-8 text-white overflow-hidden bg-gradient-to-br ${offer.color} shadow-xl`}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="flex items-start justify-between mb-6">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                {offer.icon}
              </div>
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                {offer.expiresOn}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
            <p className="text-white/80 mb-7 leading-relaxed min-h-[48px]">{offer.description}</p>

            <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-md">
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-1">Promo Code</p>
                <p className="font-mono text-xl font-black tracking-widest">{offer.code}</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(offer.code);
                  alert(`Code "${offer.code}" copied!`);
                }}
                className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
              >
                Copy
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/products"
          className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-colors shadow-xl shadow-indigo-500/30"
        >
          Shop & Apply Offers
        </Link>
      </div>
    </div>
  );
}
