import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  AlertTriangle,
  Heart,
  MessageCircle,
  User,
  ChevronDown
} from 'lucide-react';
import MiniProfileCard from '../../components/Profile/MiniProfileCard';
import DrawerNavigation from '../../components/Profile/DrawerNavigation';

const JobDetails = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return <div>No job details available</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex space-x-2 text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-pink-600">Work from home Shuful</Link>
          <span className="text-gray-500">&gt;</span>
          <Link to="/search" className="text-gray-500 hover:text-pink-600">Search for a job</Link>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-700">{job.title}</span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-100">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={job.company.logo} 
                    alt={job.company.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                    {job.hasStandingOrder && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        Standing order
                      </span>
                    )}
                    {job.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700">{job.company.averageHourlyRate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Average hourly rate: ¥{job.company.averageHourlyRate}</span>
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
                    <span className="font-semibold text-pink-600">{job.reward.toLocaleString()} yen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated hourly rate</span>
                    <span className="text-gray-800">{job.estimatedHourlyRate.toLocaleString()} yen</span>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.daysLeft && (
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                      <div className="text-gray-600 mb-2">Days Left</div>
                      <div className="font-medium text-pink-600">{job.daysLeft} days</div>
                    </div>
                  )}
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <div className="text-gray-600 mb-2">Views</div>
                    <div className="font-medium">{job.views} views</div>
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
                  <span>{job.views} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
          {/* Job Requirements Section */}
          <div className="p-6 border-t border-gray-100">
            <div className="relative mb-8">
              <h2 className="text-2xl font-bold text-pink-600 inline-block">Job Requirements</h2>
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-pink-500 to-pink-300"></div>
            </div>
            
            {/* Required Location */}
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                </div>
                Required Location</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>No deadline. The number of characters is calculated automatically and displayed in order at the end of each line.</span>
              </div>
            </div>

            {/* Work Procedure */}
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-pink-500" />
                </div>
                Work Procedure</h3>
              <div className="space-y-2 text-gray-600">
                <p>1. Please write your details using our system.</p>
                <p>2. Delivery is checked automatically by our system, so there is no need for you to complete any delivery completion notice we receive.</p>
                <p>3. Made at the beginning of the following month</p>
              </div>
            </div>

            {/* Required Skills */}
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Star className="w-5 h-5 text-pink-500" />
                </div>
                Required Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700">Writing and administrative work</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700">PC operation</span>
                </div>
              </div>
            </div>

            {/* Welcome Experience */}
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-pink-500" />
                </div>
                Welcome Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <span className="text-gray-700">Administration</span>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <span className="text-gray-700">General Affairs / Sales Administration / General Affairs / Accounting / Administrative Assistant / Others</span>
                </div>
              </div>
            </div>

            {/* Area Description */}
            <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                </div>
                Area Description</h3>
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-700">Information about specific areas will be provided after matching.</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default JobDetails;