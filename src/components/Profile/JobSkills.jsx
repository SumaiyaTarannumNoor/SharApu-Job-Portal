import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import UserSettingSidebar from './UserSettingSidebar';
import MiniProfileCard from './MiniProfileCard';
import DrawerNavigation from './DrawerNavigation';

const JobSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const skillCategories = [
    {
      title: "Writing and administrative work",
      items: [
        "typing",
        "word",
        "Touch typing",
        "Excel",
        "power point",
        "Excel (macro)",
        "PC operation"
      ]
    },
    {
      title: "translation",
      items: [
        "Korean Translation",
        "Chinese Translation",
        "English Translation",
        "Other translations"
      ]
    },
    {
      title: "Web production and development",
      items: [
        "WordPress",
        "Web Development",
        "VBA",
        "Website management",
        "Web Design"
      ]
    },
    {
      title: "Photos and videos",
      items: [
        "Camera photography (amateur)",
        "Videography (Professional)",
        "Photo Editing",
        "Camera photography (professional)",
        "Video Creation and Editing"
      ]
    },
    {
      title: "design",
      items: [
        "DTP Design",
        "Illustration Creation"
      ]
    },
    {
      title: "Sales and Marketing",
      items: [
        "Power receiving Support",
        "Customer Care",
        "Outbound Calls",
        "Digital Marketing",
        "Data Entry",
        "Online Marketing"
      ]
    }
  ];

  const handleSkillSelection = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(item => item !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

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
              <span className="text-gray-700">Skills</span>
            </div>

            {/* Header Section */}
            <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-4 rounded-lg shadow-sm mb-6">
              <h1 className="text-xl font-semibold text-gray-800">Skill</h1>
              <div className="mt-3 space-y-2">
                <p className="text-sm text-gray-600">
                  You can set the skills you possess.
                </p>
                <p className="text-sm text-gray-600">
                  By setting the skills, you will be able to display suitable recommended jobs, and you will be more likely to be selected by clients when applying.
                </p>
                <p className="text-sm text-pink-600 font-medium">
                  so please set it.
                </p>
              </div>
            </div>

            {/* Skills Categories */}
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-pink-100"
                >
                  <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 p-3">
                    <h2 className="font-medium text-pink-800">
                      {category.title}
                    </h2>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex items-center group hover:bg-pink-50 p-2 rounded-md transition-colors"
                      >
                        <input
                          type="checkbox"
                          id={`skill-${index}-${itemIndex}`}
                          checked={selectedSkills.includes(item)}
                          onChange={() => handleSkillSelection(item)}
                          className="h-4 w-4 text-pink-500 border-pink-300 rounded focus:ring-pink-500 transition-colors"
                        />
                        <label
                          htmlFor={`skill-${index}-${itemIndex}`}
                          className="ml-2 text-sm text-gray-600 group-hover:text-pink-700 transition-colors cursor-pointer"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Set Skills Button */}
            <div className="flex justify-center mt-8">
              <button 
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg 
                           hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                           shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Set skills
              </button>
            </div>

            {/* Previously Registered Skills */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-4 rounded-t-lg">
                <h2 className="text-lg font-medium text-gray-800">Previously registered skills</h2>
              </div>
              <div className="p-6 bg-white rounded-b-lg shadow-sm border border-pink-100">
                <p className="text-sm text-gray-600">You have no registered skills.</p>
                <div className="mt-4 space-y-3 text-xs">
                  <p className="text-pink-600/80">※This skills cannot be edited or edited. Also, the settings will not be reflected in the recommended jobs display, so we recommend setting skill one more time.</p>
                  <p className="text-pink-600/80">※If you include the text you have entered in the comments section in your profile, you will be more likely to be selected by clients.</p>
                  <p className="text-pink-600/80">※The old skills are scheduled to be discontinued after September 2019, so please migrate the skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSkills;