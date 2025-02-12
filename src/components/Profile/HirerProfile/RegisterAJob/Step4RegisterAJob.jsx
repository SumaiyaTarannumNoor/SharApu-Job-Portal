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
      skills: ["Korean Translation", "Chinese Translation", "English Translation", "Other translations"]
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
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Please specify the scope of disclosure</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded">Required</div>
                <span className="text-gray-700 font-medium">Publication range</span>
              </div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span>Make it visible to everyone</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span>Restrict to logged-in users</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="visibility" className="text-pink-500 focus:ring-pink-400" />
                <span>Partners only (no partners)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Required Skills Section */}
        <div className="mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">any</span>
              <h3 className="font-medium">You can specify the required skills</h3>
            </div>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <h4 className="font-medium text-gray-700 mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <label key={skillIndex} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full border border-gray-200 hover:border-pink-300 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="text-pink-500 rounded focus:ring-pink-400"
                        />
                        <span className="text-sm">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
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
            Next (Check the contents)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4RegisterAJob;