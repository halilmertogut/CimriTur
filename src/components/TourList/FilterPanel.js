import React, { useState } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      type: '',
      region: '',
      rating: 'All',
      price: '',
      duration: ''
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
  };

  const ratings = ['All', '1+', '2+', '3+', '4+', '5'];

  return (
    <div className="p-4 bg-white shadow-xl rounded-lg">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="search"
          placeholder="Search tours..."
          value={localFilters.search}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        />
        <select
          name="type"
          value={localFilters.type}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        >
          <option value="">All Types</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
          <option value="Leisure">Leisure</option>
          <option value="Educational">Educational</option>
        </select>
        <select
          name="region"
          value={localFilters.region}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        >
          <option value="">All Regions</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
        </select>
        <input
          type="text"
          name="price"
          placeholder="Maximum Price"
          value={localFilters.price}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (days)"
          value={localFilters.duration}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        />
        <fieldset className="flex flex-col gap-2">
          <legend className="text-red-700 font-medium">Rating:</legend>
          {ratings.map((rating, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={localFilters.rating === rating}
                onChange={handleFilterChange}
                className="radio radio-red-500 radio-sm"
              />
              {rating}
            </label>
          ))}
        </fieldset>
      </div>
      <button onClick={clearFilters} className="btn mt-4 text-white bg-red-500 hover:bg-red-600 transition-colors rounded-full p-2">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;
