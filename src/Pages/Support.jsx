import React from 'react';
import { Search } from 'lucide-react';

const Support = () => {
  const categories = [
    { title: 'Transaction flow (for first-time users)', id: 1 },
    { title: 'Job registration/search', id: 2 },
    { title: 'Application (formerly "Quote")', id: 3 },
    { title: 'Ordering/receiving work', id: 4 },
    { title: 'Delivery/billing/inspection', id: 5 },
    { title: 'Paying/receiving rewards', id: 6 },
    { title: 'evaluation', id: 7 },
    { title: 'Membership Registration/Account Information', id: 8 },
    { title: 'Usage fees and charges', id: 9 },
    { title: 'Regarding receipts and other documents', id: 10 },
    { title: 'Work Management', id: 11 },
    { title: 'Remuneration/Payment Management', id: 12 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
        SharApu Support
      </h1>
      
      <p className="text-gray-700 mb-8">
        You can search for instructions on how to use SharApu or any questions you may have by keyword or category.
      </p>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="How to write job details"
          className="w-full p-4 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 pl-12"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="p-4 text-left border border-pink-100 rounded-lg hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <span className="text-pink-700 hover:text-pink-800">
              {category.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Support;