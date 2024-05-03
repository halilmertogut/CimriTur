import React from 'react';
import { StarIcon, GlobeIcon, TicketIcon, MapIcon, LocationMarkerIcon, CashIcon } from '@heroicons/react/outline';

const TourCard = ({ tour }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
      <figure className="relative overflow-hidden">
        <img src={tour.tourImagesUrl[0]} alt={tour.name} className="h-64 w-full object-cover transition duration-500 ease-in-out hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-500 to-transparent p-4 text-white">
          <h2 className="text-xl font-bold">{tour.name}</h2>
          <p className="text-xs md:text-sm truncate">{tour.description}</p>
        </div>
      </figure>
      <div className="p-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="flex items-center text-blue-400">
            <GlobeIcon className="h-5 w-5 mr-1" />
            {tour.region}
          </span>
          <span className="flex items-center font-bold text-yellow-400">
            <StarIcon className="h-5 w-5 mr-1" />
            {tour.rating.toFixed(1)} Stars
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <MapIcon className="h-5 w-5 text-green-400 mr-1" />
            <span className="flex items-center">Starts: {tour.startLocation}</span>
          </div>
          <div className="flex items-center">
            <LocationMarkerIcon className="h-5 w-5 text-green-400 mr-1" />
            <span className="flex items-center">Ends: {tour.destination}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="inline-flex items-center px-3 py-1 text-red-500 bg-white rounded-full text-xs">
            <TicketIcon className="h-4 w-4 mr-1" />
            {tour.type}
          </span>
          <span className="inline-flex items-center px-3 py-1 text-red-500 bg-white rounded-full text-xs">
            <CashIcon className="h-4 w-4 mr-1" />
            {tour.price} TL
          </span>
        </div>
        <div className="text-right mt-4">
          <button className="btn bg-red-500 hover:bg-red-400 text-white transition-colors duration-200 ease-in-out font-semibold py-2 px-4 rounded shadow">
            Explore More
          </button>
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <div className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
          New
        </div>
      </div>
    </div>
  );
};

export default TourCard;
