import React, { useState } from 'react';
import legssystem from '../../assets/RecruiterIconImage/legssystem.png';
import logoazw from '../../assets/RecruiterIconImage/logoazw.png';
import lpemake from '../../assets/RecruiterIconImage/lpe_mark.jpg';
import mash from '../../assets/RecruiterIconImage/mash.png';
import mishonna from '../../assets/RecruiterIconImage/mishonna.jpg';
import webhero from '../../assets/RecruiterIconImage/webhero_logo_icon.png';

const SearchForAJobPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2; // Changed to 2 jobs per page

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
        logo: logoazw,
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
        logo: legssystem,
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
        name: 'LPE Solutions',
        logo: lpemake,
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
        name: 'Mash Corp',
        logo: mash,
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
        name: 'Web Hero',
        logo: webhero,
        averageHourlyRate: 1500
      },
      views: 289,
      membersOnly: true
    }
  ];

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="text-sm py-4 mb-4 flex items-center">
          <a href="#" className="text-pink-500">Work from home SharApu</a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">Log in</span>
        </nav>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">List of work-from-home jobs</h1>
          
          {/* Mobile Filter Button */}
          <button 
            className="lg:hidden px-4 py-2 bg-pink-500 text-white rounded-md"
            onClick={() => setIsSidebarOpen(true)}
          >
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className={`
            fixed lg:relative inset-y-0 left-0 transform 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 transition-transform duration-200 ease-in-out
            w-64 lg:w-1/4 bg-white lg:bg-transparent
            overflow-y-auto lg:overflow-visible
            z-50 lg:z-0
            p-6 lg:p-0
          `}>
            {/* Close button for mobile */}
            <button 
              className="lg:hidden absolute top-4 right-4 text-gray-500"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </button>

            <div className="space-y-6">
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
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Job Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="jobType" value="all" defaultChecked />
                      <span>all</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="jobType" value="project" />
                      <span>project</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="jobType" value="task" />
                      <span>task</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Free Word</h3>
                  <input 
                    type="text"
                    placeholder="Data entry receipt"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Show only open jobs</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Show only jobs with standing orders</span>
                  </label>
                </div>

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
                          <div className="text-gray-600">Subcategory content...</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-xl">Search Results</h2>
              <select className="border rounded p-2">
                <option>Newest</option>
              </select>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {currentJobs.map(job => (
                <div key={job.id} className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">{job.type}</span>
                    {job.hasStandingOrder && (
                      <span className="bg-orange-400 text-white px-2 py-1 rounded text-sm">
                        Standing order
                      </span>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="text-pink-600 text-sm">#{tag}</span>
                      ))}
                    </div>
                    <span className="ml-auto text-gray-600 text-sm">Views: {job.views}</span>
                  </div>

                  <h3 className="text-blue-400 text-base sm:text-lg mb-2">[PR] {job.title}</h3>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="mb-2">
                        <span className="block sm:inline">Reward amount: </span>
                        <span className="text-red-600 font-bold">{job.reward} yen</span>
                        <span className="text-gray-600 ml-2">(Price: {job.price} yen)</span>
                      </div>
                      <div>
                        <span className="block sm:inline">Estimated hourly rate: </span>
                        <span className="font-bold">{job.estimatedHourlyRate} yen</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 items-center">
                      {job.daysLeft && (
                        <div className="text-red-600">{job.daysLeft} days left</div>
                      )}
                      {job.membersOnly && (
                        <div className="font-bold">Members Only</div>
                      )}
                    </div>
                  </div>

                  {job.company && (
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                      <img 
                        src={job.company.logo} 
                        alt={job.company.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                      />
                      <div>
                        <div className="font-bold text-sm sm:text-base">{job.company.name}</div>
                        <div className="text-sm">Average hourly rate: {job.company.averageHourlyRate} yen</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-pink-500 text-white hover:bg-pink-600'
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-pink-500 text-white hover:bg-pink-600'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForAJobPage;