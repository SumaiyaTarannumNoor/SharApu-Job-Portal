import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PreferredJob = () => {
  const navigate = useNavigate();
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
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 mb-6 hover:text-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Settings
      </button>

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Interesting Job</h1>
        <p className="text-sm text-gray-600">
          Select the jobs you are interested in.
          When you set it, the jobs in the new job email will be selected from the checked categories.
          It will also be possible to display recommended jobs that suit you from the checked categories.
        </p>
      </div>

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

      <div className="flex justify-between mt-6">
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button 
          className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          onClick={() => {
            // Handle save logic here
            navigate(-1);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PreferredJob;