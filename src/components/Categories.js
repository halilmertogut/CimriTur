import React from 'react';
import Nature from '../images/nature.jpg';
import Beach from '../images/beach.jpg';
import Family from '../images/family.jpg';
import City from '../images/city.jpg';
import { FcLandscape } from "react-icons/fc";

const categories = [
  { name: 'Beach', imageUrl: Beach },
  { name: 'Family', imageUrl: Family },
  { name: 'City', imageUrl: City },
  { name: 'Nature', imageUrl: Nature },
];

const CategoryCard = ({ name, imageUrl }) => (
  <div className="relative">
    <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded-full mr-4" />
    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg">
    <FcLandscape size={32} />
    </div>
    <div className="absolute top-30 bottom-1 bg-white text-green-700 rounded-full p-2 shadow-lg w-24 text-center font-light">
      {name}
    </div>
  </div>
);

const Categories = () => (

    <div className="bg-white p-10 flex justify-center items-center">
<div className="bg-blue-100  p-6 rounded-3xl shadow-lg flex flex-wrap justify-center items-center h-96  w-screen">
        <div className="max-w-lg text-center">
          <h2 className="text-3xl font-black text-black mb-4 drop-shadow-2xl mr-20">Ready-to-save recs for 2024</h2>
          <h2 className="text-2xl font-thin text-gray mb-4 drop-shadow-2xl mb-4 mr-20 underline decoration-2 decoration-green-700 underline-offset-8">Explore places and experiences by theme</h2>
        </div>
        {categories.map((category, index) => (
        <CategoryCard {...category} />
      ))}        </div>
    </div>
  );


export default Categories;
