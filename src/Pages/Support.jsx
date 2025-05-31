import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleFAQ = () => {
    navigate('/faq');
  };

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

  const faqItems = [
    { title: "I can't log in", link: "#" },
    { title: "I lost contact with the other party during the transaction", link: "#" },
    { title: 'I want to continue trading with the same worker (regarding the "Continuous Ordering and Receiving Function")', link: "#" },
    { title: "How to refund the budget you paid for a job", link: "#" }
  ];

  const guidelines = [
    { title: "Job Request Guidelines", link: "#" },
    { title: "Work Participation Guidelines", link: "#" },
    { title: "Announcement from SharApu", link: "#" }
  ];

  const usage = [
    { title: "Task-type job request usage examples", link: "#" }
  ];

  const userSupport = [
    { title: "About selling recycled computers", link: "#" }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase().trim();
    return categories.filter(category => 
      category.title.toLowerCase().includes(query)
    );
  }, [searchQuery, categories]);

  // Filter FAQ items based on search query
  const filteredFAQ = useMemo(() => {
    if (!searchQuery.trim()) return faqItems;
    const query = searchQuery.toLowerCase().trim();
    return faqItems.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery, faqItems]);

  // Filter guidelines based on search query
  const filteredGuidelines = useMemo(() => {
    if (!searchQuery.trim()) return guidelines;
    const query = searchQuery.toLowerCase().trim();
    return guidelines.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery, guidelines]);

  // Filter usage examples based on search query
  const filteredUsage = useMemo(() => {
    if (!searchQuery.trim()) return usage;
    const query = searchQuery.toLowerCase().trim();
    return usage.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery, usage]);

  // Filter user support based on search query
  const filteredUserSupport = useMemo(() => {
    if (!searchQuery.trim()) return userSupport;
    const query = searchQuery.toLowerCase().trim();
    return userSupport.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery, userSupport]);

  // Check if there are any results
  const hasResults = useMemo(() => {
    return filteredCategories.length > 0 ||
           filteredFAQ.length > 0 ||
           filteredGuidelines.length > 0 ||
           filteredUsage.length > 0 ||
           filteredUserSupport.length > 0;
  }, [filteredCategories, filteredFAQ, filteredGuidelines, filteredUsage, filteredUserSupport]);

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="How to write job details"
          className="w-full p-4 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 pl-12"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={20} />
      </div>

      {!hasResults && searchQuery && (
        <div className="text-center text-gray-600 py-8 mb-8">
          No results found for "{searchQuery}"
        </div>
      )}

      {(filteredCategories.length > 0 || !searchQuery) && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredCategories.map((category) => (
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
      )}

      <div className="bg-pink-50 p-8 rounded-lg">
        {(filteredFAQ.length > 0 || !searchQuery) && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-pink-700">FAQ</h2>
            <div className="space-y-4 mb-8">
              {filteredFAQ.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-pink-600 hover:text-pink-700 hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <p className="mb-2">
                <span className="text-pink-600 text-sm">
                  Visit{' '}
                  <span 
                    onClick={handleFAQ} 
                    className="cursor-pointer rounded-lg text-white text-bold bg-pink-600 p-2 mr-1"
                  >
                    SharApu FAQ
                  </span>
                </span>
              </p>
            </div>
          </div>
        )}

        {(filteredGuidelines.length > 0 || !searchQuery) && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-pink-700">Guidelines, Services, and More</h2>
            <div className="space-y-4 mb-8">
              {filteredGuidelines.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-pink-600 hover:text-pink-700 hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </>
        )}

        {(filteredUsage.length > 0 || !searchQuery) && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-pink-700">SharApu usage examples</h2>
            <div className="space-y-4 mb-8">
              {filteredUsage.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-pink-600 hover:text-pink-700 hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </>
        )}

        {(filteredUserSupport.length > 0 || !searchQuery) && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-pink-700">User Support Services</h2>
            <div className="space-y-4 mb-8">
              {filteredUserSupport.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-pink-600 hover:text-pink-700 hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </>
        )}

        <div className="text-center text-gray-600 mt-8">
          <p className="mb-4">
            If you can't find what you're looking for or the problem persists, please{' '}
            <a href="#" className="text-pink-600 hover:text-pink-700 hover:underline">
              contact us here
            </a>
            .
          </p>
          <p>
            If you want to return to the SharApu site, please{' '}
            <a href="#" className="text-pink-600 hover:text-pink-700 hover:underline">
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;