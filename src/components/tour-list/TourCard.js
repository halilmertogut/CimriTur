import React from 'react';
import {
  StarIcon,
  LocationMarkerIcon,
  CashIcon,
  TruckIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  ArrowNarrowRightIcon
} from '@heroicons/react/outline';
import DOMPurify from 'dompurify';

const createMarkup = (htmlContent) => ({ __html: DOMPurify.sanitize(htmlContent) });

const TourCard = ({ tour, onClick }) => (
  <div
    className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer flex flex-col"
    onClick={() => onClick(tour._id)}
    style={{ flex: "1 0 21%" }}  // Flex-grow, Flex-shrink, Flex-basis
  >
    <img src={tour.tourImagesUrl[0]} alt={tour.name} className="w-full object-cover" style={{ height: '200px' }} />
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{tour.name}</h2>
        <p className="text-sm text-gray-600 mb-3" dangerouslySetInnerHTML={createMarkup(tour.description)} />
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-1">
            <LocationMarkerIcon className="h-5 w-5 text-indigo-600" />
            <span>{tour.startLocation}</span>
          </div>
          <ArrowNarrowRightIcon className="h-5 w-5" />
          <div className="flex items-center space-x-1">
            <LocationMarkerIcon className="h-5 w-5 text-green-600" />
            <span>{tour.destination}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 text-sm">
          <div className="flex items-center space-x-1">
            <GlobeAltIcon className="h-5 w-5 text-blue-700" />
            <span>{tour.region}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TruckIcon className="h-5 w-5 text-red-600" />
            <span>{tour.transportType}</span>
          </div>
          <div className="flex items-center space-x-1">
            <InformationCircleIcon className="h-5 w-5 text-blue-900" />
            <span>{tour.type}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1">
          <StarIcon className="h-5 w-5 text-yellow-600" />
          <span>{tour.rating.toFixed(1)} Stars</span>
        </div>
        <div className="flex items-center space-x-1">
          <CashIcon className="h-5 w-5 text-green-600" />
          <span>{tour.price} {tour.currency}</span>
        </div>
        <button className="text-xs bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-lg">
          Daha Fazla
        </button>
      </div>
    </div>
  </div>
);

export default TourCard;
