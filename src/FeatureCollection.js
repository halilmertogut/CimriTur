import React from 'react';
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'
import { FaHeart } from 'react-icons/fa';

const cards = [
  { id: 1, image: image1, title: 'Amazing City' },
  { id: 2, image: image2, title: 'Forest Waterfall' },
  { id: 3, image: image3, title: 'Historic Architecture' },
];

const Card = ({ image, title }) => (
  <div className="relative">
    <img src={image} alt={title} className="w-48 h-48 object-cover rounded-full mr-4" />
    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg">
    <FaHeart size={32} className="text-red-600" />
    </div>
  </div>
);



const FeatureCollection = () => {
    return (
      <div className="bg-transparent p-10 flex justify-center items-center">
<div className="bg-white  p-6 rounded-full shadow-lg flex flex-wrap justify-center items-center h-96  w-screen">
          <div className="max-w-lg text-center">
            <h2 className="text-4xl font-black text-black mb-4 drop-shadow-2xl mb-4 mr-4">Where to go in 2024</h2>
            <p className="font-semibold text-lg text-black drop-shadow-2xl mb-4 mr-4 underline decoration-2 decoration-blue-400 underline-offset-8">
              Ideas to kickstart your travel planning—just save what you love, and you're off.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Let's go
            </button>
          </div>
          {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}        </div>
      </div>
    );
  };

export default FeatureCollection;
