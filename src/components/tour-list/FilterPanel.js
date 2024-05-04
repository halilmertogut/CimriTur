import React, { useState, useEffect } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      type: '',
      region: '',
      rating: '',
      price: '',
      duration: ''
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
  };

  const ratings = ['Hepsi', '1+', '2+', '3+', '4+', '5'];

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-out">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="search"
          placeholder="Turları ara..."
          value={localFilters.search}
          onChange={handleFilterChange}
          className="form-input w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
        />
        <select
          name="type"
          value={localFilters.type}
          onChange={handleFilterChange}
          className="form-select w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
        >
          <option value="">Tüm Tipler</option>
          <option value="Macera">Macera</option>
          <option value="Kültürel">Kültürel</option>
          <option value="Boş Zaman">Boş Zaman</option>
          <option value="Eğitim">Eğitim</option>
        </select>
        <select
          name="region"
          value={localFilters.region}
          onChange={handleFilterChange}
          className="form-select w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
        >
          <option value="">Tüm Bölgeler</option>
          <option value="Ege">Ege</option>
          <option value="Akdeniz">Akdeniz</option>
          <option value="Karadeniz">Karadeniz</option>
          <option value="İç Anadolu">İç Anadolu</option>
          <option value="Güneydoğu Anadolu">Güneydoğu Anadolu</option>
          <option value="Doğu Anadolu">Doğu Anadolu</option>
          <option value="Marmara">Marmara</option>
        </select>
        {/* <input
          type="text"
          name="price"
          placeholder="Maksimum Fiyat"
          value={localFilters.price}
          onChange={handleFilterChange}
          className="form-input w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
  /> */}
       {/* <input
          type="text"
          name="duration"
          placeholder="Süre (gün)"
          value={localFilters.duration}
          onChange={handleFilterChange}
          className="form-input w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
        /> */}
        <fieldset className="space-y-2">
          <legend className="text-gray-800 font-semibold mb-2">Puan:</legend>
          {ratings.map((rating, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={localFilters.rating === rating}
                onChange={handleFilterChange}
                className="radio radio-primary focus:ring-blue-500"
              />
              {rating}
            </label>
          ))}
        </fieldset>
      </div>
      <div className="flex justify-between mt-4 mr-2">
        <button onClick={clearFilters} className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition duration-200 mr-2 pr-4">
          Filtreleri Sıfırla
        </button>
        <button onClick={applyFilters} className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
          Uygula
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
