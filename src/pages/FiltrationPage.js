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
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => onChange(option)}
          />
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
  
    useEffect(() => {
      const initialToursData = Array.from({ length: 50 }).map((_, index) => ({
        id: index + 1,
        name: `Tur ${index + 1}`,
        location: `Konum ${index + 1}`,
        days: Math.floor(Math.random() * 5) + 1,
        price: Math.floor(Math.random() * 1000) + 500,
        isFavorite: false,
        imageUrl: `https://picsum.photos/600/600?random=${index + 1}`,
        startDate: `2023-07-${(index % 10) + 20}`, // YYYY-MM-DD formatında rastgele başlangıç tarihi
        endDate: `2023-07-${(index % 10) + 23}`,   // YYYY-MM-DD formatında rastgele bitiş tarihi
        rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0 arasında rastgele yıldız puanı
        discount: index % 5 === 0 ? true : false,  // Her 5 turdan birine indirim uygula
        originalPrice: Math.floor(Math.random() * 1000) + 1000 // İndirimli turlar için orijinal fiyat
      }));
  
      setToursData(initialToursData);
    }, []);

      // Pagination Logic
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(toursData.length / toursPerPage);
  
    useEffect(() => {
      if (toursData.length === 0) return; // toursData boşsa hiçbir şey yapma
  
      let sortedTours = [...toursData];
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
      setToursData(sortedTours);
    }, [sortOption, toursData]);
  
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
// Favori butonunu değiştiren işlev
const toggleFavorite = (id) => {
  const updatedTours = toursData.map(tour => {
    if (tour.id === id) {
      return { ...tour, isFavorite: !tour.isFavorite };
    }
    return tour;
  });
  setToursData(updatedTours);
};

// Binlik ayırıcı olarak nokta kullanarak sayıyı formatlar
const formatNumber = (value) => {
  // Sadece rakamları alır ve her üç basamakta bir nokta ekler
  return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Formatlanmış sayıdan noktaları kaldırır
const unformatNumber = (value) => {
  return value.replace(/\./g, '');
};


  return (
    <div className="flex flex-wrap px-4 py-4 max-w-7xl mx-auto font-montserrat">
    <div className="flex -mx-4">
      <aside className="w-full lg:w-1/4 px-6 bg-white rounded">
        <div className="pt-4"> {/* Additional padding at the top for overall spacing */}
          {/* Hareket Noktası - Slightly lower it with mt-4 for margin top */}
          <FilterSection title="Hareket Noktası" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, startPoint: '' }))}>
            <input
              type="text"
              placeholder="Başlangıç noktası girin"
              className="form-input w-full mb-2 mt-4 border border-gray-300 rounded-md pl-4 py-2 focus:outline-none focus:border-blue-500" // Added mt-4 here
              value={keywords.startPoint}
              onChange={(e) => setKeywords({ ...keywords, startPoint: e.target.value })}
            />
          </FilterSection>

{/* Gitmek İstediğiniz Bölge */}
<FilterSection title="Gitmek İstediğiniz Bölge" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, region: '' }))}>
  <input
    type="text"
    placeholder="Bölge girin"
    className="form-input w-full mb-2 border border-gray-300 rounded-md pl-4 py-2 focus:outline-none focus:border-blue-500"
    value={keywords.region}
    onChange={(e) => setKeywords({ ...keywords, region: e.target.value })}
  />
</FilterSection>


        {/* Dönem */}
        <FilterSection title="Dönem" onClear={() => handleClearFilter(setSelectedMonths)}>
          <CheckboxGroup
            options={['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']}
            selectedOptions={selectedMonths}
            onChange={(month) => handleCheckboxChange(month, selectedMonths, setSelectedMonths)}
            />
        </FilterSection>
    {/* Fiyat Aralığı */}
{/* Fiyat Aralığı */}
<FilterSection title="Fiyat Aralığı" onClear={() => handleClearFilter(() => setPriceRange({ min: '', max: '' }))}>
  <div className="flex gap-2"> {/* Wrapper for inline elements */}
    <div className="flex items-center w-1/2 mb-2">
      <span className="mr-2">₺</span>
      <input
        type="text" // Tipi "text" olarak değiştirildi
        placeholder="Min fiyat"
        className="form-input w-full"
        value={priceRange.min}
        onChange={(e) => setPriceRange({ ...priceRange, min: formatNumber(e.target.value) })}
        onBlur={(e) => setPriceRange({ ...priceRange, min: unformatNumber(e.target.value) })}
      />
    </div>
    <div className="flex items-center w-1/2 mb-2">
      <span className="mr-2">₺</span>
      <input
        type="text" // Tipi "text" olarak değiştirildi
        placeholder="Max fiyat"
        className="form-input w-full"
        value={priceRange.max}
        onChange={(e) => setPriceRange({ ...priceRange, max: formatNumber(e.target.value) })}
        onBlur={(e) => setPriceRange({ ...priceRange, max: unformatNumber(e.target.value) })}
      />
    </div>
  </div>
</FilterSection>


    {/* Konaklama Türü */}
    <FilterSection title="Konaklama Türü" onClear={() => handleClearFilter(setSelectedAccommodations)}>
      <ButtonGroup
        options={['Otel', 'Tatil Evi', 'Hostel', 'Dağ Evi', 'Çadır']}
        selectedOptions={selectedAccommodations}
        onChange={(accommodation) => handleCheckboxChange(accommodation, selectedAccommodations, setSelectedAccommodations)}
      />
    </FilterSection>

    {/* Yıldız Derecelendirmesi - Changed to Radio Buttons */}
    <FilterSection title="Yıldız Derecelendirmesi" onClear={() => handleClearFilter(setSelectedStars)}>
      <div className="grid grid-cols-1 gap-2">
        {['1 Yıldız', '2 Yıldız', '3 Yıldız', '4 Yıldız'].map((star, index) => (
          <label key={star} className="flex items-center space-x-2">
            <input
              type="radio"
              name="starRating"
              value={star}
              checked={selectedStars === star}
              onChange={() => setSelectedStars(star)}
            />
            <span className="text-sm flex items-center">
              {`${index + 1} Yıldız ve üzeri`}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>


    {/* Temalar */}
    <FilterSection title="Temalar" onClear={() => handleClearFilter(setSelectedThemes)}>
      <ButtonGroup
        options={['Deniz', 'Macera', 'Doğa ve Spor', 'Eğlence', 'Tarih ve Kültür']}
        selectedOptions={selectedThemes}
        onChange={(theme) => handleCheckboxChange(theme, selectedThemes, setSelectedThemes)}
      />
    </FilterSection>
    </div>
        {/* Sticky Buttons at the bottom */}
        <div className="sticky bottom-0 pb-5">
          <div className="flex justify-between items-center space-x-4 px-2">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow"
              onClick={clearAllFilters} style={{ minWidth: 'fit-content' }}>
              Tümünü Temizle
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow"
              onClick={() => {/* Apply filters logic here */}} style={{ minWidth: 'fit-content' }}>
              Uygula
            </button>
          </div>
        </div>

      </aside>
      <main className="w-full lg:w-4/5 p-4">
        <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
      {/* Tagler */}
      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Etiket 1</span>
      <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">Etiket 2</span>
    </div>
    <div>
      {/* Sıralama seçenekleri */}
      <select className="form-select border-gray-300 rounded" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="priceLowHigh">Fiyata Göre Artan</option>
        <option value="priceHighLow">Fiyata Göre Azalan</option>
        <option value="durationShortLong">Süreye Göre Artan</option>
        <option value="durationLongShort">Süreye Göre Azalan</option>
        </select>
        </div>
        </div>
{/* Tur kartları */}
<div className="flex-1 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTours.map(tour => (
      <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative group hover:shadow-xl transition-shadow duration-300">
        {/* Favori Butonu */}
        <button
          className={`absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full ${tour.isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400'} group-hover:flex`}
          onClick={() => toggleFavorite(tour.id)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>

        {/* İndirim Etiketi */}
        {tour.discount && (
          <span className="absolute left-2 top-5 bg-red-500 text-white text-xs px-1 py-1 rounded" style={{ transform: 'rotate(-45deg)' }}>
            İndirim %{tour.discountRate}
          </span>
        )}
    
        <img className="w-full h-48 object-cover rounded-t-xl" src={tour.imageUrl} alt={`Tour ${tour.id}`} />

        <div className="p-4 text-xs flex-1 flex flex-col justify-between">
          <div className="flex justify-between mb-4">
            <div>
              <h5 className="text-md font-bold">{tour.location.length > 10 ? `${tour.location.slice(0, 10)}...` : tour.location}</h5>
              <p className="text-gray-600">{tour.name.length > 10 ? `${tour.name.slice(0, 10)}...` : tour.name}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className={`rounded-lg px-3 py-1 ${tour.discount ? 'border-2 border-red-500' : 'border-2 border-blue-500'}`}>
                {tour.discount ? (
                  <>
                    <span className="text-red-500 block line-through">₺{tour.originalPrice}</span>
                    <span className="text-red-500 block">₺{tour.price}</span>
                  </>
                ) : (
                  <span className="block">₺{tour.price}</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-2 border-gray-200">
            <div className="flex items-center">
              <span className="text-sm text-gray-700">{`${new Date(tour.startDate).toLocaleDateString('tr-TR')} - ${new Date(tour.endDate).toLocaleDateString('tr-TR')}`}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-orange-500 font-bold ml-1">{tour.rating}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
</div>

    {/* Pagination controls added here */}
    <div className="py-4 text-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`mx-2 p-2 text-base border rounded ${i + 1 === currentPage ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => paginate(i + 1)}
        >
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