import React, { useState, useEffect } from 'react';
import Person1 from '../../../../assets/People/Person1.jpg'
import Person2 from '../../../../assets/People/Person2.jpg'
import Person3 from '../../../../assets/People/Person3.jpg'
import Person4 from '../../../../assets/People/Person4.jpg'
import Person5 from '../../../../assets/People/Person5.jpg'
import Person6 from '../../../../assets/People/Person6.jpg'
import Person7 from '../../../../assets/People/Person7.jpg'
import Person8 from '../../../../assets/People/Person8.jpg'
import Person9 from '../../../../assets/People/Person9.jpg'
import Person10 from '../../../../assets/People/Person10.jpg'
import Person11 from '../../../../assets/People/Person11.jpg'
import Person12 from '../../../../assets/People/Person12.jpg'
import Person13 from '../../../../assets/People/Person13.jpg'
import Person14 from '../../../../assets/People/Person14.jpg'
import Person15 from '../../../../assets/People/Person15.jpg'
import Person16 from '../../../../assets/People/Person16.jpg'

const InterviewCards = ({ selectedCategory, selectedTags, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const interviews = [
    {
      id: 1,
      date: '2024/3/15',
      category: 'For those looking for work',
      title: 'Work from home and do what you love without changing your lifestyle or prioritizing childcare!',
      imageSrc: Person1,
      tags: ['Work from Home Guide', 'Success stories']
    },
    {
      id: 2,
      date: '2024/3/14',
      category: 'SharApu NEWS',
      title: 'SharApu gave me the strength to live',
      imageSrc: Person2,
      tags: ['Success stories', 'Worker Interview']
    },
    {
      id: 3,
      date: '2024/3/13',
      category: 'For those looking for work',
      title: 'SharApu is a work-from-home job that allows you to work at your own pace and in two different jobs!',
      imageSrc: Person3,
      tags: ['Work from Home Guide', 'Job Introduction']
    },
    {
      id: 4,
      date: '2024/3/12',
      category: 'SharApu NEWS',
      title: 'Is it possible to have a side job without your company finding out?',
      imageSrc: Person4,
      tags: ['notice', 'Popular Jobs']
    },
    {
      id: 5,
      date: '2024/3/11',
      category: 'For those looking for work',
      title: 'What kind of jobs are available for working from home? Best ways to find work!',
      imageSrc: Person5,
      tags: ['Job Introduction', 'Popular Jobs']
    },
    {
      id: 6,
      date: '2024/3/10',
      category: 'For those looking for work',
      title: 'Your first work-from-home job! Survey work that requires no skills',
      imageSrc: Person6,
      tags: ['Introduction to working from home', 'Popular Jobs']
    },
    {
      id: 7,
      date: '2024/3/9',
      category: 'For those looking for work',
      title: 'Take on routine office work while working from home!',
      imageSrc: Person7,
      tags: ['Data Entry', 'Job Introduction']
    },
    {
      id: 8,
      date: '2024/3/8',
      category: 'For those looking for work',
      title: 'From registration to work, everything is done on your smartphone!',
      imageSrc: Person8,
      tags: ['Work from Home Guide', 'Popular Jobs']
    },
    {
      id: 9,
      date: '2024/3/7',
      category: "Beginner's Guide",
      title: 'What is the job of answering corporate telephones?',
      imageSrc: Person9,
      tags: ['Job Introduction', 'Popular Jobs']
    },
    {
      id: 10,
      date: '2024/3/6',
      category: 'For those looking for work',
      title: 'Remote customer service jobs that anyone can do',
      imageSrc: Person10,
      tags: ['Popular Jobs', 'Job Introduction']
    },
    {
      id: 11,
      date: '2024/3/5',
      category: 'For those who want to order work',
      title: 'Start your work-from-home journey with data entry',
      imageSrc: Person11,
      tags: ['Data Entry', 'Introduction to working from home']
    },
    {
      id: 12,
      date: '2024/3/4',
      category: 'For those looking for work',
      title: 'How to balance family life and remote work',
      imageSrc: Person12,
      tags: ['Work from Home Guide', 'Skill Development']
    },
    {
      id: 13,
      date: '2024/3/3',
      category: 'For those looking for work',
      title: 'Tips for successful online interviews',
      imageSrc: Person13,
      tags: ['Skill Development', 'Home Refreshment Guide']
    },
    {
      id: 14,
      date: '2024/3/2',
      category: 'For those who want to order work',
      title: 'Setting up your perfect home office',
      imageSrc: Person14,
      tags: ['Home Refreshment Guide', 'Work from Home Guide']
    },
    {
      id: 15,
      date: '2024/3/1',
      category: 'For those looking for work',
      title: 'Managing your time effectively when working remotely',
      imageSrc: Person15,
      tags: ['Skill Development', 'Work from Home Guide']
    },
    {
      id: 16,
      date: '2024/2/29',
      category: "Beginner's Guide",
      title: 'Building a successful career from home',
      imageSrc: Person16,
      tags: ['Success stories', 'Skill Development']
    }
  ];

  // Filter interviews based on all criteria
  const filteredInterviews = interviews.filter(interview => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const titleMatch = interview.title.toLowerCase().includes(query);
      const categoryMatch = interview.category.toLowerCase().includes(query);
      const tagsMatch = interview.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (!titleMatch && !categoryMatch && !tagsMatch) return false;
    }

    // Category filter
    if (selectedCategory && interview.category !== selectedCategory) {
      return false;
    }

    // Tags filter
    if (selectedTags.size > 0) {
      const hasMatchingTag = Array.from(selectedTags).some(tag => 
        interview.tags && interview.tags.includes(tag)
      );
      if (!hasMatchingTag) return false;
    }

    return true;
  });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTags, searchQuery]);

  // Pagination calculations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredInterviews.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredInterviews.length / cardsPerPage);

  return (
    <div className="mb-12">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentCards.map((interview) => (
          <div 
            key={interview.id}
            className="bg-pink-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="relative p-3 pb-0">
              <div className="bg-pink-500 text-white text-sm px-4 py-1 rounded-full inline-block mb-3">
                {interview.category}
              </div>
              <img
                src={interview.imageSrc}
                alt={interview.title}
                className="w-full rounded-t-lg h-48 object-cover"
              />
            </div>

            <div className="p-4">
              <div className="text-gray-600 text-sm mb-2">{interview.date}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3 line-clamp-2">
                {interview.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {interview.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-pink-200 text-pink-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="text-gray-600">SharApu Management Office</div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredInterviews.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No interviews found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {filteredInterviews.length > cardsPerPage && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-pink-200 text-pink-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-50 transition-colors"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                ${currentPage === page 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:bg-pink-50'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border border-pink-200 text-pink-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default InterviewCards;