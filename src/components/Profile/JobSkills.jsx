import React, { useState } from 'react';
import UserSettingSidebar from './UserSettingSidebar';

const JobSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

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
    <div className="flex min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Sidebar */}
      <div className="w-64 p-4">
        <UserSettingSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
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
  );
};

export default JobSkills;