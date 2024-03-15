import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt, FaSearch, FaRegCalendarAlt, FaDollarSign } from 'react-icons/fa';

const FilterSection = () => {
  const [inputValues, setInputValues] = useState({
    tourRegion: '',
    minPrice: '',
    maxPrice: '',
    startDate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleDateChange = (date) => {
    setInputValues({ ...inputValues, startDate: date });
  };

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl flex flex-wrap items-center justify-around gap-4">
      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <FaMapMarkerAlt size={24} className="text-blue-500" />
        <input
          type="text"
          name="tourRegion"
          placeholder="Destination?"
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2"
          value={inputValues.tourRegion}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <FaDollarSign size={24} className="text-green-500" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min $"
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-24 rounded-md p-2"
          min="0"
          value={inputValues.minPrice}
          onChange={handleInputChange}
        />
        <FaDollarSign size={24} className="text-red-500" />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max $"
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-24 rounded-md p-2"
          min="0"
          value={inputValues.maxPrice}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <FaRegCalendarAlt size={24} className="text-yellow-500" />
        <DatePicker
          selected={inputValues.startDate}
          onChange={handleDateChange}
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2"
          placeholderText="Select Date"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-3 transition-opacity duration-300 ease-in-out">
        <FaSearch size={20} />
        <span>Search</span>
      </button>
    </div>
  );
};

export default FilterSection;
