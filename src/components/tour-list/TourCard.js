import React from 'react';
import { StarIcon, LocationMarkerIcon, CashIcon, TruckIcon, GlobeAltIcon, InformationCircleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import DOMPurify from 'dompurify';

const createMarkup = (htmlContent) => ({ __html: DOMPurify.sanitize(htmlContent) });

const TourCard = ({ tour, onClick }) => (
  <div 
  className="bg-white max-w-lg w-[350px] rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
  onClick={() => onClick(tour._id)}
>
  <img src={tour.tourImagesUrl[0]} alt={tour.name} className="h-72 w-full object-cover" />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h2>
    <p className="text-sm text-gray-600 mb-3" dangerouslySetInnerHTML={createMarkup(tour.description)}></p>
      
      <div className="flex items-center justify-between text-gray-600 mb-3">
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-6 w-6 text-indigo-600" />
          <span className="font-medium">{tour.startLocation}</span>
        </div>
        <ArrowNarrowRightIcon className="h-6 w-6 text-gray-700" />  {/* Centered Arrow Icon */}
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-6 w-6 text-green-600" />
          <span className="font-medium">{tour.destination}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <GlobeAltIcon className="h-6 w-6 text-blue-700" />
          <span className="font-medium">{tour.region}</span>
        </div>
        <div className="flex items-center space-x-2">
          <TruckIcon className="h-6 w-6 text-red-600" />
          <span className="font-medium">{tour.transportType}</span>
        </div>
        <div className="flex items-center space-x-2">
          <InformationCircleIcon className="h-6 w-6 text-blue-900" />
          <span className="font-medium">{tour.type}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-gray-700">
        <div className="flex items-center space-x-2">
          <StarIcon className="h-6 w-6 text-yellow-600" />
          <span className="font-semibold">{tour.rating.toFixed(1)} Stars</span>
        </div>
        <div className="flex items-center space-x-2">
          <CashIcon className="h-6 w-6 text-green-600" />
          <span className="font-semibold">{tour.price} {tour.currency}</span>
        </div>
        <button className="text-sm bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out ml-2">
          Daha Fazla
        </button>
      </div>
    </div>
  </div>
);

export default TourCard;
