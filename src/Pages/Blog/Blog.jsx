import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Person11 from '../../../assets/People/Person11.jpg'
import Person12 from '../../../assets/People/Person12.jpg'
import Person13 from '../../../assets/People/Person13.jpg'
import Person14 from '../../../assets/People/Person14.jpg'
import Person15 from '../../../assets/People/Person15.jpg'
import Person16 from '../../../assets/People/Person16.jpg'

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("For those looking for work");

  const featuredArticles = [
    {
      id: 1,
      date: '2024/3/15',
      category: 'For those who want to order work',
      title: 'The best part of crowdsourcing! Bulk ordering for 50 or more workers',
      image: Person11
    },
    {
      id: 2,
      date: '2024/3/14',
      category: 'For those who want to order work',
      title: 'Effective use of SharApu for inbound marketing',
      image: Person12
    },
    {
      id: 3,
      date: '2024/3/7',
      category: 'For those looking for work',
      title: 'Is it possible to have a side job without your company finding out?',
      image: Person13
    },
    {
      id: 4,
      date: '2024/3/7',
      category: 'For those looking for work',
      title: 'What kind of jobs are available for working from home?',
      image: Person14
    },
    {
      id: 5,
      date: '2024/3/7',
      category: 'For those looking for work',
      title: 'From registration to work, everything is done on your smartphone!',
      image: Person15
    },
    {
      id: 6,
      date: '2024/3/7',
      category: 'For those looking for work',
      title: 'From registration to work, everything is done on your own!',
      image: Person16
    }
  ];

  const latestArticles = [
    {
      id: 1,
      date: '2024/3/7',
      category: 'For those looking for work',
      title: 'Work from home and do what you love without changing your lifestyle!',
      image: Person13
    },
    {
      id: 2,
      date: '2024/3/1',
      category: 'For those who want to order work',
      title: 'I want my employees to focus on more creative work, SharApu is necessary for that purpose.',
      image: Person14
    }
  ];

  const pickedArticles = [
    {
      id: 1,
      date: '2024/3/15',
      title: 'The best part of crowdsourcing! Bulk ordering for 50 or more workers',
      image: Person11
    },
    {
      id: 2,
      date: '2024/3/14',
      title: 'Effective use of SharApu for inbound marketing',
      image: Person12
    },
    {
      id: 3,
      date: '2024/3/7',
      title: 'Is it possible to have a side job without your company finding out?',
      image: Person13
    },
    {
      id: 4,
      date: '2024/3/7',
      title: 'What kind of jobs are available for working from home?',
      image: Person14
    },
    {
      id: 5,
      date: '2024/3/7',
      title: 'From registration to work, everything is done on your smartphone!',
      image: Person15
    }
  ];

  const categories = [
    "For those looking for work",
    "For those who want to order work",
    "Beginner's Guide",
    "SharApu NEWS"
  ];

  const tags = [
    'Home Refreshment Guide',
    'Skill Development',
    'Introduction to working from home',
    'Popular Jobs',
    'Success stories',
    'Worker Interview',
    'Work from Home Guide',
    'Job Introduction',
    'Client Interview',
    'Data Entry'
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => 
      prev === featuredArticles.length - 1 ? 0 : prev + 1
    );
  }, [featuredArticles.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? featuredArticles.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-12">
            {categories.map((category) => (
              <li key={category} className="py-4">
                <span 
                  className={`cursor-pointer ${
                    activeCategory === category
                      ? 'text-pink-500 font-medium border-b-2 border-pink-500 pb-3'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content with sidebar layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content area */}
          <div className="lg:w-3/4">
            {/* Featured Articles Carousel */}
            <div className="relative mb-8">
              <div 
                className="overflow-hidden rounded-xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredArticles.map((article) => (
                    <div key={article.id} className="min-w-full px-2">
                      <div className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-96 object-cover"
                        />
                        <div className="p-6">
                          <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                          <div className="bg-pink-50 text-pink-500 px-4 py-1 rounded-full text-sm inline-block mb-2">
                            {article.category}
                          </div>
                          <h2 className="text-xl text-gray-800 line-clamp-2">
                            {article.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {featuredArticles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-6 bg-pink-500' 
                        : 'bg-gray-300 hover:bg-pink-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Latest Articles Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Latest
                <span className="text-sm text-gray-500 ml-2">Latest Articles</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                      <div className="bg-pink-50 text-pink-500 px-4 py-1 rounded-full text-sm inline-block mb-2">
                        {article.category}
                      </div>
                      <h3 className="text-lg text-gray-800 line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/5">
            {/* Tags Section */}
            <div className="bg-pink-500 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-200 pb-2">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm transition-colors duration-200 text-center"
                  >
                    # {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Pick up Section */}
            <div className="bg-pink-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                Pick up
            </h2>
            <div className="space-y-8">
                {pickedArticles.map((article) => (
                <div key={article.id} className="cursor-pointer">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <div>
                    <p className="text-gray-600 text-sm">{article.date}</p>
                    <h3 className="text-sm text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
                        {article.title}
                    </h3>
                    </div>
                </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;