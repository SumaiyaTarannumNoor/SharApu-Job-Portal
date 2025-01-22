import React from 'react';

const JobCard = ({ type, reward, daysLeft, title }) => (
  <div className="bg-white rounded-lg shadow p-4 h-40 flex flex-col justify-between">
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{type}</span>
        <span className="text-gray-600 text-sm">{daysLeft}Remaining days</span>
      </div>
      <h4 className="font-medium line-clamp-2 text-base lg:text-lg">
        {title}
      </h4>
    </div>
    <div className="text-right">
      <span className="text-gray-900 font-semibold">{reward}</span>
    </div>
  </div>
);

const JobSectionCard1 = () => (
  <div className="mt-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="bg-gray-100 p-4 h-16 flex items-center mb-4">
          <h3 className="text-xl font-semibold line-clamp-1">
          There are various genres! A job where you can use your own experiences
          </h3>
        </div>
        <div className="space-y-4">
          <JobCard
            type="Project"
            reward="2,303 en"
            daysLeft={6}
            title="[From 1.5 yen per character] Article writing job! Spread the charm of Tomiya City!"
          />
          <JobCard
            type="Project"
            reward="2,303 yen"
            daysLeft={6}
            title="[From 1.5 yen per character] Article writing job! Spread the charm of the Futako Tamagawa area!"
          />
        </div>
      </div>
      <div>
        <div className="bg-gray-100 p-4 h-16 flex items-center mb-4">
          <h3 className="text-xl font-semibold line-clamp-1">
          Jobs that you can join right away without any skills required
          </h3>
        </div>
        <div className="space-y-4">
          <JobCard
            type="Project"
            reward="400 yen"
            daysLeft={2}
            title="[Completely from home ♡ Careful support ♡] Easy data entry in your spare time using only your smartphone"
          />
          <JobCard
            type="Task"
            reward="30 yen/item"
            daysLeft={13}
            title="[90 characters or more/30 yen/1 article] Review of experience using web services and tools"
          />
        </div>
      </div>
    </div>
  </div>
);

export default JobSectionCard1;