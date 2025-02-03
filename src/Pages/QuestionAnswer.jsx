import React from 'react';
import { Search } from "lucide-react";
import { useSearchParams, useNavigate } from 'react-router-dom';

const QuestionAnswer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const questionTitle = decodeURIComponent(searchParams.get('question') || "Shufuti's business days and business hours");

  const handleBack = () => {
    navigate('/faq');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="text-pink-600 hover:text-pink-800 flex items-center gap-2 mb-4"
      >
        ← Back to FAQ
      </button>

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
            {questionTitle === "Shufuti's business days and business hours" ? (
              <>
                Shufuti's business days and business hours are 
                <span className="font-semibold"> from 10:00AM to 7:00PM on weekdays, excluding Saturdays, Sundays, and holidays</span>
              </>
            ) : (
              "Answer content for this question will be displayed here."
            )}
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-2 text-sm">
        <p className="text-gray-600">
          If you can't find what you're looking for or the problem persists, please{' '}
          <a href="#" className="text-pink-600 hover:text-pink-800 hover:underline">contact us</a> here.
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