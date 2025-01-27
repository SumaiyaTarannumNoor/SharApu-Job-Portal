import React, { useState } from 'react';
import { X } from 'lucide-react';

const SearchForm = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());

  if (!isOpen) return null;

  const categories = [
    'For those who want to order work',
    'For those looking for work',
    "Beginner's Guide",
    'SharApu NEWS'
  ];

  const tags = [
    'Home Refreshment Guide',
    'Skill Development',
    'Introduction to working from home',
    'Popular Jobs',
    'notice',
    'Success stories',
    'Worker Interview',
    'Work from Home Guide',
    'Job Introduction',
    'Client Interview',
    'Data Entry'
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleTagClick = (tag) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      <div className="bg-white min-h-screen w-full md:w-96 absolute right-0 top-0 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Search Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Search</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-pink-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600 transition-colors">
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-pink-200 pb-2">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    px-3 py-1 rounded-full text-sm cursor-pointer
                    transition-all duration-200 hover:scale-105
                    ${selectedCategory === category 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-pink-200 pb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`
                    px-3 py-1 rounded-full text-sm transition-all duration-200
                    ${selectedTags.has(tag)
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  # {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="mb-20">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-pink-200 pb-2">
              Author
            </h3>
            <div className="text-gray-700">SharApu Management Office</div>
          </div>

          {/* Close Search Button */}
          <button
            onClick={onClose}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white text-gray-700 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
          >
            Close search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;