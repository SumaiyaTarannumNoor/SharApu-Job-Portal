import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, ChevronRight, X } from 'lucide-react';
import HirerUserSettingSidebar from './HirerUserSettingSidebar';
import MiniProfileCard from '../MiniProfileCard';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const HirerSelfIntroduction = () => {
  const [introduction, setIntroduction] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIntroductionChange = (e) => {
    const text = e.target.value;
    if (text.length <= 6000) {
      setIntroduction(text);
      setError('');
    } else {
      setError('Introduction cannot exceed 6,000 characters');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (introduction.trim() === '') {
      setError('Please enter a self-introduction');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/self-introduction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ introduction }),
      });

      if (response.ok) {
        alert('Self-introduction updated successfully!');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to update self-introduction');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            {/* Arrow button for sidebar */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg group"
            >
              <ChevronRight className="w-6 h-6 text-pink-500 animate-pulse transition-transform group-hover:scale-110 group-hover:text-pink-600 shadow-lg shadow-pink-200" />
            </button>
            <Link to="/" className="text-2xl font-bold text-pink-600">
              SharApu
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <User className="w-6 h-6 text-white bg-pink-500 rounded-full p-1" />
              <span className="hidden sm:inline text-gray-700">ahmedul</span>
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isProfileOpen ? 'transform rotate-180' : ''
                }`} 
              />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          <span className="block sm:inline">If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted.</span>
          <button className="block sm:inline text-pink-600 hover:text-pink-700 mt-1 sm:mt-0 sm:ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex relative">
        {/* Sidebar Drawer for Mobile */}
        <div className={`
          fixed inset-0 z-50 lg:hidden transition-opacity duration-300
          ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className={`
            absolute left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm transform transition-transform duration-300
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="p-4">
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-pink-50 rounded-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <HirerUserSettingSidebar />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 p-4">
          <HirerUserSettingSidebar />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6 text-sm">
              <span className="text-gray-500">Work from home Shuful</span>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">Self Introduction</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                Self-Introduction
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-700 text-base sm:text-lg">
                    Please write a self-introduction that will help workers understand your needs better.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Including information about your industry will make it easier for workers to apply.
                  </p>

                  <div className="mt-4 sm:mt-6">
                    <textarea
                      id="introduction"
                      value={introduction}
                      onChange={handleIntroductionChange}
                      placeholder="[Example] I am mainly looking for writing work. I cover a variety of topics including beauty, romance, job changes, and pregnancy support. I would like to continue to request work from those who have done business with me once, so please apply!"
                      className="w-full p-3 sm:p-4 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors min-h-[150px] sm:min-h-[200px] resize-y text-sm sm:text-base"
                      maxLength={6000}
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm mt-2">
                      <p className="text-pink-600">
                        Up to 6,000 characters can be entered
                      </p>
                      <p className="text-gray-500 mt-1 sm:mt-0">
                        {introduction.length}/6000
                      </p>
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto mt-6 sm:mt-8 px-6 sm:px-8 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg 
                            hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                            shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                            text-sm sm:text-base"
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirerSelfIntroduction;