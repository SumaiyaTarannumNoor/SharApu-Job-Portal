import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown, X } from 'lucide-react';
import DrawerNavigation from '../components/Profile/DrawerNavigation';
import MiniProfileCard from '../components/Profile/MiniProfileCard';
import legssystem from '../../assets/RecruiterIconImage/legssystem.png';
import logoazw from '../../assets/RecruiterIconImage/logoazw.png';
import lpemake from '../../assets/RecruiterIconImage/lpe_mark.jpg';
import mash from '../../assets/RecruiterIconImage/mash.png';
import mishonna from '../../assets/RecruiterIconImage/mishonna.jpg';
import webhero from '../../assets/RecruiterIconImage/webhero_logo_icon.png';

const SearchForAJobPage = () => {
  // Location and navigation state
  const location = useLocation();
  const navigate = useNavigate();
  const showNav = location.state?.from === 'mainProfile';

  // Component states
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJobType, setSelectedJobType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    onlyOpenJobs: false,
    onlyStandingOrders: false
  });

  // Constants
  const jobsPerPage = 8;
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
          name: 'Mishonna',
          logo: mishonna,
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
      },
      // Adding 30 more jobs
      {
        id: 6,
        type: 'task',
        tags: ['Data Entry', 'Flexible hours', 'Manual included'],
        title: 'Online data entry specialist needed for growing e-commerce platform...',
        reward: 2800,
        price: 28,
        estimatedHourlyRate: 1400,
        company: {
          name: 'Web Hero',
          logo: webhero,
          averageHourlyRate: 1500
        },
        views: 167,
        daysLeft: 5
      },
      {
        id: 7,
        type: 'project',
        tags: ['Translation', 'Japanese to English', 'Flexible schedule'],
        title: 'Japanese to English translation project - Technical documentation...',
        reward: 4500,
        price: 45,
        estimatedHourlyRate: 2200,
        company: {
          name: 'LPE Solutions',
          logo: lpemake,
          averageHourlyRate: 950
        },
        views: 423,
        hasStandingOrder: true
      },
      {
        id: 8,
        type: 'task',
        tags: ['Product Registration', 'No experience needed', 'Quick tasks'],
        title: 'Product listing and categorization for online marketplace...',
        reward: 1500,
        price: 15,
        estimatedHourlyRate: 1200,
        company: {
          name: 'Mash Corp',
          logo: mash,
          averageHourlyRate: 1100
        },
        views: 198,
        membersOnly: true
      },
      {
        id: 9,
        type: 'project',
        tags: ['Content Writing', 'SEO', 'Long-term'],
        title: 'Content writers needed for growing blog platform - Various topics...',
        reward: 3500,
        price: 35,
        estimatedHourlyRate: 1750,
        company: {
          name: 'LEGS system',
          logo: legssystem,
          averageHourlyRate: 1000
        },
        views: 312,
        daysLeft: 20
      },
      {
        id: 10,
        type: 'task',
        tags: ['Customer Support', 'Email handling', 'Training provided'],
        title: 'Email support representative - Part-time position available...',
        reward: 2000,
        price: 20,
        estimatedHourlyRate: 1300,
        company: {
          name: 'AW Recruitment Acco...',
          logo: logoazw,
          averageHourlyRate: 874
        },
        views: 245,
        hasStandingOrder: true
      },
      {
        id: 11,
        type: 'project',
        tags: ['Social Media', 'Content Creation', 'Creative'],
        title: 'Social media content creator needed for fashion brand...',
        reward: 4000,
        price: 40,
        estimatedHourlyRate: 2000,
        company: {
          name: 'Web Hero',
          logo: webhero,
          averageHourlyRate: 1500
        },
        views: 378,
        daysLeft: 15
      },
      {
        id: 12,
        type: 'task',
        tags: ['Research', 'Data Collection', 'Flexible hours'],
        title: 'Market research data collection - Work from home opportunity...',
        reward: 2200,
        price: 22,
        estimatedHourlyRate: 1100,
        company: {
          name: 'LPE Solutions',
          logo: lpemake,
          averageHourlyRate: 950
        },
        views: 156,
        membersOnly: true
      },
      {
        id: 13,
        type: 'project',
        tags: ['Video Editing', 'Creative', 'Software provided'],
        title: 'Video editor needed for YouTube channel content...',
        reward: 5000,
        price: 50,
        estimatedHourlyRate: 2500,
        company: {
          name: 'Mash Corp',
          logo: mash,
          averageHourlyRate: 1100
        },
        views: 289,
        hasStandingOrder: true
      },
      {
        id: 14,
        type: 'task',
        tags: ['Transcription', 'Audio files', 'Weekly payments'],
        title: 'Audio transcription work - Medical terminology knowledge a plus...',
        reward: 2800,
        price: 28,
        estimatedHourlyRate: 1400,
        company: {
          name: 'LEGS system',
          logo: legssystem,
          averageHourlyRate: 1000
        },
        views: 234,
        daysLeft: 8
      },
      {
        id: 15,
        type: 'project',
        tags: ['Web Testing', 'Bug reporting', 'Technical'],
        title: 'Website testing and bug reporting - Experience with Chrome DevTools...',
        reward: 3200,
        price: 32,
        estimatedHourlyRate: 1600,
        company: {
          name: 'AW Recruitment Acco...',
          logo: logoazw,
          averageHourlyRate: 874
        },
        views: 167,
        membersOnly: true
      },
      {
        id: 16,
        type: 'task',
        tags: ['Data Analysis', 'Excel', 'Part-time'],
        title: 'Excel data analyst needed for market research project...',
        reward: 3800,
        price: 38,
        estimatedHourlyRate: 1900,
        company: {
          name: 'Web Hero',
          logo: webhero,
          averageHourlyRate: 1500
        },
        views: 423,
        hasStandingOrder: true
      },
      {
        id: 17,
        type: 'project',
        tags: ['Content Writing', 'Technical', 'Long-term'],
        title: 'Technical writer needed for software documentation...',
        reward: 4200,
        price: 42,
        estimatedHourlyRate: 2100,
        company: {
          name: 'LPE Solutions',
          logo: lpemake,
          averageHourlyRate: 950
        },
        views: 198,
        daysLeft: 12
      },
      {
        id: 18,
        type: 'task',
        tags: ['Customer Service', 'Chat support', 'Training provided'],
        title: 'Live chat customer service representative - Night shift available...',
        reward: 2500,
        price: 25,
        estimatedHourlyRate: 1250,
        company: {
          name: 'Mishonna',
          logo: mishonna,
          averageHourlyRate: 1100
        },
        views: 312,
        membersOnly: true
      },
      {
        id: 19,
        type: 'project',
        tags: ['Social Media', 'Marketing', 'Analytics'],
        title: 'Social media marketing specialist - Analytics and reporting...',
        reward: 4800,
        price: 48,
        estimatedHourlyRate: 2400,
        company: {
          name: 'LEGS system',
          logo: legssystem,
          averageHourlyRate: 1000
        },
        views: 245,
        hasStandingOrder: true
      },
      {
        id: 20,
        type: 'task',
        tags: ['Research', 'Academic', 'Flexible schedule'],
        title: 'Academic research assistant - Literature review and summary...',
        reward: 3000,
        price: 30,
        estimatedHourlyRate: 1500,
        company: {
          name: 'AW Recruitment Acco...',
          logo: logoazw,
          averageHourlyRate: 874
        },
        views: 378,
        daysLeft: 18
      },
      {
        id: 21,
        type: 'project',
        tags: ['Graphic Design', 'Creative', 'Portfolio required'],
        title: 'Graphic designer needed for brand identity project...',
        reward: 5500,
        price: 55,
        estimatedHourlyRate: 2750,
        company: {
          name: 'Web Hero',
          logo: webhero,
          averageHourlyRate: 1500
        },
        views: 156,
        membersOnly: true
      },
      {
        id: 22,
        type: 'task',
        tags: ['Data Entry', 'Spreadsheets', 'Basic Excel'],
        title: 'Spreadsheet data entry and formatting project...',
        reward: 1800,
        price: 18,
        estimatedHourlyRate: 900,
        company: {
          name: 'LPE Solutions',
          logo: lpemake,
          averageHourlyRate: 950
        },
        views: 289,
        hasStandingOrder: true
      },
      {
        id: 23,
        type: 'project',
        tags: ['Content Creation', 'Video', 'Creative'],
        title: 'Video content creator for educational platform...',
        reward: 4500,
        price: 45,
        estimatedHourlyRate: 2250,
        company: {
          name: 'Mash Corp',
          logo: mash,
          averageHourlyRate: 1100
        },
        views: 234,
        daysLeft: 25
      },
      {
        id: 24,
        type: 'task',
        tags: ['Translation', 'Technical', 'Specialized'],
        title: 'Technical manual translation - Engineering background preferred...',
        reward: 3500,
        price: 35,
        estimatedHourlyRate: 1750,
        company: {
          name: 'LEGS system',
          logo: legssystem,
          averageHourlyRate: 1000
        },
        views: 167,
        membersOnly: true
      },
      {
        id: 25,
        type: 'project',
        tags: ['Web Development', 'Frontend', 'React'],
        title: 'Frontend developer needed for e-commerce website...',
        reward: 6000,
        price: 60,
        estimatedHourlyRate: 3000,
        company: {
          name: 'AW Recruitment Acco...',
          logo: logoazw,
          averageHourlyRate: 874
        },
        views: 423,
        hasStandingOrder: true
      },
      {
        id: 26,
        type: 'task',
        tags: ['Customer Support', 'Phone', 'Part-time'],
        title: 'Phone support representative - Weekend shifts available...',
        reward: 2200,
        price: 22,
        estimatedHourlyRate: 1100,
        company: {
          name: 'Web Hero',
          logo: webhero,
          averageHourlyRate: 1500
        },
        views: 198,
        daysLeft: 9
      },
      {
        id: 27,
        type: 'project',
        tags: ['Content Writing', 'Blog', 'SEO'],
        title: 'Blog content writer needed for tech startup...',
        reward: 3800,
        price: 38,
        estimatedHourlyRate: 1900,
        company: {
          name: 'LPE Solutions',
          logo: lpemake,
          averageHourlyRate: 950
        },
        views: 312,
        membersOnly: true
      },
      {
        id: 28,
        type: 'task',
        tags: ['Research', 'Market Analysis', 'Report Writing'],
        title: 'Market research analyst - Competitor analysis project...',
        reward: 4000,
        price: 40,
        estimatedHourlyRate: 2000,
        company: {
          name: 'Mash Corp',
          logo: mash,
          averageHourlyRate: 1100
        },
        views: 245,
        hasStandingOrder: true
      },
  ];

  // Navigation handler
  const handleJobClick = (job) => {
    navigate('/job-details', { state: { job } });
  };

  // Filter and search handlers
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleJobTypeChange = (type) => {
    setSelectedJobType(type);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
    setCurrentPage(1);
  };

  // Updated search function
  const handleSearch = () => {
    setCurrentPage(1);
    // The filtering logic is in the filteredJobs function
  };

  // Updated onChange handler for search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // If you want real-time filtering, uncomment the line below
    // setCurrentPage(1);
  };

  // Updated filtering function with comprehensive keyword search
  const filteredJobs = jobs.filter(job => {
    // Filter by job type (project, task, or all)
    if (selectedJobType !== 'all' && job.type !== selectedJobType) return false;
    
    // Filter by search term (keywords)
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      // Check if the search term appears in the job title
      const titleMatch = job.title.toLowerCase().includes(searchTermLower);
      // Check if the search term matches any tags
      const tagMatch = job.tags.some(tag => tag.toLowerCase().includes(searchTermLower));
      // Check if the search term appears in the company name
      const companyMatch = job.company.name.toLowerCase().includes(searchTermLower);
      
      // Return true only if the search term matches any of these fields
      if (!(titleMatch || tagMatch || companyMatch)) return false;
    }
    
    // Filter for standing orders
    if (filters.onlyStandingOrders && !job.hasStandingOrder) return false;
    
    // Filter for open jobs (those with days left)
    if (filters.onlyOpenJobs && !job.daysLeft) return false;
    
    // If all filters pass, include this job
    return true;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Conditional Navigation */}
      {showNav && (
        <header className="bg-white shadow-sm mb-8">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-2xl font-bold text-pink-600">
                SharApu
              </Link>
            </div>
            <div className="relative">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="w-6 h-6 text-white bg-pink-500 rounded-full p-1" />
                <span className="text-gray-700">ahmedul</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
              </div>
              <MiniProfileCard isOpen={isProfileOpen} />
            </div>
          </div>

          <DrawerNavigation />

          <div className="bg-green-50 p-2 text-sm text-green-800">
            If you do not register a financial institution account for withdrawals within 4 months of user registration, functionality will be restricted. 
            <button className="text-pink-600 hover:text-pink-700 ml-1">
              Click here to register your account information &gt;
            </button>
          </div>
        </header>
      )}

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4 flex items-center">
          <Link to="/" className="text-pink-500 hover:underline">Work from home SharApu</Link>
          <span className="mx-2 text-gray-500">&gt;</span>
          <span className="text-gray-600">Search Jobs</span>
        </nav>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">List of work-from-home jobs</h1>

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
            {/* Mobile close button */}
            <button 
              className="lg:hidden absolute top-4 right-4 text-gray-500"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {/* Popular Tags */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-bold mb-4">Popular Tags</h2>
                <div className="space-y-2">
                  {popularTags.map((tag, index) => (
                    <div key={index} className="text-sm">
                      <button 
                        onClick={() => {
                          setSearchTerm(tag);
                          setCurrentPage(1);
                        }}
                        className="text-pink-500 hover:underline"
                      >
                        #{tag}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type & Search */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-bold mb-4">Job type / Key word</h2>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {['all', 'project', 'task'].map(type => (
                      <label key={type} className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="jobType" 
                          value={type}
                          checked={selectedJobType === type}
                          onChange={() => handleJobTypeChange(type)}
                        />
                        <span className="capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Key Word</h3>
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Data entry receipt"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="space-y-3">
                  {['onlyOpenJobs', 'onlyStandingOrders'].map((filterName) => (
                    <label key={filterName} className="flex items-center gap-2">
                      <input 
                        type="checkbox"
                        checked={filters[filterName]}
                        onChange={() => handleFilterChange(filterName)}
                      />
                      <span>
                        {filterName === 'onlyOpenJobs' ? 'Show only open jobs' : 'Show only jobs with standing orders'}
                      </span>
                    </label>
                  ))}
                </div>

                <button 
                  onClick={handleSearch}
                  className="w-full mt-4 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Categories */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="border-b border-gray-200 py-2 last:border-b-0">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex items-center justify-between text-left hover:text-pink-500"
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
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-xl">Search Results</h2>
              <select className="border rounded p-2">
                <option>Newest</option>
                <option>Highest Paying</option>
                <option>Most Viewed</option>
              </select>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {currentJobs.length > 0 ? (
                currentJobs.map(job => (
                  <div 
                    key={job.id} 
                    onClick={() => handleJobClick(job)}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-pink-200 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">{job.type}</span>
                      {job.hasStandingOrder && (
                        <span className="bg-pink-600 text-white px-2 py-1 rounded text-sm">
                          Standing order
                        </span>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="text-pink-500 text-sm">#{tag}</span>
                        ))}
                      </div>
                      <span className="ml-auto text-gray-600 text-sm">Views: {job.views}</span>
                    </div>

                    <h3 className="text-pink-600 text-base sm:text-lg mb-2">
                      [PR] {job.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="mb-2">
                          <span className="text-gray-600">Reward amount: </span>
                          <span className="text-pink-600 font-bold">{job.reward.toLocaleString()} yen</span>
                          <span className="text-gray-600 ml-2">(Price: {job.price.toLocaleString()} yen)</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Estimated hourly rate: </span>
                          <span className="font-bold">{job.estimatedHourlyRate.toLocaleString()} yen</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-center">
                        {job.daysLeft && (
                          <div className="text-red-600">{job.daysLeft} days left</div>
                        )}
                        {job.membersOnly && (
                          <div className="font-bold text-gray-700">Members Only</div>
                        )}
                      </div>
                    </div>

                    {job.company && (
                      <div className="flex items-center gap-3 mt-4">
                      <img src={job.company.logo} alt={job.company.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-gray-900 font-medium">{job.company.name}</div>
                        <div className="text-sm text-gray-600">
                          Average hourly rate: {job.company.averageHourlyRate.toLocaleString()} yen
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
                <p className="text-gray-600">No jobs found matching your criteria.</p>
                <p className="text-gray-600 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
            </div>
            
            {/* Pagination */}
            {filteredJobs.length > jobsPerPage && (
              <div className="mt-8 flex justify-center">
                <nav>
                  <ul className="flex items-center gap-2">
                    <li>
                      <button
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'}`}
                      >
                        Prev
                      </button>
                    </li>
                    {[...Array(totalPages).keys()].map(number => (
                      <li key={number + 1}>
                        <button
                          onClick={() => paginate(number + 1)}
                          className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'}`}
                        >
                          {number + 1}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'}`}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            </div>
            </div>
            </div>
            </div>
            );
            };
            
            export default SearchForAJobPage;