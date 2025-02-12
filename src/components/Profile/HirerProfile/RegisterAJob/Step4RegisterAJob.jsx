import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Step4RegisterAJob = ({ currentStep, setCurrentStep }) => {
  const handleBack = () => {
    setCurrentStep(3);
  };

  const handleNext = () => {
    setCurrentStep(5);
  };

  const steps = [
    { number: 1, text: "Selecting a Job Type and Category" },
    { number: 2, text: "Enter your job description" },
    { number: 3, text: "Attachment of reference materials" },
    { number: 4, text: "Other Settings" },
    { number: 5, text: "Check the contents" }
  ];

  const skillCategories = [
    {
      title: "Writing and administrative work",
      skills: ["lighting", "Excel", "Excel (macro)", "word", "power point", "PC operation", "Touch typing"]
    },
    {
      title: "translation",
      skills: ["Spanish Translation", "Chinese Translation", "English Translation", "Other translations"]
    },
    {
      title: "Web production and development",
      skills: ["WordPress", "VBA", "Web Design", "Web Development", "Website management"]
    },
    {
      title: "Photos and videos",
      skills: [
        "Camera photography (amateur)",
        "Videography (amateur)",
        "Camera photography (professional)",
        "Videography (Professional)",
        "Photo Editing",
        "Video Creation and Editing"
      ]
    },
    {
      title: "design",
      skills: ["DTP Design", "Illustration Creation"]
    },
    {
      title: "Sales and Marketing",
      skills: [
        "Power receiving support",
        "Outbound Calls",
        "Data Entry",
        "Customer Care",
        "Digital Marketing",
        "Offline Marketing"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Register your first job</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
              ${step.number === 4 ? 'bg-pink-500 text-white' : 
                step.number < 4 ? 'bg-pink-200 text-pink-700' : 
                'bg-gray-200 text-gray-600'}`}>
              {step.number}
            </div>
            <span className="text-sm text-center max-w-[120px]">{step.text}</span>
          </div>
        ))}
      </div>

      {/* Back Navigation */}
      <div className="mb-8">
        <button 
          onClick={handleBack}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          ← STEP3 (Attachment of reference materials)
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6 text-pink-500">
          STEP 4. Other settings
        </h2>

        {/* Publication Range Section */}
        <div className="mb-8">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Please specify the scope of disclosure</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded">Required</div>
                <span className="text-pink-900 font-medium">Publication range</span>
              </div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span className="text-pink-800">Make it visible to everyone</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span className="text-pink-800">Restrict to logged-in users</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span className="text-pink-800">Partners only (no partners)</span>
              </label>
            </div>
          </div>
        </div>

       {/* Required Skills Section */}
        <div className="mb-8">
        <div className="bg-pink-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
            <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">any</span>
            <h3 className="font-medium text-pink-800">You can specify the required skills</h3>
            </div>
            
            <div className="space-y-6">
            {skillCategories.map((category, index) => (
                <div key={index} className="border-b border-pink-100 pb-4 last:border-0">
                <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                    <input
                    type="checkbox"
                    className="text-pink-500 rounded focus:ring-pink-400"
                    />
                    <span className="font-medium text-pink-800">{category.title}</span>
                </label>
                <div className="ml-8 flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                    <label 
                        key={skillIndex} 
                        className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer transition-colors"
                    >
                        <input
                        type="checkbox"
                        className="text-pink-500 rounded focus:ring-pink-400"
                        />
                        <span className="text-pink-800 text-sm">{skill}</span>
                    </label>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
         {/* Welcome Jobs Section */}
         <div className="mt-8 bg-pink-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-pink-800 mb-4">
            You can select the welcome occupation for which you want to apply.
          </h3>
          
          {/* Administration */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Administration</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['General affairs', 'Sales Administration', 'General Affairs', 'Accounting', 'Administrative Assistant', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>
           {/* Medical care */}
           <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Medical care and nursing care</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['nurse', 'Nursing care', 'Medical Administration', 'pharmacist', 'Doctor', 'Dental hygienist/dental assistant', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sales/Service/Support */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Sales/Service/Support</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['Store Staff', 'Store Manager', 'Area Manager', 'Beauty consultant', 'Hairdresser', 'Customer Support', 'Help Desk', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sales and Marketing */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Sales and Marketing / Call Center</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['sales', 'Telemarketing Staff', 'consultant', 'marketing', 'public relations', 'plan', 'Teleoperator (receiving calls)', 'Teleoperator (caller)', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* WEB/Creative/System */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">WEB / Creative / System</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['Web Designer', 'Web Director', 'Web Engineer', 'Illustrator', 'DTP Designer', 'Photographer', 'Video creator', 'writer', 'Proofreading', 'edit', 'Copywriter', 'programmer', 'Systems Engineer', 'Network Engineer', 'Operational Management', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Language/Education */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Language/Education</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['translation', 'interpretation', 'Nursery teacher/kindergarten teacher', 'Teachers (Elementary, Middle, and High School)', 'University Lecturer', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Finance and Law */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">Finance and Law</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              {['Securities business', 'Banking', 'Financial Planner', 'Insurance Business', 'Administrative scrivener', 'Judicial scrivener', 'Social insurance and labor consultant', 'lawyer', 'others'].map((job, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                  <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                  <span className="text-pink-800 text-sm">{job}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
              <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
              <span className="font-medium text-pink-800">others</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
              <label className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="text-pink-800 text-sm">others</span>
              </label>
            </div>
          </div>
        </div>

        {/* Location Selection Section */}
        <div className="mt-8 bg-pink-50 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
            <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">any</span>
            <h3 className="font-medium text-pink-800">You can specify the location of the worker.</h3>
        </div>

        <div className="space-y-6">
            {/* Dhaka Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Dhaka Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Narsingdi', 'Kishoreganj', 'Manikganj', 'Munshiganj', 'Rajbari', 'Madaripur', 'Gopalganj', 'Faridpur', 'Shariatpur'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Chittagong Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Chittagong Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Chittagong', 'Cox\'s Bazar', 'Rangamati', 'Bandarban', 'Khagrachari', 'Feni', 'Lakshmipur', 'Comilla', 'Noakhali', 'Chandpur', 'Brahmanbaria'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Rajshahi Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Rajshahi Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Rajshahi', 'Chapainawabganj', 'Natore', 'Naogaon', 'Bogra', 'Joypurhat', 'Pabna', 'Sirajganj'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Khulna Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Khulna Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Khulna', 'Bagerhat', 'Satkhira', 'Jessore', 'Magura', 'Jhenaidah', 'Narail', 'Kushtia', 'Chuadanga', 'Meherpur'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Barisal Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Barisal Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Barisal', 'Bhola', 'Barguna', 'Pirojpur', 'Patuakhali', 'Jhalokati'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Sylhet Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Sylhet Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Rangpur Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Rangpur Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Rangpur', 'Dinajpur', 'Kurigram', 'Gaibandha', 'Nilphamari', 'Panchagarh', 'Thakurgaon', 'Lalmonirhat'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>

            {/* Mymensingh Division */}
            <div className="mb-6">
            <label className="flex items-center space-x-3 mb-3 cursor-pointer hover:text-pink-700">
                <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                <span className="font-medium text-pink-800">Mymensingh Division</span>
            </label>
            <div className="ml-8 flex flex-wrap gap-3">
                {['Mymensingh', 'Jamalpur', 'Sherpur', 'Netrokona'].map((district, index) => (
                <label key={index} className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-full hover:bg-pink-200 cursor-pointer">
                    <input type="checkbox" className="text-pink-500 rounded focus:ring-pink-400" />
                    <span className="text-pink-800 text-sm">{district}</span>
                </label>
                ))}
            </div>
            </div>
        </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4RegisterAJob;