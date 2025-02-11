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
              {/* Tag Configuration */}
              <div className="space-y-4 border-t pt-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <h3 className="text-gray-700 font-medium">Tag Configuration</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Beginners Welcome',
                    'No skills required',
                    'Salary increase available',
                    'Manual included',
                    'Work time: 10 minutes or less',
                    'questionnaire',
                    'Product registration',
                    'Data Entry',
                    'transcription',
                    'Limited to specific users'
                  ].map((tag) => (
                    <label key={tag} className="flex items-center space-x-2 bg-pink-50 p-3 rounded-lg border border-pink-100 hover:border-pink-300 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="rounded text-pink-600 focus:ring-pink-500"
                      />
                      <span className="text-sm text-gray-700">#{tag}</span>
                    </label>
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  *You can set up to three tags that match the characteristics of your work.
                </p>
                <p className="text-sm text-gray-500">
                  *If there are any discrepancies with the job description, the secretariat may make corrections.
                </p>
              </div>

              {/* Work Schedule */}
              <div className="space-y-4 border-t pt-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Please set the work schedule</h3>
                  <p className="text-sm text-gray-600">
                    If there are any specifications for the days of the week or times that the worker will work, select "Yes" and enter the specifications in the text area.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    *Even if you select "None," you can enter additional information in the text area below.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                    <label className="text-gray-700 font-medium">Specify work date and time</label>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="work_schedule"
                        value="can_be"
                        className="text-pink-600 focus:ring-pink-500"
                      />
                      <span className="text-gray-700">can be</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="work_schedule"
                        value="none"
                        className="text-pink-600 focus:ring-pink-500"
                      />
                      <span className="text-gray-700">none</span>
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[100px]"
                      placeholder="Example: 4 hours between 10:00 and 17:00 on Mondays, Wednesdays, and Fridays"
                    />
                    <div className="absolute top-3 right-3 text-gray-400 text-sm">
                      <span className="text-pink-600">*</span> Optional
                    </div>
                  </div>
                </div>
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