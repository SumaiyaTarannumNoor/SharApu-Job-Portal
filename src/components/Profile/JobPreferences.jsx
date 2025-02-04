import React, { useState } from 'react';
import UserSettingSidebar from './UserSettingSidebar'; // Adjust the path if needed

const JobPreferences = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected preference:', selectedOption);
  };

  const options = [
    {
      value: 'continuous',
      label: 'Desire to continue working: I want to work continuously and can devote a certain amount of time to my work.'
    },
    {
      value: 'oneOff',
      label: 'One-off: I want to work at my own pace.'
    },
    {
      value: 'both',
      label: "Doesn't matter: Can be used for both continuous and one-off work"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-pink-100 p-4">
        <UserSettingSidebar />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 px-6 py-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-800">
              Desire to continue working
            </h2>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-2">
              Please choose the option that best describes your current situation.
            </p>
            <p className="text-gray-600 mb-6">
              This will help us match you with the job you desire.
            </p>

            {/* Radio Options */}
            <div className="space-y-4">
              {options.map(option => (
                <label 
                  key={option.value}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center pt-1">
                    <input
                      type="radio"
                      name="workPreference"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handleOptionChange}
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full 
                        checked:border-pink-500 checked:border-8 transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`mt-8 w-full sm:w-auto px-8 py-3 rounded-md text-center transition-all duration-200
                ${selectedOption 
                  ? 'bg-pink-500 text-white hover:bg-pink-600' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
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
