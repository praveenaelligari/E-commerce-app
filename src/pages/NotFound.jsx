import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center">
            <span className="text-6xl font-black">404</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
          >
            Go Back
          </button>
          <Link 
            to="/" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
