import React from 'react';
import { Search } from "lucide-react";
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

const QuestionAnswer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const questionTitle = decodeURIComponent(searchParams.get('question') || "");

  const handleBack = () => {
    // Check if we came from transactions page
    if (document.referrer.includes('transactions')) {
      navigate('/transactions');
    } else {
      navigate('/faq');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm mb-6">
        <Link to="/support" className="text-pink-500 hover:text-pink-600">
          Shufuti Support
        </Link>
        <span className="text-gray-400">›</span>
        <Link to="/qanda" className="text-pink-500 hover:text-pink-600">
          Q&A List
        </Link>
        <span className="text-gray-400">›</span>
        <button 
          onClick={handleBack}
          className="text-pink-500 hover:text-pink-600"
        >
          Back
        </button>
      </nav>

      {/* Search Section */}
      <div className="relative">
        <input 
          type="text"
          placeholder="Type to enter your keyword..."
          className="w-full px-10 py-2 border rounded-md border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-pink-400" />
      </div>

      {/* Question Title Section */}
      <div className="bg-white border border-pink-100 rounded-lg shadow-sm">
        <div className="p-4 border-b border-pink-100">
          <h2 className="text-xl font-semibold text-pink-800">
            {questionTitle}
          </h2>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-gray-700">
            Answer content for "{questionTitle}" will be displayed here.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-2 text-sm">
        <p className="text-gray-600">
          If you can't find what you're looking for or the problem persists, please{' '}
          <Link to="/contact" className="text-pink-600 hover:text-pink-800 hover:underline">
            contact us
          </Link> here.
        </p>
        <p className="text-gray-600">
          If you want to return to the Shufuti site, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-800 hover:underline">click here</a>.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;