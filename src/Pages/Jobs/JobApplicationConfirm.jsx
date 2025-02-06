import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const JobApplicationConfirm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Custom Warning Banner */}
      <div className="flex items-center gap-3 p-4 rounded-lg bg-pink-50 border border-pink-200 text-pink-800">
        <AlertCircle className="h-4 w-4 flex-shrink-0" />
        <p className="text-sm">
          If you do not register a financial institution account for withdrawals within 4 months of user registration, 
          functionality will be restricted.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <ol className="flex flex-wrap gap-2">
          <li>Work from home Shukfu</li>
          <li>›</li>
          <li>Search for a job</li>
          <li>›</li>
          <li>Data entry and product registration</li>
          <li>›</li>
          <li className="text-pink-600 font-medium">Confirmation of application details</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Apply</h1>
        
        <div className="bg-pink-50 p-4 rounded-md">
          <h2 className="font-semibold text-gray-700">Please check your application</h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700">Planned unit price:</span>
            <span className="text-pink-600 font-bold">1,000 yen</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700">Message:</span>
            <span>xx</span>
          </div>
        </div>

        {/* Terms */}
        <div className="space-y-4 bg-gray-50 p-4 rounded-md">
          <h3 className="font-semibold text-gray-700">[Please be sure to check]</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <span>•</span>
              <p>Through proper communication with clients, we will confirm and comply with delivery dates and application conditions, and strive to ensure the smooth progress of requests.</p>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <p>We will comply with laws and regulations and will not comply with work specifications or instructions that violate the Pharmaceuticals and Medical Device Act.</p>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <p>The usage fee will be deducted from the rewards you earn.</p>
            </li>
          </ul>
        </div>

        {/* Checkbox and Submit */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="rounded border-pink-300 text-pink-600 focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700">I have confirmed and agree to the above.</span>
          </label>

          <button
            className={`w-full py-3 rounded-md text-white font-medium transition-colors
              ${isChecked 
                ? 'bg-pink-500 hover:bg-pink-600' 
                : 'bg-pink-300 cursor-not-allowed'}`}
            disabled={!isChecked}
          >
            Apply
          </button>

          <button className="w-full text-pink-600 text-sm hover:underline">
            Fix it
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationConfirm;