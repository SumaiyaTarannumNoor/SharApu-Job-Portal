import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import UserSettingSidebar from './UserSettingSidebar';
import MiniProfileCard from './MiniProfileCard';
import DrawerNavigation from './DrawerNavigation';

const PreferredJobs = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const jobCategories = [
    {
      title: "Data entry and product registration",
      items: [
        "Data entry and data check",
        "Data collection and classification",
        "Product Registration",
        "Other data entry and product registration"
      ]
    },
    {
      title: "Sales, Customer support",
      items: [
        "Sales/Telemarketing",
        "Customer Support",
        "User interviews and user tests",
        "Monitor, Survey, Research questionnaire",
        "Other sales, customer support, and research"
      ]
    },
    {
      title: "Web production, Web design and development",
      items: [
        "Web Design",
        "HTML and CSS coding",
        "Website check/up test",
        "Other web production, web design and development"
      ]
    },
    {
      title: "Writing",
      items: [
        "Article/blog creation",
        "Customer reviews and testimonials",
        "Tips and transcription",
        "Other Writing"
      ]
    },
    {
      title: "Design, photography, and video",
      items: [
        "Illustrations, logos, and banners",
        "Photo shooting, photo editing, image processing",
        "Video shooting, video editing, video processing",
        "Other designs, photos, and videos"
      ]
    },
    {
      title: "Translation",
      items: [
        "English Translation",
        "Other translations"
      ]
    },
    {
      title: "Shuffle outing",
      items: [
        "Roundtable discussions and interviews",
        "Mystery shopping",
        "Other Shuffle outings"
      ]
    }
  ];

  const handleJobSelection = (job) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter(item => item !== job));
    } else {
      setSelectedJobs([...selectedJobs, job]);
    }
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
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <span className="text-gray-500">Work from home Shuful</span>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">Interesting Job</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">Interesting Job</h1>
              <p className="text-sm text-gray-600 mb-6">
                Select the jobs you are interested in.
                When you set it, the jobs in the new job email will be selected from the checked categories.
                It will also be possible to display recommended jobs that suit you from the checked categories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className="bg-pink-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <h2 className="font-medium text-pink-800 mb-3">
                      {category.title}
                    </h2>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="flex items-start hover:bg-pink-100/50 p-2 rounded-md transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={`job-${index}-${itemIndex}`}
                            checked={selectedJobs.includes(item)}
                            onChange={() => handleJobSelection(item)}
                            className="mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                          />
                          <label
                            htmlFor={`job-${index}-${itemIndex}`}
                            className="ml-2 text-sm text-gray-700 cursor-pointer"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button 
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
  );
};

export default PreferredJobs;