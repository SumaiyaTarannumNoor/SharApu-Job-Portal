import React, { useState, useRef } from 'react';
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
  ChevronDown,
  Info
} from 'lucide-react';
import MiniProfileCard from '../../components/Profile/MiniProfileCard';
import DrawerNavigation from '../../components/Profile/DrawerNavigation';
import JobApplicationForm from './JobApplicationForm';

const JobSidebar = ({ job, scrollToForm, isFollowed, onFollowToggle }) => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white rounded-xl shadow-md p-6 space-y-6 sticky top-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-500 rounded-xl blur-md opacity-20"></div>
          <div className="relative w-28 h-28 bg-pink-50 rounded-xl overflow-hidden ring-4 ring-pink-100">
            <img
              src={job.company?.logo || "/api/placeholder/112/112"}
              alt={job.company?.name || "Company Logo"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Username with Decorative Element */}
        <div className="relative">
          <div className="text-lg font-semibold text-gray-900">{job.company?.name || "kawa_to"}</div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
        </div>
        
        {/* Rating */}
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-1 bg-pink-50 px-3 py-1 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-pink-500 fill-current' : 'text-pink-200'}`}
                />
              ))}
            </div>
            <span className="text-pink-600 font-medium ml-1">4.5</span>
          </div>
        </div>

        {/* Average Rate */}
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100">
          <span className="text-gray-700 font-medium">¥{job.company?.averageHourlyRate || 262}</span>
          <span className="text-gray-500 text-sm ml-1">/ hour</span>
        </div>
      </div>

      {/* Job Stats */}
      <div className="bg-white p-4 rounded-lg border border-pink-100">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Reward amount</span>
            <div className="text-xl font-bold text-pink-600">1 yen</div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Est. hourly rate</span>
            <div className="text-gray-800">~60 yen</div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            (estimated work time per item: ~1 minute)
          </div>
        </div>
      </div>

      {/* Application Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 p-3 rounded-lg">
          <div className="text-sm text-gray-600">Days Left</div>
          <div className="font-semibold text-pink-600">4 days</div>
        </div>
        <div className="bg-pink-50 p-3 rounded-lg">
          <div className="text-sm text-gray-600">Views</div>
          <div className="font-semibold text-gray-700">752</div>
        </div>
      </div>

      {/* People Stats */}
      <div className="bg-white p-4 rounded-lg border border-pink-100">
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>45 applied / 31 ordered</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Info className="w-4 h-4 mr-2" />
            <span>1000 people needed</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button 
          onClick={scrollToForm}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-medium
                   hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                   shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Apply Now
        </button>
        <button className="w-full border border-pink-200 text-pink-600 py-3 rounded-lg font-medium
                       hover:bg-pink-50 transition-all duration-200">
          Ask a Question
        </button>
        <button 
          onClick={onFollowToggle}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg
                     border transition-colors ${
                       isFollowed 
                       ? 'bg-pink-50 border-pink-300 text-pink-600' 
                       : 'border-gray-200 text-gray-600 hover:text-pink-600 hover:border-pink-200'
                     }`}>
          <Heart className={`w-4 h-4 ${isFollowed ? 'fill-current' : ''}`} />
          <span>{isFollowed ? 'Following' : 'Follow'}</span>
        </button>
      </div>

      {/* Learn More Link */}
      <div className="text-center">
        <a href="#" className="text-sm text-pink-600 hover:text-pink-700">
          Learn more about average hourly rates
        </a>
      </div>
    </div>
  );
};

const JobDetails = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const location = useLocation();
  const job = location.state?.job;
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFollowToggle = () => {
    setIsFollowed(!isFollowed);
  };

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

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <JobSidebar 
              job={job} 
              scrollToForm={scrollToForm} 
              isFollowed={isFollowed}
              onFollowToggle={handleFollowToggle}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
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
                          project
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          Standing order
                        </span>
                        {job.tags?.map((tag, index) => (
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
                    <button 
                      onClick={handleFollowToggle}
                      className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-pink-50 transition-colors">
                      <Heart 
                        className={`w-8 h-8 text-pink-500 ${isFollowed ? 'fill-current' : ''}`} 
                      />
                    </button>
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
                    Required Location
                  </h3>
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
                    Work Procedure
                  </h3>
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
                    Required Skills
                  </h3>
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
                    Welcome Experience
                  </h3>
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
                    Area Description
                  </h3>
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
        </div>

        {/* Application Form */}
        <div ref={formRef}>
          <JobApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;