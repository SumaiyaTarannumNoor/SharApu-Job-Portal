import React, { useState } from 'react';
import UserSettingSidebar from './UserSettingSidebar'; // Make sure path is correct

const PreferredJobs = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 p-4">
        <UserSettingSidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
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
                className="bg-pink-50 rounded-lg p-4"
              >
                <h2 className="font-medium text-pink-800 mb-3">
                  {category.title}
                </h2>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <input
                        type="checkbox"
                        id={`job-${index}-${itemIndex}`}
                        checked={selectedJobs.includes(item)}
                        onChange={() => handleJobSelection(item)}
                        className="mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <label
                        htmlFor={`job-${index}-${itemIndex}`}
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

export default PreferredJobs;