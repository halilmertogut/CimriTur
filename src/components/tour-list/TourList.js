import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';
import FilterPanel from './FilterPanel';

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState({ type: '', region: '', rating: 0, search: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage] = useState(8); // Adjust number per page as needed

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch('http://localhost:3000/api/tours/all-tours');
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
    };
    fetchTours();
  }, []);

  useEffect(() => {
    const result = tours.filter(tour =>
      (!filters.type || tour.type.toLowerCase().trim() === filters.type.toLowerCase().trim()) &&
      (!filters.region || tour.region.toLowerCase().trim() === filters.region.toLowerCase().trim()) &&
      (!filters.rating || filters.rating === 'All' || tour.rating >= parseInt(filters.rating)) &&
      (!filters.search || tour.name.toLowerCase().includes(filters.search.toLowerCase()))
    );
    setFilteredTours(result);
  }, [filters, tours]);
  

  // Get current tours
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Calculate total pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTours.length / toursPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row mt-20 font-montserrat">
      <div className="md:w-1/5 px-4 py-2">
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>
      <div className="md:w-4/5 px-4 py-2">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-800">Turları Keşfet</h1>
          <p className="text-gray-600 mt-2">
          Tur listelerini tercihlerinize göre uyarlamak için soldaki filtreleri kullanın. Bir sonraki seyahatiniz için mükemmel macerayı bulmak için turları türe, bölgeye, fiyata ve daha fazlasına göre sıralayabilirsiniz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentTours.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
        <nav className="flex justify-center mt-8">
          <ul className="inline-flex items-center -space-x-px">
            {pageNumbers.map(number => (
              <li key={number}>
                <button onClick={() => paginate(number)} className="px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TourList;
