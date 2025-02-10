import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Check } from 'lucide-react';
import HirerDrawerNavigation from './HirerDrawerNavigation';

const RegisterAJob = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSwitchRole = () => {
    // Handle role switching logic
    console.log('Switching role...');
  };

  const MiniProfileCard = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Profile</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Settings</div>
        <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer text-red-600">Logout</div>
      </div>
    );
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
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              SharApu
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSwitchRole}
              className="
                px-6 py-2 
                font-semibold 
                text-white 
                rounded-full 
                bg-gradient-to-r from-pink-500 to-pink-600 
                hover:from-pink-600 hover:to-pink-700 
                transition-all duration-200 
                shadow-lg hover:shadow-xl 
                transform hover:-translate-y-0.5
                border border-pink-200
                hover:border-pink-300
              "
            >
              Switch Role
            </button>
            <div className="relative">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="w-6 h-6 text-white bg-pink-500 rounded-full p-1" />
                <span className="text-gray-700">ahmedul</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
              </div>
              <MiniProfileCard isOpen={isProfileOpen} />
            </div>
          </div>
        </div>

        <HirerDrawerNavigation />

        <div className="bg-green-50 p-2 text-sm text-green-800">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
          <Link to="/payment-account" className="text-pink-600 hover:text-pink-700 ml-1">
            Click here to register your account information &gt;
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link to="/" className="text-pink-600 hover:text-pink-700">Work from home Shufuti</Link>
            <span className="mx-2">&gt;</span>
            <span>Job registration</span>
          </div>

          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Job registration</h1>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-pink-800">
              <p className="font-medium mb-2">Please cooperate with the initial review to continue using the service.</p>
              <p className="text-sm">When you register a job for the first time, Shufuti will conduct an examination to ensure that you can continue to use the service.</p>
              <p className="text-sm text-pink-600">*The initial examination takes 1 to 3 business days.</p>
            </div>
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
                    {currentStep > step.number ? <Check className="w-6 h-6" /> : step.number}
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

          {/* Step 1 Content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              STEP 1. Select the job type and category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Types */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded text-sm">
                    Required
                  </div>
                  <h3 className="font-medium">Project Types</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    This type of system accepts applications from workers and allows for communication from ordering to delivery.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    You can give instructions and negotiate with the worker you are requesting via the communication board.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    Recommended for those who want to work slowly and steadily.
                  </li>
                </ul>
              </div>

              {/* Task Type */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-4">Task Type</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    This is a simple type that does not require any applications and simply evaluates the deliveries made by workers.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    You will not be able to communicate with the worker you are requesting via the message board.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    Recommended for those who want to collect a large amount of deliveries at once.
                  </li>
                </ul>
                <button className="mt-4 text-pink-600 text-sm hover:text-pink-700">
                  Task type usage examples
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end mt-8 gap-4">
              <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                Back
              </button>
              <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterAJob;