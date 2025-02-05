import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import UserSettingSidebar from './UserSettingSidebar';
import MiniProfileCard from './MiniProfileCard';
import DrawerNavigation from './DrawerNavigation';

const JobPreferences = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected preference:', selectedOption);
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
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
              <span className="text-gray-700">ahmedul</span>
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isProfileOpen ? 'transform rotate-180' : ''
                }`} 
              />
            </div>
            <MiniProfileCard isOpen={isProfileOpen} />
          </div>
        </div>

        <DrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted.
          <button className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 p-4">
          <UserSettingSidebar />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <span className="text-gray-500">Work from home Shuful</span>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">Job Preferences</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Desire to continue working
              </h1>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Please choose the option that best describes your current situation.
                </p>
                <p className="text-gray-600">
                  This will help us match you with the job you desire.
                </p>

                {/* Radio Options */}
                <div className="space-y-4 mt-8">
                  <label className="flex items-start gap-4 cursor-pointer hover:bg-pink-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="workPreference"
                      value="continuous"
                      checked={selectedOption === 'continuous'}
                      onChange={handleOptionChange}
                      className="mt-1 w-5 h-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                    />
                    <span className="text-gray-700">
                      Desire to continue working: I want to work continuously and can devote a certain amount of time to my work.
                    </span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer hover:bg-pink-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="workPreference"
                      value="oneOff"
                      checked={selectedOption === 'oneOff'}
                      onChange={handleOptionChange}
                      className="mt-1 w-5 h-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                    />
                    <span className="text-gray-700">
                      One-off: I want to work at my own pace.
                    </span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer hover:bg-pink-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name="workPreference"
                      value="both"
                      checked={selectedOption === 'both'}
                      onChange={handleOptionChange}
                      className="mt-1 w-5 h-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                    />
                    <span className="text-gray-700">
                      Doesn't matter: Can be used for both continuous and one-off work
                    </span>
                  </label>
                </div>

                {/* Update Button */}
                <button
                  onClick={handleSubmit}
                  className="mt-8 px-8 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg 
                           hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                           shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreferences;