import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import UserSettingSidebar from './UserSettingSidebar';
import MiniProfileCard from './MiniProfileCard';
import DrawerNavigation from './DrawerNavigation';

const JobExpertises = () => {
  const [selectedExpertises, setSelectedExpertises] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const jobCategories = [
    {
      title: "Administration",
      items: [
        "General affairs",
        "Accounting",
        "Sales Administration",
        "Administrative Assistant",
        "General Affairs",
        "others"
      ]
    },
    {
      title: "Medical care and nursing care",
      items: [
        "nurse",
        "pharmacist",
        "Nursing care",
        "Doctor",
        "Medical Administration",
        "Dental hygienist/dental assistant",
        "others"
      ]
    },
    {
      title: "Sales/Service/Support",
      items: [
        "Store Staff",
        "Beauty consultant",
        "Hair Date",
        "Store Manager",
        "Hairdresser",
        "Area Manager",
        "Customer Support",
        "others"
      ]
    },
    {
      title: "Sales and Marketing / Call Center",
      items: [
        "Sales",
        "Marketing",
        "Telemarketer (receiving calls)",
        "Telemarketing Staff",
        "public relations",
        "Telemarketer (caller)",
        "consultant",
        "plan"
      ]
    },
    {
      title: "WEB / Creative / System",
      items: [
        "Web Designer",
        "illustrator",
        "Video creator",
        "edit",
        "Systems Engineer",
        "Web Director",
        "DTP Designer",
        "writer",
        "Copywriter",
        "Network Engineer",
        "Web Engineer",
        "Photographer",
        "Proofreading",
        "programmer",
        "Operations Management",
        "others"
      ]
    },
    {
      title: "Language/Education",
      items: [
        "translation",
        "Teachers (Elementary, Middle, and High School)",
        "interpretation",
        "University Lecturer",
        "NURSERY teacher/kindergarten teacher",
        "others"
      ]
    },
    {
      title: "Finance and Law",
      items: [
        "Securities business",
        "Insurance Business",
        "Social Insurance and labor consultant",
        "Banking",
        "Administrative scrivener",
        "lawyer",
        "Financial Planner",
        "Judicial scrivener",
        "others"
      ]
    },
    {
      title: "others",
      items: ["others"]
    }
  ];

  const handleExpertiseSelection = (expertise) => {
    if (selectedExpertises.includes(expertise)) {
      setSelectedExpertises(selectedExpertises.filter(item => item !== expertise));
    } else {
      setSelectedExpertises([...selectedExpertises, expertise]);
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
              <span className="text-gray-700">Occupations experienced</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Occupations experienced
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                Set the job type you have experience in.
                This will be helpful for clients when selecting applicants, making it easier to place an order.
              </p>

              <div className="space-y-6">
                {jobCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className="bg-pink-50/50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <h2 className="font-medium text-gray-800 mb-3 bg-pink-100/50 p-2 rounded">
                      {category.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="flex items-center hover:bg-pink-100/50 p-2 rounded-md transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={`expertise-${index}-${itemIndex}`}
                            checked={selectedExpertises.includes(item)}
                            onChange={() => handleExpertiseSelection(item)}
                            className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                          />
                          <label
                            htmlFor={`expertise-${index}-${itemIndex}`}
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

export default JobExpertises;