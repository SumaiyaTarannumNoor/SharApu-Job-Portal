import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransactionFlowFirstTime = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              {/* Handle image error fallback if image not found */}
              <img
                src="/sharapu-logo.png"
                alt="SharApu"
                className="h-10 w-10 mr-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/40';
                }}
              />
              <span className="text-2xl font-bold">SharApu</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/search-job" className="hover:underline">Search for a Job</Link>
              <Link to="/order-work" className="hover:underline">If you want to order work</Link>
              <Link to="/receive-work" className="hover:underline">Those who want to receive work</Link>
            </nav>
          </div>
          <div className="flex space-x-4">
            <Link to="/login" className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-gray-100">Log In</Link>
            <Link to="/register" className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-gray-100">Register as a Member (Free)</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <Link to="/support" className="text-pink-500 hover:text-pink-600">SharApu Support</Link>
            <span className="text-gray-400 mx-1">›</span>
            <span className="text-gray-600">Transaction flow (for first-time users)</span>
          </div>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Search for the keyword you want to find</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="How to write job details"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl font-medium text-gray-800 mb-5">
            Transaction flow (for first-time users)
          </h1>

          {/* Transaction Links */}
          <div className="space-y-2">
            <div className="border-b border-gray-200 py-3">
              <Link to="/transaction-flow" className="text-pink-500 hover:text-pink-600">Transaction flow</Link>
            </div>
            <div className="border-b border-gray-200 py-3">
              <Link to="/transaction-flow/task" className="text-pink-500 hover:text-pink-600">Task type transaction flow</Link>
            </div>
            <div className="border-b border-gray-200 py-3">
              <Link to="/transaction-flow/project" className="text-pink-500 hover:text-pink-600">Project type transaction flow</Link>
            </div>
          </div>

          {/* Contact Help */}
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              If you can't find what you're looking for or the problem persists, please{' '}
              <Link to="/contact" className="text-pink-500 hover:text-pink-600 hover:underline">contact us</Link> here.
            </p>
            <p className="mt-3 text-gray-600">
              If you want to return to the SharApu site, please click{' '}
              <Link to="/sharapu-site" className="text-pink-500 hover:text-pink-600 hover:underline">here</Link>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Main Menu</h3>
              <ul className="space-y-2">
                <li><Link to="/search-job" className="hover:underline">Search for a job</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/user-guide" className="hover:underline">User Guide</Link></li>
                <li><Link to="/qanda" className="hover:underline">Q&A List</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Link</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="hover:underline">SharApu Blog</Link></li>
                <li><Link to="/twitter" className="hover:underline">Official Twitter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Operating Company</h3>
              <ul className="space-y-2">
                <li><Link to="/company" className="hover:underline">Company Information</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-4 border-t border-pink-400">
            ©2025 SharApu || Powered By TechKnowGram Limited
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransactionFlowFirstTime;
