import React, { useState } from 'react';

const SearchForAJobPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    'Data entry and product registration',
    'lighting',
    'Sales, customer support, research',
    'Design, photography, and video',
    'Web production, Web design and development',
    'translation',
    'Shufuti outing'
  ];

  const popularTags = [
    'Beginners welcome',
    'No skills required',
    'Salary increase available',
    'Manual included',
    'Working time: 10 minutes or less',
    'questionnaire',
    'Product Registration',
    'Data Entry',
    'Transcription',
    'Limited to specific users'
  ];

  const jobs = [
    {
      id: 1,
      type: 'project',
      tags: ['Beginners welcome', 'No skills required', 'questionnaire'],
      title: 'We are looking for people who want to start a side job in earnest this year! Monitor...',
      reward: 1000,
      price: 1000,
      estimatedHourlyRate: 1000,
      company: {
        name: 'AW Recruitment Acco...',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 874
      },
      views: 78,
      membersOnly: true
    },
    {
      id: 2,
      type: 'project',
      tags: ['Beginners welcome', 'No skills required', 'Salary increase available'],
      title: '[No experience necessary!] Even beginners can earn over 2,000 yen per hour! We are ...',
      reward: 30000,
      price: 30,
      estimatedHourlyRate: 1800,
      company: {
        name: 'LEGS system',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 1000
      },
      views: 373,
      daysLeft: 14,
      hasStandingOrder: true
    },
    {
      id: 3,
      type: 'project',
      tags: ['Beginners welcome', 'Data Entry', 'No skills required'],
      title: 'Simple data entry work from home! Perfect for beginners looking for flexible hours...',
      reward: 5000,
      price: 50,
      estimatedHourlyRate: 1500,
      company: {
        name: 'DataPro Solutions',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 950
      },
      views: 245,
      daysLeft: 7,
      hasStandingOrder: true
    },
    {
      id: 4,
      type: 'project',
      tags: ['Transcription', 'Flexible hours', 'Work from home'],
      title: 'Audio transcription work available! Set your own schedule and work at your pace...',
      reward: 2500,
      price: 25,
      estimatedHourlyRate: 1200,
      company: {
        name: 'TranscribeNow Inc.',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 1100
      },
      views: 156,
      daysLeft: 10
    },
    {
      id: 5,
      type: 'project',
      tags: ['Beginners welcome', 'questionnaire', 'Product Registration'],
      title: 'Product testing and feedback needed! Share your opinions and earn rewards...',
      reward: 3000,
      price: 35,
      estimatedHourlyRate: 2000,
      company: {
        name: 'Consumer Research JP',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 1500
      },
      views: 289,
      membersOnly: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <nav className="text-sm mb-6">
        <a href="#" className="text-pink-500">Work from home SharApu</a>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-600">Log in</span>
      </nav>

      <h1 className="text-2xl font-bold mb-8">List of work-from-home jobs</h1>

      <div className="grid grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* Popular Tags Section */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold mb-4">Popular Tags</h2>
            <div className="space-y-2">
              {popularTags.map((tag, index) => (
                <div key={index} className="text-sm">
                  <a href="#" className="text-blue-400 hover:underline">#{tag}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Job Type & Free Word Section */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold mb-4">Job type / Free word</h2>
            
            {/* Job Type */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Job Type</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="jobType" value="all" defaultChecked className="text-blue-500" />
                  <span>all</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="jobType" value="project" className="text-blue-500" />
                  <span>project</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="jobType" value="task" className="text-blue-500" />
                  <span>task</span>
                </label>
              </div>
            </div>

            {/* Free Word */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Free Word</h3>
              <input 
                type="text"
                placeholder="Data entry receipt"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="text-blue-500" />
                <span>Show only open jobs</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="text-blue-500" />
                <span>Show only jobs with standing orders</span>
              </label>
            </div>

            {/* Search Button */}
            <button className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
              Narrow your search
            </button>
          </div>

          {/* Categories Section */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold mb-4">category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="border-b border-gray-200 py-2 last:border-b-0">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between text-left hover:text-blue-600"
                  >
                    <span className="text-sm">{category}</span>
                    <span className="text-xl font-bold">
                      {expandedCategories[category] ? '-' : '+'}
                    </span>
                  </button>
                  {expandedCategories[category] && (
                    <div className="mt-2 pl-4 text-sm">
                      {/* Subcategories can be added here */}
                      <div className="text-gray-600">Subcategory content...</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">Search Results</h2>
            <select className="border rounded p-2">
              <option>Newest</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map(job => (
              <div key={job.id} className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">{job.type}</span>
                  {job.hasStandingOrder && (
                    <span className="bg-orange-400 text-white px-2 py-1 rounded text-sm">
                      There is a standing order
                    </span>
                  )}
                  {job.tags.map((tag, index) => (
                    <span key={index} className="text-pink-600 text-sm">#{tag}</span>
                  ))}
                  <span className="ml-auto text-gray-600">Views: {job.views}</span>
                </div>

                <h3 className="text-blue-400 text-lg mb-2">[PR] {job.title}</h3>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2">
                      Reward amount: <span className="text-red-600 font-bold">{job.reward} yen</span>
                      <span className="text-gray-600 ml-2">(Price: {job.price} yen)</span>
                    </div>
                    <div>
                      Estimated hourly rate: <span className="font-bold">{job.estimatedHourlyRate} yen</span>
                    </div>
                  </div>
                  
                  {job.daysLeft && (
                    <div className="text-red-600">{job.daysLeft} days left</div>
                  )}
                  {job.membersOnly && (
                    <div className="font-bold">Members Only</div>
                  )}
                </div>

                {job.company && (
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                    <img 
                      src={job.company.logo} 
                      alt={job.company.name} 
                      className="w-12 h-12 rounded"
                    />
                    <div>
                      <div className="font-bold">{job.company.name}</div>
                      <div>Average hourly rate: {job.company.averageHourlyRate} yen</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForAJobPage;