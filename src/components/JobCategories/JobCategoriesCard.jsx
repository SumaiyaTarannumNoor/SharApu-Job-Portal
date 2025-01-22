import React from 'react';

const JobCategoriesCard = () => {
  const categories = {
    'Data Entry & Product Registration': [
      'Data Entry & Data Check',
      'Data Collection & Classification',
      'Other Data Entry & Product Registration',
      'Product Registration'
    ],
    'Writing': [
      'Article & Blog Creation',
      'Reviews & Experience Stories',
      'Transcription',
      'Other Writing'
    ],
    'Sales, Customer Support & Research': [
      'Sales & Telemarketing',
      'Customer Support',
      'User Interviews & User Testing',
      'Monitoring, Surveys & Research',
      'Questionnaires',
      'Other Sales, Customer Support & Research'
    ],
    'Design, Photography & Video': [
      'Illustration, Logo & Banner Creation',
      'Photography, Photo Editing & Image Processing',
      'Video Shooting, Video Editing & Video Processing',
      'Other Design, Photography & Video'
    ],
    'Web Production, Web Design & Development': [
      'Web Design',
      'HTML & CSS Coding',
      'Website Check & App Testing',
      'Other Web Production, Web Design & Development'
    ],
    'Translation': [
      'English Translation',
      'Other Translation',
      'SharApu Outing',
      'Discussion & Interview',
      'Mystery Shopping',
      'Other ShufTi Outings'
    ]
  };

  return (
    <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center py-6 bg-pink-500 text-white">Job Category List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="font-bold text-pink-500 border-b-2 border-pink-200 pb-2">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul> 
          </div>
        ))}
      </div>
      <div className="text-center py-8 bg-gray-50">
        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-pink-600 transition duration-300">
          Start Free Now
        </button>
      </div>
    </div>
  );
};

export default JobCategoriesCard;