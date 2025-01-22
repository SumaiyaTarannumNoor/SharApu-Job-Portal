import React from 'react';
import Worker1 from "../../../assets/Workers/Worker1.png";
import Worker2 from "../../../assets/Workers/Worker2.png";
import Worker3 from "../../../assets/Workers/Worker3.png";
import Worker4 from "../../../assets/Workers/Worker4.png";
import Worker5 from "../../../assets/Workers/Worker5.png";
import Worker6 from "../../../assets/Workers/Worker6.png";
import Worker7 from "../../../assets/Workers/Worker7.png";
import Worker8 from "../../../assets/Workers/Worker8.png";

// Worker Card Component
const WorkerCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-56 mb-8">
      <div className="w-52 h-44 bg-white">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-pink-600">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

// Main WorkerLandingPage Component
const WorkerLandingPage = () => {
  const workers = [
    {
      imageSrc: Worker1,
      title: "How to balance double work + family life",
      description: "Currently working as a medical office worker and a fondesk operator at the general office..."
    },
    {
      imageSrc: Worker2,
      title: "Work as a home-based operator makes it all possible to balance work and childcare.",
      description: "At first, I worked in a clerical position at a domestic non-life insurance company for about three years. Husband's..."
    },
    {
      imageSrc: Worker3,
      title: "Income of 50,000 yen per month mainly from writing",
      description: "I am not restricted by time and have time for my hobby of gardening, so I have a lot of free time..."
    },
    {
      imageSrc: Worker4,
      title: "When mothers and children smile, society changes!",
      description: "There are many serious workers, so now you can order with confidence..."
    },
    {
      imageSrc: Worker5,
      title: "Leveraging crowdsourcing to strengthen the core of your business",
      description: "The person who requested it for the first time wrote an extremely high quality text..."
    },
    {
      imageSrc: Worker6,
      title: "Crowdsourcing is the key to business expansion!",
      description: "Housewives and female workers have fewer troubles and write better articles..."
    },
    {
      imageSrc: Worker7,
      title: "Increase efficiency with Shufuti, whose strength is writing.",
      description: "The main job I am asked to do is write blog articles, which involves a large amount of..."
    },
    {
      imageSrc: Worker8,
      title: "Working from home, which I started casually, has been a great blessing!",
      description: "I can't work during the day because I have children. It's..."
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4">
        Many housewives working from home are active!
        </h2>
        <p className="text-base sm:text-lg mb-8">
        Contains many useful interviews on how to use time and how to choose a job
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {workers.map((worker, index) => (
            <WorkerCard key={index} {...worker} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full text-xl hover:bg-pink-100 transition duration-300">
            View More Interviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkerLandingPage;