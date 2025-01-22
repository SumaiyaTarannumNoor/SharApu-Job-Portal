import React from 'react';

const JobCard = ({ type, reward, daysLeft, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow h-32 flex flex-col">
    <div className="flex justify-between items-center mb-2 h-8">
      <span className="px-3 py-1 rounded text-white text-sm bg-pink-500 truncate max-w-[40%]">
        {type}
      </span>
      <span className="text-gray-600 text-sm truncate">Reward：{reward} | {daysLeft} Days Left</span>
    </div>
    <div className="h-16 overflow-hidden">
      <p className="text-gray-800 text-sm sm:text-base md:text-sm lg:text-base xl:text-base line-clamp-2">
        {title}
      </p>
    </div>
  </div>
);

const JobSectionCard = () => {
  const jobSections = [
    {
      title: "Various genres available! Jobs where you can utilize your personal experiences",
      jobs: [
        {
          type: "Project",
          reward: "3,284 yen",
          daysLeft: 7,
          title: "【2.0 yen per character】Article writing job! Promote the charm of Totsuka Ward, Yokohama City! Choose freely from 2 options. Manual provided♪"
        },
        {
          type: "Project",
          reward: "2,303 yen",
          daysLeft: 7,
          title: "【1.5 yen per character】Article writing job! Promote the charm of Yachiyo City! Choose freely from 2 options. Manual provided♪"
        }
      ]
    },
    {
      title: "Jobs you can start immediately without any skills",
      jobs: [
        {
          type: "Project",
          reward: "3,000 yen",
          daysLeft: 1,
          title: "【Flexible hours! Work from home OK】3000 yen/case Online survey for insurance consultation service. All genders welcome"
        },
        {
          type: "Project",
          reward: "3,000 yen",
          daysLeft: 1,
          title: "【20s only! Work from home OK】3000 yen/case Online survey for career change and skill development schools. All genders welcome"
        }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
      {jobSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="h-20 mb-4 bg-gray-100 p-4 flex items-center">
            <h3 className="text-xl font-semibold line-clamp-2">
              {section.title}
            </h3>
          </div>
          <div className="space-y-4">
            {section.jobs.map((job, jobIndex) => (
              <JobCard key={jobIndex} {...job} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-pink-500 hover:text-pink-600 text-sm">
              See more similar jobs
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSectionCard;