import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobApplicationComplete = () => {
  const navigate = useNavigate();

  const handleSearchMore = () => {
    navigate('/search-for-a-job');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <ol className="flex flex-wrap gap-2">
          <li>Work from home Shukfu</li>
          <li>›</li>
          <li>Search for a job</li>
          <li>›</li>
          <li>Data entry and product registration</li>
          <li>›</li>
          <li className="text-pink-600 font-medium">Confirmation of application details</li>
        </ol>
      </nav>

      {/* Success Message */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Your application is complete!</h1>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 bg-gray-50 p-3">
              Job you applied for
            </h2>
            
            <a href="#" className="block text-lg text-blue-600 hover:text-blue-700 hover:underline">
              [Side job/Work from home] We are looking for people who don't know where to st...
            </a>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-start gap-2">
                <span className="font-medium text-gray-700">Unit price:</span>
                <span className="text-pink-600 font-bold text-lg">1,000 yen</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">Client response deadline:</span>
                <span className="text-pink-600 font-bold">14 days left</span>
              </div>
            </div>
          </div>

          {/* Similar Jobs Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 bg-gray-50 p-3">
              Jobs similar to this one
            </h2>
            
            <div className="bg-pink-50 rounded-lg p-4 text-center">
              <p className="text-gray-600">Stay tuned for similar job opportunities!</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium 
                           hover:bg-pink-700 transition-colors duration-200">
              View My Applications
            </button>
            <button 
              onClick={handleSearchMore}
              className="flex-1 border-2 border-pink-600 text-pink-600 py-3 px-6 rounded-lg font-medium 
                           hover:bg-pink-50 transition-colors duration-200">
              Search More Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationComplete; 