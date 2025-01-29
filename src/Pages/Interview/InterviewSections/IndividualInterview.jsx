import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Import all person images
import Person1 from '../../../../assets/People/Person1.jpg';
import Person2 from '../../../../assets/People/Person2.jpg';
import Person3 from '../../../../assets/People/Person3.jpg';
import Person4 from '../../../../assets/People/Person4.jpg';
import Person5 from '../../../../assets/People/Person5.jpg';
import Person6 from '../../../../assets/People/Person6.jpg';
import Person7 from '../../../../assets/People/Person7.jpg';
import Person8 from '../../../../assets/People/Person8.jpg';
import Person9 from '../../../../assets/People/Person9.jpg';
import Person10 from '../../../../assets/People/Person10.jpg';
import Person11 from '../../../../assets/People/Person11.jpg';
import Person12 from '../../../../assets/People/Person12.jpg';
import Person13 from '../../../../assets/People/Person13.jpg';
import Person14 from '../../../../assets/People/Person14.jpg';
import Person15 from '../../../../assets/People/Person15.jpg';
import Person16 from '../../../../assets/People/Person16.jpg';

const IndividualInterview = () => {
  const { id } = useParams();
  
  // Interview data
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

  const interview = interviews.find(i => i.id === parseInt(id));

  if (!interview) {
    return <div className="text-center py-8">Interview not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Category */}
      <div className="mb-4">
        <span className="bg-pink-500 text-white text-sm px-4 py-1 rounded-full">
          {interview.category}
        </span>
      </div>

      {/* Date */}
      <div className="text-gray-600 text-sm mb-4">{interview.date}</div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{interview.title}</h1>

      {/* Main Content Section */}
      <div className="bg-pink-100 rounded-xl overflow-hidden mb-8">
        {/* Image */}
        <div className="p-3 pb-0">
          <img
            src={interview.imageSrc}
            alt={interview.title}
            className="w-full rounded-t-lg h-96 object-cover"
          />
        </div>

        {/* Tags and Office */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
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

      {/* Q&A Section */}
      <div className="space-y-6 mt-12">
        <div className="bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">
            What are some of the happiest moments working at SharApu?
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`Even though I didn't anticipate that I would, it makes me happy when a case mom friend happens to read the article and personally told me, "That was great."

I'm also happy to get emails from moms who have read my articles saying, "I read your article and found it useful." I see these kind of the clients told me, "I used your article as a reference and went out with my kids!"

The reason I wanted to write about working this way was not only because it allowed me to get to have a reward for myself, but also to share information with other moms and dads who are having children. 
It makes me really happy to see that this work has such value.`}
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">
            What kind of work are you currently trying out? Also, is there any work you would like to try in the future?
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {`The good thing about SharApu is that if you find a project that interests you, you can apply relatively easily.

There are a variety of writing projects available, and being able to work on multiple projects at the same time.

I would like to offer specific pieces of content to help develop my business skills, and I would like to gradually expand the scope of my work.

Until now, I have mainly been writing about company life, but recently I was chosen to write about M&A, which was very interesting. I would like to participate much more in writing about business experiences.

I've always wanted to work with numbers, so I'm really excited about this.

If you just steadily maintain a little courage and put in the effort, your path will open up. 
That's what I've learned through my work at ShufulY.`}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact SharApu:
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>Operating company: SharApu</p>
            <p>Support email: <a href="mailto:contact@sharapu.my" className="text-pink-500 hover:text-pink-600">contact@sharapu.my</a></p>
            <p>Operating hours: 24/7</p>
            <p>Operating days: Monday-Friday</p>
            <p>Location: {`YNetwork Building W 1-10-1 Higashi-Gotanya, Ohnuku-ku, Tokyo`}</p>
          </div>
          <div className="mt-4 text-right text-sm text-gray-500">
            © SharApu Management Office
          </div>
        </div>
      </div>

      {/* Back to Articles Link */}
      <div className="mt-12 text-center">
        <Link
          to="/interviews"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
        >
          Back to Interviews
        </Link>
      </div>
    </div>
  );
};

export default IndividualInterview;