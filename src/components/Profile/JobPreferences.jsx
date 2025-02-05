import React, { useState } from 'react';
import UserSettingSidebar from './UserSettingSidebar'; // Make sure path is correct

const JobPreferences = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected preference:', selectedOption);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 p-4">
        <UserSettingSidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl">
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
              <label className="flex items-start gap-4 cursor-pointer">
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

              <label className="flex items-start gap-4 cursor-pointer">
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

              <label className="flex items-start gap-4 cursor-pointer">
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
              className="mt-8 px-8 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreferences;