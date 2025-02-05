import React, { useState } from 'react';
import UserSettingSidebar from './UserSettingSidebar';

const JobExpertises = () => {
  const [selectedExpertises, setSelectedExpertises] = useState([]);

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 p-4">
        <UserSettingSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
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
                className="bg-pink-50/50 rounded-lg p-4"
              >
                <h2 className="font-medium text-gray-800 mb-3 bg-gray-100 p-2 rounded">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`expertise-${index}-${itemIndex}`}
                        checked={selectedExpertises.includes(item)}
                        onChange={() => handleExpertiseSelection(item)}
                        className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <label
                        htmlFor={`expertise-${index}-${itemIndex}`}
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

          <button 
            className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobExpertises;