import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Edit } from 'lucide-react';

const Step5RegisterAJob = ({ currentStep, setCurrentStep }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleBack = () => {
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      alert('Please confirm and agree to the terms before proceeding.');
      return;
    }
    setCurrentStep(6);
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
            <div className="ml-8 space-y-4">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Features required</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[120px]">Deliver a list:</span>
                    <span className="text-pink-600">Excel (.xlsx)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[120px]">Storage Drive:</span>
                    <span className="text-pink-600">Google Drive</span>
                  </div>
                </div>
              </div>

              {/* Features method */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Features method</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[120px]">Google docs/sheets:</span>
                    <span className="text-pink-600">Work according to the specified format</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[120px]">Cloud storage:</span>
                    <span className="text-pink-600">Google Drive, Dropbox, etc.</span>
                  </div>
                </div>
              </div>

              {/* Work procedure */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Work procedure</h4>
                <div className="ml-4 text-pink-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Work according to the specified format</li>
                    <li>Check calculations and data accuracy</li>
                    <li>Payment will be made after final delivery is completed</li>
                  </ul>
                </div>
              </div>

              {/* Features time */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Features time</h4>
                <div className="ml-4 text-pink-800">
                  <p>Within 3 days</p>
                </div>
              </div>

              {/* Communication tools */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Communication tools to use after placing an order</h4>
                <div className="ml-4 text-pink-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Slack</li>
                    <li>Email</li>
                    <li>Direct messaging system</li>
                  </ul>
                </div>
              </div>

              {/* Interview Content */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Interview Content</h4>
                <div className="ml-4 text-pink-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Schedule and set deadlines</li>
                    <li>File format discussion and confirm</li>
                    <li>Fixed fee negotiation</li>
                    <li>People who can communicate smoothly</li>
                  </ul>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3">
                <h4 className="text-pink-700 font-medium">Job Details</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Required working hours per day:</span>
                    <span className="text-pink-600">Any</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Standing Orders:</span>
                    <span className="text-pink-600">none</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Tag configuration:</span>
                    <span className="text-pink-600">Beginners welcome - No skills required</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Specify work date and time:</span>
                    <span className="text-pink-600">Not specified</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Price per item:</span>
                    <span className="text-pink-600">500 yen</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Estimated time per item:</span>
                    <span className="text-pink-600">5 days</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Estimated hourly rate:</span>
                    <span className="text-pink-600">10,000 yen</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Number of orders per month:</span>
                    <span className="text-pink-600">20 Results</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Number of people expected to be recruited:</span>
                    <span className="text-pink-600">2 people</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-800 min-w-[160px]">Application period:</span>
                    <span className="text-pink-600">7 day term (2023/3/21 - Thursday)</span>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="ml-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-pink-800">Uploaded file:</span>
                <span className="text-pink-600">Ok.png</span>
              </div>
            </div>
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
            <div className="ml-8 space-y-4">
              {/* Settings Details */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="text-pink-800 min-w-[140px]">Publishing settings:</span>
                  <span className="text-pink-600">Make it visible to everyone</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-pink-800 min-w-[140px]">Device:</span>
                  <span className="text-pink-600">Android</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-pink-800 min-w-[140px]">Specifying skills:</span>
                  <span className="text-pink-600">English Translation</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-pink-800 min-w-[140px]">Welcome Jobs:</span>
                  <span className="text-pink-600">General affairs</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-pink-800 min-w-[140px]">Specifying an area:</span>
                  <span className="text-pink-600">Hokkaido</span>
                </div>
              </div>

              {/* Confirmation Checklist */}
              <div className="bg-pink-50 rounded-lg border border-pink-100 p-4 mt-6">
                <h4 className="text-pink-700 font-medium mb-4">[Please be sure to check]</h4>
                <div className="space-y-3 ml-4">
                  <p className="text-pink-800 text-sm">
                    • There are no work specifications or instructions that conflict with the Pharmaceuticals and Medical Device Act or the Act against Unjustifiable Premiums and Misleading Representations.
                  </p>
                  <p className="text-pink-800 text-sm">
                    • There are no workspecifications or instructions that infringe on copyrights, trademarks, etc.
                  </p>
                  <p className="text-pink-800 text-sm">
                    • In addition, we confirm that the request does not contain any content that violates laws and regulations, or that defames, libels or slanders any individual or corporation, or that contains false information about individuals or corporations, or obscene content, or any other content that goes against public order and morals.
                  </p>
                  <p className="text-pink-800 text-sm">
                    • Description based on the Specified Commercial Transactions Act
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="text-pink-500 rounded focus:ring-pink-400"
                  />
                  <span className="text-pink-800">I have confirmed and agree to the above.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-8 border-t border-pink-100 pt-6">
          <div className="bg-pink-50 p-4 rounded-lg mb-6">
            <p className="text-pink-800">
              Please check all the information you entered.
              After confirming that there are no errors, click the "Request an initial review" button below.
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
              Request an initial review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5RegisterAJob;