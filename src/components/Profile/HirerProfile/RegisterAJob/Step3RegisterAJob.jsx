import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const Step3RegisterAJob = () => {
  const [files, setFiles] = useState([]);

  const steps = [
    { number: 1, text: "Selecting a Job Type and Category" },
    { number: 2, text: "Enter your job description" },
    { number: 3, text: "Attachment of reference materials" },
    { number: 4, text: "Other Settings" },
    { number: 5, text: "Check the contents" }
  ];

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    if (fileList.length + files.length <= 3) {
      setFiles(prev => [...prev, ...fileList]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Register your first job</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
              ${step.number === 3 ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}>
              {step.number}
            </div>
            <span className="text-sm text-center max-w-[120px]">{step.text}</span>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
          ← STEP2 (Edit the job description)
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6 text-pink-500">
          STEP.3 Attachment of reference materials
        </h2>

        {/* File Upload Area */}
        <div className="mb-6">
          <label className="block mb-2">
            Attachment of reference materials
            <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">any</span>
          </label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 mb-4">Drop or click to select a file</p>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                className="hidden"
                id="fileInput"
              />
              <button 
                onClick={() => document.getElementById('fileInput').click()}
                className="text-pink-500 hover:text-pink-600"
              >
                Add a file
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <p>*File sizes up to 25MB</p>
            <p>Up to 3 files can be uploaded.</p>
            <p>*If you re-edit STEP 3, you will need to re-upload the file.</p>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-8">
          <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors">
            Next (Other Settings)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3RegisterAJob;