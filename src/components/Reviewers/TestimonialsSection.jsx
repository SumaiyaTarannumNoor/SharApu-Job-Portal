import React from 'react';
import Reviewer1 from '../../../assets/Reviewers/Reviewer1.jpg';
import Reviewer2 from '../../../assets/Reviewers/Reviewer2.jpg';
import Reviewer3 from '../../../assets/Reviewers/Reviewer3.jpg';
import Reviewer4 from '../../../assets/Reviewers/Reviewer4.jpg';
import Reviewer5 from '../../../assets/Reviewers/Reviewer5.jpg';
import Reviewer6 from '../../../assets/Reviewers/Reviewer6.jpg';
import Reviewer7 from '../../../assets/Reviewers/Reviewer7.jpg';
import Reviewer8 from '../../../assets/Reviewers/Reviewer8.jpg';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "Yung Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: Reviewer1,
    title: "Crowdsourcing is the key to expanding your business!",
    content: "Housewives and female workers have fewer problems and write high-quality articles."
  },
  {
    id: 2,
    name: "Narita Sato",
    role: "Community Manager",
    company: "Social Impact Hub",
    image: Reviewer2,
    title: "If moms and children smile, society will change!",
    content: "There are many serious workers, so you can order with confidence."
  },
  {
    id: 3,
    name: "Yono Tanaka",
    role: "Content Strategist",
    company: "Digital Solutions Co.",
    image: Reviewer3,
    title: "Increase efficiency with SharApu, with strong writing ability",
    content: "The main job I am requesting is writing blog articles."
  },
  {
    id: 4,
    name: "Daisuke Johnson",
    role: "Operations Manager",
    company: "Growth Ventures",
    image: Reviewer4,
    title: "Utilizing crowdsourcing to strengthen the core business",
    content: "This was the first time I had requested piece writing."
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Project Lead",
    company: "Scale Solutions",
    image: Reviewer5,
    title: "Bulk order for 50 or more workers!",
    content: "There is a function to contact workers in bulk, or to contact them individually."
  },
  {
    id: 6,
    name: "Akiko Sato",
    role: "Digital Marketing Head",
    company: "Innovate Corp",
    image: Reviewer6,
    title: "Effective use of SharApu for inbound marketing",
    content: "The good thing about SharApu is that you can get quick responses."
  },
  {
    id: 7,
    name: "Jhao Wong",
    role: "Regional Director",
    company: "Global Tech Japan",
    image: Reviewer7,
    title: "Contributing to the launch of the Japanese branch",
    content: "There are many talented women who have left their jobs to raise children."
  },
  {
    id: 8,
    name: "Sophie Miller",
    role: "Creative Director",
    company: "Design Hub",
    image: Reviewer8,
    title: "Create creative work with SharApu!",
    content: "We are requesting you to enter the recruitment drawings."
  }
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="bg-pink-100 p-8 rounded-lg mt-12 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">What customers say about SharApu</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-pink-100 rounded-lg shadow-sm overflow-hidden border border-pink-100">
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-40 object-contain" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-pink-600 mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{testimonial.content}</p>
              <div className="mt-4">
                <p className="font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 space-y-4">
        <button className="text-pink-500 hover:text-pink-600 font-medium">
          See other use cases
        </button>
        <div>
          <button onClick={handleLoginClick} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full">
            Start now for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;