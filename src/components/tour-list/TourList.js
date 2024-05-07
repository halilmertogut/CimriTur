import React, { useState, useEffect } from "react";
import TourCard from "./TourCard";
import FilterPanel from "./FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";

const TourList = () => {
  const location = useLocation();
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState(() => {
    const defaultFilters = {
      type: "",
      region: "",
      rating: "Hepsi",
      search: "",
      minPrice: "",
      maxPrice: "",
      startLocation: "",
    };
    return location.state
      ? { ...defaultFilters, ...location.state }
      : defaultFilters;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch("http://localhost:3000/api/tours/all-tours");
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
    };
    fetchTours();
  }, []);

  useEffect(() => {
    let result = tours.filter(
      (tour) =>
        (!filters.type ||
          tour.type.toLowerCase().trim() ===
            filters.type.toLowerCase().trim()) &&
        (!filters.region ||
          tour.region.toLowerCase().trim() ===
            filters.region.toLowerCase().trim()) &&
        (!filters.rating ||
          filters.rating === "Hepsi" ||
          tour.rating >= parseInt(filters.rating)) &&
        (!filters.search ||
          tour.name.toLowerCase().includes(filters.search.toLowerCase())) &&
        (!filters.minPrice || tour.price >= parseFloat(filters.minPrice)) &&
        (!filters.maxPrice || tour.price <= parseFloat(filters.maxPrice)) &&
        (!filters.transportType ||
          tour.transportType
            .toLowerCase()
            .includes(filters.transportType.toLowerCase())) &&
        (!filters.startLocation ||
          tour.startLocation.toLowerCase().trim() ===
            filters.startLocation.toLowerCase().trim())
    );

    if (filters.priceSort === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.priceSort === "desc") {
      result.sort((a, b) => b.price - a.price);
    }
    setFilteredTours(result);
  }, [filters, tours]);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTours.length / toursPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap mt-20 font-montserrat">
      <div className="w-full md:w-1/4 lg:w-1/5 mb-5 md:mb-0 px-4">
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 px-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Turları Keşfet
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 mb-5">
          Tur listelerini tercihlerinize göre uyarlamak için soldaki filtreleri
          kullanın.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTours.map((tour) => (
            <TourCard
              key={tour._id}
              tour={tour}
              onClick={() => navigate(`/explore/${tour._id}`)}
            />
          ))}
        </div>
        <nav className="mt-8 flex justify-center">
          <ul className="flex list-none gap-2">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
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
