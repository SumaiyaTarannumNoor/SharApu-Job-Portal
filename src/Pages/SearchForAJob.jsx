import React from 'react';

const SearchForAJobPage = () => {
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
      tags: ['Beginners welcome', 'Salary increase available'],
      title: 'Fully online office work from home! 3 days a week, 3 hours a day OK! Hourly wage...',
      reward: 15,
      price: 15,
      estimatedHourlyRate: 900,
      company: {
        name: 'WebHERO LLC',
        logo: '/api/placeholder/48/48',
        averageHourlyRate: 420
      },
      views: 670,
      daysLeft: 13,
      hasStandingOrder: true
    },
    {
      id: 2,
      type: 'project',
      tags: ['Beginners welcome', 'No skills required', 'questionnaire'],
      title: 'We are looking for people who want to start a side job in earnest this year! Monitor...',
      reward: 1000,
      price: 1000,
      estimatedHourlyRate: 1000,
      views: 78,
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
        <div className="col-span-1">
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