import React from 'react';
import { Link } from 'react-router-dom';
import { Bold, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const Step2RegisterAJob = ({ currentStep, setCurrentStep }) => {
  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    setCurrentStep(3);
  };
  
  const steps = [
    { number: 1, title: 'Selecting a Job Type and Category' },
    { number: 2, title: 'Enter your job description' },
    { number: 3, title: 'Attachment of reference materials' },
    { number: 4, title: 'Other Settings' },
    { number: 5, title: 'Check the contents' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home Shufuti</Link>
            <span className="mx-2">&gt;</span>
            <span>Job registration</span>
          </div>

          {/* Progress Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center relative z-10">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${currentStep === step.number ? 'bg-pink-600 text-white' : 
                      currentStep > step.number ? 'bg-pink-400 text-white' : 
                      'bg-gray-200 text-gray-500'}
                    transition-all duration-200
                  `}>
                    {step.number}
                  </div>
                  <p className="text-xs text-center mt-2 w-24">{step.title}</p>
                  {index < steps.length - 1 && (
                    <div className={`absolute top-5 left-12 w-[calc(100%-3rem)] h-0.5 
                      ${currentStep > step.number ? 'bg-pink-400' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              STEP 2. Enter your job details
            </h2>

            <form className="space-y-6">
              {/* Job Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Job Title</label>
                </div>
                <input
                  type="text"
                  placeholder="Beginners welcome! Please let me help to type time and headwords"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Job Description</label>
                </div>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  {/* Text Editor Toolbar */}
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 flex items-center gap-4">
                    <button type="button" className="p-1 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignCenter className="w-4 h-4 text-gray-600" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <textarea
                    rows="10"
                    className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Required working hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Required working hours per day</label>
                </div>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="">Please select</option>
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4+ hours</option>
                </select>
              </div>

              {/* Standing Orders */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Standing Orders</label>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="standing_orders" className="text-pink-600 focus:ring-pink-500" />
                    <span className="text-gray-700">can be</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="standing_orders" className="text-pink-600 focus:ring-pink-500" />
                    <span className="text-gray-700">none</span>
                  </label>
                </div>
                <p className="text-sm text-gray-500">
                  *If you set this to "can be", it will be easier to match with workers who wish to continue.
                  <br />
                  For more details, click here.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Step2RegisterAJob;