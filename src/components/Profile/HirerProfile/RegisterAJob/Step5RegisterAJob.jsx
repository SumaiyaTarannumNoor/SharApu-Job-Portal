import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Edit } from 'lucide-react';

const Step5RegisterAJob = ({ currentStep, setCurrentStep }) => {
  const handleBack = () => {
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const steps = [
    { number: 1, text: "Selecting a Job Type and Category" },
    { number: 2, text: "Enter your job description" },
    { number: 3, text: "Attachment of reference materials" },
    { number: 4, text: "Other Settings" },
    { number: 5, text: "Check the contents" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Register your first job</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
              ${step.number === 5 ? 'bg-pink-500 text-white' : 
                step.number < 5 ? 'bg-pink-200 text-pink-700' : 
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
          ← STEP4 (Other Settings)
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6 text-pink-500">
          STEP 5. Confirm your registration details
        </h2>

        {/* Review Sections */}
        <div className="space-y-6">
          {/* Step 1 Review */}
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">STEP 1</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
                <h3 className="font-medium text-pink-800">Job type and category</h3>
              </div>
              <button 
                onClick={() => setCurrentStep(1)}
                className="flex items-center text-pink-500 hover:text-pink-700"
              >
                <Edit className="w-4 h-4 mr-1" />
                Fix it
              </button>
            </div>
            <div className="ml-8 space-y-3">
              <div className="flex">
                <span className="text-pink-800 w-32">Type of work:</span>
                <span className="text-pink-600">project</span>
              </div>
              <div className="flex">
                <span className="text-pink-800 w-32">Job Category:</span>
                <span className="text-pink-600">Design, photography, and video: illustrations, logos, and banners</span>
              </div>
            </div>
          </div>

          {/* Step 2 Review */}
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">STEP 2</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
                <h3 className="font-medium text-pink-800">Job description</h3>
              </div>
              <button 
                onClick={() => setCurrentStep(2)}
                className="flex items-center text-pink-500 hover:text-pink-700"
              >
                <Edit className="w-4 h-4 mr-1" />
                Fix it
              </button>
            </div>
            {/* Add description content here */}
          </div>

          {/* Step 3 Review */}
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">STEP 3</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
                <h3 className="font-medium text-pink-800">Reference materials</h3>
              </div>
              <button 
                onClick={() => setCurrentStep(3)}
                className="flex items-center text-pink-500 hover:text-pink-700"
              >
                <Edit className="w-4 h-4 mr-1" />
                Fix it
              </button>
            </div>
            {/* Add uploaded files list here */}
          </div>

          {/* Step 4 Review */}
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">STEP 4</span>
                <ChevronRight className="w-4 h-4 text-pink-500" />
                <h3 className="font-medium text-pink-800">Other settings</h3>
              </div>
              <button 
                onClick={() => setCurrentStep(4)}
                className="flex items-center text-pink-500 hover:text-pink-700"
              >
                <Edit className="w-4 h-4 mr-1" />
                Fix it
              </button>
            </div>
            {/* Add other settings content here */}
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-8 border-t border-pink-100 pt-6">
          <div className="bg-pink-50 p-4 rounded-lg mb-6">
            <p className="text-pink-800">
              Please check all the information you entered.
              After confirming that there are no errors, click the "Register" button below.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5RegisterAJob;