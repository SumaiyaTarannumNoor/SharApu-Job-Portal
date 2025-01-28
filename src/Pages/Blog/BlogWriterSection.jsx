import React from 'react';
import { Search } from 'lucide-react';

const BlogWriterSection = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full">
            <img 
              src="/api/placeholder/600/400" 
              alt="Writers working together" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Content Section */}
          <div className="space-y-4">
            <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                Shufuti Blog Writer Recruitment
              </h2>
              
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center space-x-2">
                  <span className="text-pink-400">•</span>
                  <span>We are currently looking for writers to make Shufuti's blog more exciting.</span>
                </p>
                
                <p className="flex items-center space-x-2">
                  <span className="text-pink-400">•</span>
                  <span>The theme of the blog is "A guide to success in working from home."</span>
                </p>
                
                <p className="flex items-center space-x-2">
                  <span className="text-pink-400">•</span>
                  <span>Let's work together to provide useful information to Shufuti users!</span>
                </p>
              </div>

              <div className="mt-6">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-sm hover:shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWriterSection;