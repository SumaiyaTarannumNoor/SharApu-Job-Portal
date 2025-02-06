import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const JobApplicationForm = () => {
  const [message, setMessage] = useState('');

  return (
    <div id="apply-section" className="p-6 border-t border-gray-100">
      <div className="relative mb-8">
        <h2 className="text-2xl font-bold text-pink-600 inline-block">Apply for this job</h2>
        <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-pink-500 to-pink-300"></div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-sm">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount per item
                <span className="ml-2 inline-block px-2 py-0.5 bg-red-500 text-white text-xs rounded">Required</span>
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="form-input p-4 border-pink-500 border-2 w-32 rounded-lg border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200"
                  min="1"
                />
                <span className="ml-2 text-gray-600">yen</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Application Message
                <span className="ml-2 inline-block px-2 py-0.5 bg-red-500 text-white text-xs rounded">Required</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-4 border-pink-500 border-2 w-full h-40 rounded-lg border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200"
                placeholder="Many clients judge the job based on the message you send when applying, so the content is very important. Make sure to write down your enthusiasm, past experience, and how you can contribute to the job!"
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4 p-4 border-blue-500 border-2">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <p className="mb-2">If you are unsure how to write your application message, 
                    <a href="#" className="text-blue-600 hover:underline ml-1">click here</a>
                  </p>
                  <p>By registering your 
                    <a href="#" className="text-blue-600 hover:underline mx-1">skills</a>,
                    <a href="#" className="text-blue-600 hover:underline mx-1">experience</a>,
                    <a href="#" className="text-blue-600 hover:underline mx-1">available working hours</a>, and
                    <a href="#" className="text-blue-600 hover:underline mx-1">desire to continue working</a>, 
                    you can better appeal to clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium
                           hover:from-pink-600 hover:to-pink-700 transition-all duration-200 
                           shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Next (Confirm the contents)
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;