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
        "Spanish Translation",
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
    <div className="flex min-h-screen bg-pink-50">
      {/* Sidebar */}
      <div className="w-64 p-4">
        <UserSettingSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Skills</h1>
          <p className="text-sm text-gray-600 mb-2">
            You can set the skills you possess.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            By setting the skills, you will be able to display suitable recommended jobs, and you will be more likely to be selected by clients when applying.
          </p>

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <h2 className="font-medium text-gray-800 mb-3 bg-gray-100 p-2">
                  {category.title}
                </h2>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`skill-${index}-${itemIndex}`}
                        checked={selectedSkills.includes(item)}
                        onChange={() => handleSkillSelection(item)}
                        className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <label
                        htmlFor={`skill-${index}-${itemIndex}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedSkills.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-medium text-gray-800 mb-3">Previously registered skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedSkills.map((skill, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            className="mt-6 px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
          >
            Set skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSkills;