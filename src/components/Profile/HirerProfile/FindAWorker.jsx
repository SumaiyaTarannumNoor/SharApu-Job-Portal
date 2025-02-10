import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Person1 from '../../../../assets/People/Person1.jpg'
import Person2 from '../../../../assets/People/Person2.jpg'
import Person3 from '../../../../assets/people/Person3.jpg'
import Person4 from '../../../../assets/People/Person4.jpg'

const FindAWorker = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [followingStatus, setFollowingStatus] = useState({});
  const workersPerPage = 4;

  const skills = [
    'WordPress', 'VBA', 'DTP', 'Web Design', '3D Design', 'SEO',
    'Spanish Translation', 'Chinese Translation', 'English Translation',
    'Spanish Translation', 'Portuguese Translation', 'Russian Translation',
    'French Translation', 'German Translation', 'lighting', 'sales',
    'marketing', 'Excel', 'word', 'power point'
  ];

  const workers = [
    {
      name: 'Draringo',
      avatar: Person1,
      rating: 5,
      achievements: 1139,
      tasks: 2174,
      verified: false,
      description: 'With the motto of "quick and careful", I strive to do work that leads to the next step.'
    },
    {
      name: 'yf-united',
      avatar: Person2,
      rating: 5,
      achievements: 1093,
      tasks: 36,
      verified: false,
      description: 'If you have energy, you can do anything! I will do my best! Thank you for your support.'
    },
    {
      name: 'Toshinaga',
      avatar: Person3,
      rating: 0,
      achievements: 1058,
      tasks: 0,
      verified: true,
      description: "Nice to meet you, I'm Toshinaga. I studied welfare at a four-year university. I'm new to working from home, but I'll do my best with enthusiasm and sincerity. Thank you."
    },
    {
      name: 'himitu',
      avatar: Person4,
      rating: 5,
      achievements: 1037,
      tasks: 0,
      verified: false,
      description: 'There is no self-introduction registered'
    },
    {
        name: 'Draringo',
        avatar: Person1,
        rating: 5,
        achievements: 1139,
        tasks: 2174,
        verified: false,
        description: 'With the motto of "quick and careful", I strive to do work that leads to the next step.'
      },
      {
        name: 'yf-united',
        avatar: Person2,
        rating: 5,
        achievements: 1093,
        tasks: 36,
        verified: false,
        description: 'If you have energy, you can do anything! I will do my best! Thank you for your support.'
      },
      {
        name: 'Toshinaga',
        avatar: Person3,
        rating: 0,
        achievements: 1058,
        tasks: 0,
        verified: true,
        description: "Nice to meet you, I'm Toshinaga. I studied welfare at a four-year university. I'm new to working from home, but I'll do my best with enthusiasm and sincerity. Thank you."
      },
      {
        name: 'himitu',
        avatar: Person4,
        rating: 5,
        achievements: 1037,
        tasks: 0,
        verified: false,
        description: 'There is no self-introduction registered'
      },
        {
      name: 'Draringo',
      avatar: Person1,
      rating: 5,
      achievements: 1139,
      tasks: 2174,
      verified: false,
      description: 'With the motto of "quick and careful", I strive to do work that leads to the next step.'
    },
    {
      name: 'yf-united',
      avatar: Person2,
      rating: 5,
      achievements: 1093,
      tasks: 36,
      verified: false,
      description: 'If you have energy, you can do anything! I will do my best! Thank you for your support.'
    },
    {
      name: 'Toshinaga',
      avatar: Person3,
      rating: 0,
      achievements: 1058,
      tasks: 0,
      verified: true,
      description: "Nice to meet you, I'm Toshinaga. I studied welfare at a four-year university. I'm new to working from home, but I'll do my best with enthusiasm and sincerity. Thank you."
    },
    {
      name: 'himitu',
      avatar: Person4,
      rating: 5,
      achievements: 1037,
      tasks: 0,
      verified: false,
      description: 'There is no self-introduction registered'
    }
  ];


  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "fill-pink-500 text-pink-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  // Pagination logic
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);
  const totalPages = Math.ceil(workers.length / workersPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  // Following toggle function
  const toggleFollow = (workerName) => {
    setFollowingStatus(prev => ({
      ...prev,
      [workerName]: !prev[workerName]
    }));
  };

  const PaginationControls = () => {
    return (
      <div className="flex items-center justify-center space-x-2 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>
        
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === pageNumber
                  ? 'bg-pink-500 text-white'
                  : 'border hover:bg-gray-50'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Work from home Shufuti's list of work from home</h1>
      
      <div className="flex gap-6">
        {/* Skills Sidebar */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-sm font-semibold mb-3 text-gray-700">skill</h2>
          <div className="space-y-2">
            {skills.map((skill) => (
              <div key={skill} className="text-sm hover:text-pink-600 cursor-pointer text-gray-600">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-medium text-gray-700">
              Search Results ({indexOfFirstWorker + 1}-{Math.min(indexOfLastWorker, workers.length)} of {workers.length})
            </div>
            <select className="border rounded-md px-3 py-1 text-sm text-gray-600">
              <option>Most Projects</option>
            </select>
          </div>

          {/* Worker List */}
          <div className="space-y-6">
            {currentWorkers.map((worker) => (
              <div key={worker.name} className="border rounded-lg p-4 flex gap-4 bg-gray-50">
                <div className="flex-shrink-0">
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-pink-600">{worker.name}</span>
                    <RatingStars rating={worker.rating} />
                    {worker.verified && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Identity verified
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Achievements:</span> {worker.achievements} projects
                    <span className="mx-2">•</span>
                    <span className="font-medium">Tasks:</span> {worker.tasks}
                  </div>
                  <p className="text-sm text-gray-600">{worker.description}</p>
                </div>
                <button 
                  onClick={() => toggleFollow(worker.name)}
                  className={`px-4 py-1 text-sm rounded transition-all duration-200 ${
                    followingStatus[worker.name]
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {followingStatus[worker.name] ? 'Following' : '+ to follow'}
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <PaginationControls />
        </div>
      </div>
    </div>
  );
};

export default FindAWorker;