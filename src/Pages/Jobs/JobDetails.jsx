import React from 'react';
import { 
  Star, 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  AlertTriangle,
  Heart,
  MessageCircle
} from 'lucide-react';

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-6 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto text-sm mb-6">
        <nav className="flex space-x-2 text-gray-500">
          <a href="#" className="hover:text-pink-600">Work from home Shuful</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-pink-600">Search for a job</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-pink-600">Data entry and product registration</a>
          <span>&gt;</span>
          <span className="text-gray-700">Survey Project</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-100">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Y2</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">project</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Standing order</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Beginners welcome</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">No skills required</span>
                  </div>
                  <h1 className="text-xl font-semibold text-gray-900 mb-2">
                    [Side job/Work from home] We are looking for people who don't know where to start or what suits them best! Please participate in our survey!
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700">4.9</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Average hourly rate: ¥864</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center w-12 h-12 rounded-full border border-pink-200 hover:bg-pink-50 transition-colors">
                  <Heart className="w-6 h-6 text-pink-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Reward Section */}
              <div className="bg-pink-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Reward Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reward amount</span>
                    <span className="font-semibold text-pink-600">1,000 yen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated hourly rate</span>
                    <span className="text-gray-800">Approximately 1,000 yen</span>
                  </div>
                  <div className="text-xs text-gray-500">*We cannot guarantee the hourly rate.</div>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <div className="text-gray-600 mb-2">Required working hours per day</div>
                    <div className="font-medium">Less than 1 hour</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <div className="text-gray-600 mb-2">Work Environment</div>
                    <div className="font-medium">Any</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <div className="text-gray-600 mb-2">Application Period</div>
                    <div className="font-medium text-pink-600">13 days left</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <div className="text-gray-600 mb-2">Number of people needed</div>
                    <div className="font-medium">50 people</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-medium
                             hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                             shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Apply Now
              </button>
              <button className="w-full border border-pink-200 text-pink-600 py-3 rounded-lg font-medium
                             hover:bg-pink-50 transition-all duration-200">
                Ask a Question
              </button>
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Users className="w-4 h-4 mr-2" />
                  <span>4 people applied / 4 people ordered</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>205 views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;