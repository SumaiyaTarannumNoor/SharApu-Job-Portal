import React, { useEffect, useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TransactionFlowFirstTime = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuestionClick = (questionText) => {
    const encodedQuestion = encodeURIComponent(questionText);
    navigate(`/question-answer?question=${encodedQuestion}`);
  };

  const transactionQuestions = [
    {
      id: 1,
      text: "Changes to job recruitment periods, suspensions, additional recruitment, and termination",
      link: "/qanda/job-changes"
    },
    {
      id: 2,
      text: "About 'jobs' and 'deals' in project types",
      link: "/qanda/project-types"
    },
    {
      id: 3,
      text: "Is it possible to deliver the same task multiple times?",
      link: "/qanda/multiple-deliveries"
    },
    {
      id: 4,
      text: "About the blocking function (formerly known as the blacklist)",
      link: "/qanda/blocking"
    },
    {
      id: 5,
      text: "I lost contact with the other party during the transaction",
      link: "/qanda/lost-contact"
    },
    {
      id: 6,
      text: "I want to continue trading with the same worker (regarding the 'Continuous Ordering and Receiving Function')",
      link: "/qanda/continuous-trading"
    },
    {
      id: 7,
      text: "Can I see the other person's rating before I rate them?",
      link: "/qanda/ratings"
    },
    {
      id: 8,
      text: "What should I do if I have a problem with a business partner?",
      link: "/qanda/partner-issues"
    },
    {
      id: 9,
      text: "The bookmark function is not available",
      link: "/qanda/bookmark"
    },
    {
      id: 10,
      text: "Do I need to notify SharApu of my 'My Number'?",
      link: "/qanda/my-number"
    },
    {
      id: 11,
      text: "Can tax be withheld within SharApu?",
      link: "/qanda/tax-withholding"
    },
    {
      id: 12,
      text: "Do I need to file a tax return?",
      link: "/qanda/tax-return"
    },
    {
      id: 13,
      text: "How do I use the 'free transfer fee' and 'half price transfer fee' benefits?",
      link: "/qanda/transfer-benefits"
    },
    {
      id: 14,
      text: "Does SharApu issue employment certificates?",
      link: "/qanda/employment-certificates"
    },
    {
      id: 15,
      text: "I want to check the personal information of my workers and their account information for external services",
      link: "/qanda/worker-info"
    }
  ];

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return transactionQuestions;
    
    const query = searchQuery.toLowerCase().trim();
    return transactionQuestions.filter(question =>
      question.text.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm mb-6">
        <Link to="/support" className="text-pink-500 hover:text-pink-600">
          SharApu Support
        </Link>
        <span className="text-gray-400">›</span>
        <Link to="/qanda" className="text-pink-500 hover:text-pink-600">
          Q&A List
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-600">About the transaction</span>
      </nav>

      {/* Search Section */}
      <div className="mb-8">
        <label className="block text-gray-600 mb-2">
          Search for the keyword you want to find
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="How to write job details"
            className="w-full p-3 pr-10 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <Search 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400" 
            size={20}
          />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        About the transaction
      </h1>

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          No results found for "{searchQuery}"
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => handleQuestionClick(question.text)}
                className="text-left w-full text-pink-500 hover:text-pink-600 hover:underline block"
              >
                {question.text}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-12 text-center text-gray-600">
        <p>
          If you can't find what you're looking for or the problem persists, please{' '}
          <Link to="/contact" className="text-pink-500 hover:text-pink-600 hover:underline">
            contact us
          </Link>
          {' '}here.
        </p>
      </div>
    </div>
  );
};

export default TransactionFlowFirstTime;