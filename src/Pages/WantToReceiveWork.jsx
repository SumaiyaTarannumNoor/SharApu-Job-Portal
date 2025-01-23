import React from 'react';
import { Laptop } from 'lucide-react';

const WantToReceiveWork = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-pink-900 mb-2">
              Shufuti Easy Guide for those who want to receive work
            </h1>
            <p className="text-pink-700">
              Earn some extra cash in your spare time! Use your experience to work from home!
            </p>
            <p className="text-pink-600 mt-2">
              With a wide range of jobs and a comprehensive support system, working from home is the standard, making it easy to continue with a variety of work styles!
            </p>
          </div>
          <Laptop className="text-pink-500 w-16 h-16" />
        </div>

        {/* Job Selection Banner */}
        <div className="bg-pink-100 p-4 rounded-lg mb-8">
          <p className="text-pink-800 font-medium">
            Choose from a wide variety of jobs! Find a job that "I can do"!
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="mb-4 h-48 bg-pink-100 rounded-lg"></div>
            <h2 className="text-xl font-semibold text-pink-900 mb-3">
              It's okay if you're not confident in your skills or experience!
            </h2>
            <p className="text-pink-700">
              With the convenient tag function, you can search for the job that suits you with one click! There are jobs that even those who are new to telecommuting can join immediately, such as #beginners welcome, #no skills required, and jobs that can be completed with just a smartphone.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="mb-4 h-48 bg-pink-100 rounded-lg"></div>
            <h2 className="text-xl font-semibold text-pink-900 mb-3">
              You can continue it even with an irregular lifestyle!
            </h2>
            <p className="text-pink-700">
              There are many jobs available for surveys and simple data entry that can be done in the spare time between housework and childcare, or in a few hours at night. Many experienced workers are starting out little by little and finding their own pace.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Find a job now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WantToReceiveWork;