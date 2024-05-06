import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';
import FilterPanel from './FilterPanel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState({ type: '', region: '', rating: 0, search: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage] = useState(9);
  const navigate = useNavigate(); // Define navigate using useNavigate

  const handleCardClick = (id) => {
    navigate(`/explore/${id}`); // Use navigate to change the route
  };

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
  
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTours.length / toursPerPage); i++) {
    pageNumbers.push(i);
  }

  const rows = [];
  const numPerRow = 3; // number of tours per row
  for (let i = 0; i < currentTours.length; i += numPerRow) {
    rows.push(currentTours.slice(i, i + numPerRow));
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
            Tur listelerini tercihlerinize göre uyarlamak için soldaki filtreleri kullanın.
          </p>
        </div>
        {rows.map((row, index) => (
          <div className="flex justify-between gap-8 mb-8">
            {row.map(tour => (
              <TourCard key={tour._id} tour={tour} onClick={() => handleCardClick(tour._id)} />
            ))}
          </div>
        ))}
        <nav className="flex justify-center mt-8">
          <ul className="inline-flex items-center -space-x-px">
            {pageNumbers.map(number => (
              <li key={number}>
                <button onClick={() => paginate(number)} className="px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors mr-4">
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
