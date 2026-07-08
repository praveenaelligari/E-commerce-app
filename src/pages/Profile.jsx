import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, LogOut, Package, MapPin, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Please log in to view your profile</h2>
        <button onClick={() => navigate('/login')} className="px-6 py-3 bg-blue-600 text-white rounded-xl">Login</button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full flex flex-col items-center justify-center text-white text-5xl font-bold shadow-lg mb-6">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{user.name}</h1>
            <p className="text-gray-500 flex items-center gap-2 mb-8"><Mail size={16}/> {user.email}</p>

            <button onClick={handleLogout} className="w-full py-3 flex items-center justify-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-xl transition-colors font-semibold">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Account Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl flex flex-col items-center text-center">
                <Package className="text-blue-500 mb-2" size={32} />
                <span className="font-bold text-gray-900 dark:text-white text-xl">12</span>
                <span className="text-sm text-gray-500">Total Orders</span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl flex flex-col items-center text-center">
                <MapPin className="text-purple-500 mb-2" size={32} />
                <span className="font-bold text-gray-900 dark:text-white text-xl">2</span>
                <span className="text-sm text-gray-500">Saved Addresses</span>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl flex flex-col items-center text-center">
                <CreditCard className="text-green-500 mb-2" size={32} />
                <span className="font-bold text-gray-900 dark:text-white text-xl">1</span>
                <span className="text-sm text-gray-500">Payment Methods</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
