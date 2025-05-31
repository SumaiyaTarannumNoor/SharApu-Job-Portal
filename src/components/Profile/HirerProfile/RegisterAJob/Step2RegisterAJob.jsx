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
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home SharApu</Link>
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

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              STEP 2. Enter your job details
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Job Description */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Job Description Details</label>
                </div>
                
                <div className="border border-gray-300 rounded-lg overflow-hidden">
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
                  
                  <div className="p-4 space-y-6">
                    {/* Reason for Request */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Reason for Request</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        rows="3"
                        placeholder="Enter the reason for the data entry work request"
                        defaultValue="To support data entry work. We are recruiting to improve operational efficiency and accuracy."
                      />
                    </div>

                    {/* Background */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Background</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        rows="3"
                        placeholder="Describe the project background"
                        defaultValue="With the launch of a new project, a large amount of data entry work has occurred. We are looking for someone who can work accurately in a short period of time."
                      />
                    </div>

                    {/* Estimated Number of Tasks */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Estimated Number of Tasks</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number"
                          className="w-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          defaultValue="100"
                        />
                        <span className="text-gray-600">items</span>
                      </div>
                    </div>

                    {/* Data Entry Fields */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Data Entry Fields</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Name',
                          'Address',
                          'Phone Number',
                          'Email',
                          'Product Name',
                          'Price',
                          'Quantity'
                        ].map((field) => (
                          <label key={field} className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                            <input 
                              type="checkbox"
                              className="mr-2 h-4 w-4 accent-pink-600 rounded focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                              defaultChecked
                            />
                            <span className="text-sm">{field}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Compensation */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Compensation</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number"
                          className="w-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          defaultValue="13"
                        />
                        <span className="text-gray-600">yen per item</span>
                      </div>
                    </div>

                    {/* File Format */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">File Format for Submission</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input 
                            type="checkbox"
                            className="mr-2 h-4 w-4 accent-pink-600 rounded focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            defaultChecked
                          />
                          <span>Excel (.xlsx)</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="checkbox"
                            className="mr-2 h-4 w-4 accent-pink-600 rounded focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            defaultChecked
                          />
                          <span>CSV (.csv)</span>
                        </label>
                      </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Delivery Method</label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <option>Using Shufti's delivery system</option>
                      </select>
                    </div>

                    {/* Work Procedure */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Work Procedure</label>
                      <div className="space-y-2">
                        {[
                          'Enter data according to the specified format',
                          'Verify data accuracy after entry',
                          'Save the delivery file in the specified format (Excel or CSV)',
                          'Deliver through the system'
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-pink-600 font-medium">{index + 1}.</span>
                            <input 
                              type="text"
                              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                              defaultValue={step}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Deadline</label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <option>Within 7 days from order date</option>
                        <option>Within 14 days from order date</option>
                        <option>Within 30 days from order date</option>
                      </select>
                    </div>

                    {/* Communication Tools */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Communication Tools</label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <option>Shufti's Communication Board</option>
                      </select>
                      <p className="text-sm text-pink-600">
                        *The use of external communication tools before ordering is prohibited. Please use Shufti's communication board before ordering.
                      </p>
                    </div>

                    {/* Interview */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Interview for Selection</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input 
                            type="radio"
                            name="interview"
                            className="mr-2 h-4 w-4 accent-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            defaultChecked
                          />
                          <span>None (Messages will be exchanged as needed)</span>
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="radio"
                            name="interview"
                            className="mr-2 h-4 w-4 accent-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                          />
                          <span>Required</span>
                        </label>
                      </div>
                    </div>

                    {/* Preferred Qualifications */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Preferred Qualifications</label>
                      <div className="space-y-2">
                        {[
                          'Experience in data entry',
                          'Good at detailed work',
                          'Able to meet deadlines'
                        ].map((qual, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input 
                              type="text"
                              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                              defaultValue={qual}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Application Message */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Application Message Example</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        rows="4"
                        defaultValue="Hello. I am interested in the data entry job. I am committed to meeting deadlines and ensuring accurate work. I look forward to working with you."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Working Hours Section */}
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

              {/* Standing Orders Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-pink-600 text-white px-2 py-0.5 text-xs rounded">Required</div>
                  <label className="text-gray-700 font-medium">Standing Orders</label>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="standing_orders" 
                      className="h-4 w-4 accent-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    />
                    <span className="text-gray-700">can be</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="standing_orders" 
                      className="h-4 w-4 accent-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    />
                    <span className="text-gray-700">none</span>
                  </label>
                </div>
                <p className="text-sm text-gray-500">
                  *If you set this to "can be", it will be easier to match with workers who wish to continue.
                  <br />
                  For more details, click here.
                </p>
              </div>

              {/* Tag Configuration Section */}
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Tag Configuration</h3>
                  <p className="text-sm text-pink-600 mt-2">
                    Please select tags that match your job characteristics
                    <span className="text-gray-500 ml-1">
                      (You can select up to 3 tags)
                    </span>
                  </p>
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
                    'transcription'
                  ].map((tag) => (
                    <label key={tag} className="flex items-center space-x-2 bg-pink-50 p-3 rounded-lg border border-pink-100 hover:border-pink-300 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-pink-600 rounded focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                      />
                      <span className="text-sm text-gray-700">#{tag}</span>
                    </label>
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  *If there are any discrepancies with the job description, the secretariat may make corrections.
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