import React, { useState, useEffect } from 'react';

const FilterSection = ({ title, children, onClear }) => (
  <div className="mb-6 bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-md font-semibold">{title}</h3>
      <button className="text-gray-600 hover:text-gray-800 text-xs" onClick={onClear}>Temizle</button>
    </div>
    {children}
  </div>
);

const CheckboxGroup = ({ options, selectedOptions, onChange }) => (
  <div className="grid grid-cols-3 gap-2">
    {options.map((option) => (
      <label key={option} className="flex items-center space-x-2">
        <input type="checkbox" checked={selectedOptions.includes(option)} onChange={() => onChange(option)} />
        <span className="text-xs">{option}</span>
      </label>
    ))}
  </div>
);

const ButtonGroup = ({ options, selectedOptions, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => (
      <button
        key={option}
        className={`text-xs px-2 py-1 ${selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-full`}
        onClick={() => onChange(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

const TourCard = ({ tour, toggleFavorite }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative group hover:shadow-xl transition-shadow duration-300">
    <button
      className={`absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full ${tour.isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400'} group-hover:flex`}
      onClick={() => toggleFavorite(tour.id)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
      </svg>
    </button>
    {tour.discount && (
      <span className="absolute left-2 top-5 bg-red-500 text-white text-xs px-1 py-1 rounded" style={{ transform: 'rotate(-45deg)' }}>
        İndirim %{Math.round(100 - (tour.price / tour.originalPrice) * 100)}
      </span>
    )}
    <img className="w-full h-48 object-cover" src={tour.tourImagesUrl[0]} alt={`Tour ${tour.name}`} />
    <div className="p-4 text-xs flex-1 flex flex-col justify-between">
      <h5 className="text-md font-bold">{tour.name}</h5>
      <p className="text-gray-600 truncate">{tour.description || "No description provided."}</p>
      <div className="flex justify-between items-center mt-2">
        <span>₺{tour.price}</span>
        <span className="text-sm text-orange-500 font-bold">{tour.rating.toFixed(1)}</span>
      </div>
    </div>
  </div>
);

const FiltrationPage = () => {
  const [keywords, setKeywords] = useState({ startPoint: '', region: '' });
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedAccommodations, setSelectedAccommodations] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [sortOption, setSortOption] = useState('priceLowHigh');
  const [toursData, setToursData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 21;
  // Function to format number with dots as thousand separators
const formatNumber = (value) => {
  // Only digits are taken, and a dot is added every three digits
  return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Function to remove dots for unformatting number
const unformatNumber = (value) => {
  return value.replace(/\./g, '');
};

// Function to toggle the favorite status of a tour
const toggleFavorite = (id) => {
  const updatedTours = toursData.map(tour => {
    if (tour.id === id) {
      return { ...tour, isFavorite: !tour.isFavorite };
    }
    return tour;
  });
  setToursData(updatedTours);
};


  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tours/all-tours');
        const data = await response.json();
        setToursData(data);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    };

    fetchTours();
  }, []);

  // Pagination Logic
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(toursData.length / toursPerPage);

  useEffect(() => {
    if (toursData.length === 0) return; // If no tours, do nothing
  
    let sortedTours = [...toursData]; // Create a shallow copy to sort
    switch (sortOption) {
      case 'priceLowHigh':
        sortedTours.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sortedTours.sort((a, b) => b.price - a.price);
        break;
      case 'durationShortLong':
        sortedTours.sort((a, b) => a.days - b.days);
        break;
      case 'durationLongShort':
        sortedTours.sort((a, b) => b.days - a.days);
        break;
      default:
        break;
    }
  
    if (JSON.stringify(sortedTours) !== JSON.stringify(toursData)) {
      setToursData(sortedTours); // Update state only if sorted result is different
    }
  }, [sortOption, toursData]); // Include all dependencies that control this effect
  

  const handleCheckboxChange = (option, list, setList) => {
    const currentIndex = list.indexOf(option);
    const newChecked = [...list];
    if (currentIndex === -1) {
      newChecked.push(option);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setList(newChecked);
  };

  const handleClearFilter = (filterSetter) => {
    if (Array.isArray(filterSetter())) {
      filterSetter([]);
    } else {
      filterSetter('');
    }
  };

  const clearAllFilters = () => {
    setKeywords({ startPoint: '', region: '' });
    setSelectedMonths([]);
    setPriceRange({ min: '', max: '' });
    setSelectedAccommodations([]);
    setSelectedStars([]);
    setSelectedThemes([]);
  };

  return (
    <div className="flex flex-wrap px-4 py-4 max-w-7xl mx-auto font-montserrat">
      <div className="flex -mx-4">
        <aside className="w-full lg:w-1/4 px-6 bg-white rounded">
          <div className="pt-4">
            <FilterSection title="Hareket Noktası" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, startPoint: '' }))}>
              <input type="text" placeholder="Başlangıç noktası girin" className="form-input w-full mb-2 mt-4 border border-gray-300 rounded-md pl-4 py-2 focus:outline-none focus:border-blue-500"
                value={keywords.startPoint} onChange={(e) => setKeywords({ ...keywords, startPoint: e.target.value })} />
            </FilterSection>

            <FilterSection title="Gitmek İstediğiniz Bölge" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, region: '' }))}>
              <input type="text" placeholder="Bölge girin" className="form-input w-full mb-2 border border-gray-300 rounded-md pl-4 py-2 focus:outline-none focus:border-blue-500"
                value={keywords.region} onChange={(e) => setKeywords({ ...keywords, region: e.target.value })} />
            </FilterSection>

            <FilterSection title="Dönem" onClear={() => handleClearFilter(setSelectedMonths)}>
              <CheckboxGroup options={['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']}
                selectedOptions={selectedMonths} onChange={(month) => handleCheckboxChange(month, selectedMonths, setSelectedMonths)} />
            </FilterSection>

            <FilterSection title="Fiyat Aralığı" onClear={() => handleClearFilter(() => setPriceRange({ min: '', max: '' }))}>
              <div className="flex gap-2">
                <div className="flex items-center w-1/2 mb-2">
                  <span className="mr-2">₺</span>
                  <input type="text" placeholder="Min fiyat" className="form-input w-full" value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: formatNumber(e.target.value) })}
                    onBlur={(e) => setPriceRange({ ...priceRange, min: unformatNumber(e.target.value) })} />
                </div>
                <div className="flex items-center w-1/2 mb-2">
                  <span className="mr-2">₺</span>
                  <input type="text" placeholder="Max fiyat" className="form-input w-full" value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: formatNumber(e.target.value) })}
                    onBlur={(e) => setPriceRange({ ...priceRange, max: unformatNumber(e.target.value) })} />
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Konaklama Türü" onClear={() => handleClearFilter(setSelectedAccommodations)}>
              <ButtonGroup options={['Otel', 'Tatil Evi', 'Hostel', 'Dağ Evi', 'Çadır']} selectedOptions={selectedAccommodations}
                onChange={(accommodation) => handleCheckboxChange(accommodation, selectedAccommodations, setSelectedAccommodations)} />
            </FilterSection>

            <FilterSection title="Yıldız Derecelendirmesi" onClear={() => handleClearFilter(setSelectedStars)}>
              <div className="grid grid-cols-1 gap-2">
                {['1 Yıldız', '2 Yıldız', '3 Yıldız', '4 Yıldız'].map((star, index) => (
                  <label key={star} className="flex items-center space-x-2">
                    <input type="radio" name="starRating" value={star} checked={selectedStars === star}
                      onChange={() => setSelectedStars(star)} />
                    <span className="text-sm flex items-center">{`${index + 1} Yıldız ve üzeri`}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Temalar" onClear={() => handleClearFilter(setSelectedThemes)}>
              <ButtonGroup options={['Deniz', 'Macera', 'Doğa ve Spor', 'Eğlence', 'Tarih ve Kültür']} selectedOptions={selectedThemes}
                onChange={(theme) => handleCheckboxChange(theme, selectedThemes, setSelectedThemes)} />
            </FilterSection>
          </div>

          <div className="sticky bottom-0 pb-5">
            <div className="flex justify-between items-center space-x-4 px-2">
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow"
                onClick={clearAllFilters} style={{ minWidth: 'fit-content' }}>
                Tümünü Temizle
              </button>
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow"
                onClick={() => {/* Apply filters logic here */}} style={{ minWidth: 'fit-content' }}>
                Uygula
              </button>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-4/5 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Etiket 1</span>
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">Etiket 2</span>
            </div>
            <div>
              <select className="form-select border-gray-300 rounded" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="priceLowHigh">Fiyata Göre Artan</option>
                <option value="priceHighLow">Fiyata Göre Azalan</option>
                <option value="durationShortLong">Süreye Göre Artan</option>
                <option value="durationLongShort">Süreye Göre Azalan</option>
              </select>
            </div>
          </div>

          <div className="flex-1 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentTours.map(tour => (
                <TourCard key={tour.id} tour={tour} toggleFavorite={toggleFavorite} />
              ))}
            </div>
          </div>

          <div className="py-4 text-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} className={`mx-2 p-2 text-base border rounded ${i + 1 === currentPage ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FiltrationPage;
