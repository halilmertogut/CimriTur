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
  
    useEffect(() => {
      const initialToursData = Array.from({ length: 20 }).map((_, index) => ({
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
  
    const toggleFavorite = (id) => {
        const updatedTours = toursData.map(tour => {
          if (tour.id === id) {
            return { ...tour, isFavorite: !tour.isFavorite };
          }
          return tour;
        });
        setToursData(updatedTours);
      };


  return (
    <div className="flex flex-wrap px-4 py-4 max-w-7xl mx-auto ">
      <aside className="w-full lg:w-1/4 xl:w-1/5 p-4 bg-gray-100 rounded">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Filtreler</h2>
          <button className="text-red-600 hover:text-red-800 text-sm" onClick={clearAllFilters}>Tümünü Temizle</button>
        </div>
        
        {/* Hareket Noktası */}
        <FilterSection title="Hareket Noktası" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, startPoint: '' }))}>
          <input
            type="text"
            placeholder="Başlangıç noktası girin"
            className="form-input w-full mb-2"
            value={keywords.startPoint}
            onChange={(e) => setKeywords({ ...keywords, startPoint: e.target.value })}
          />
        </FilterSection>

        {/* Gitmek İstediğiniz Bölge */}
        <FilterSection title="Gitmek İstediğiniz Bölge" onClear={() => handleClearFilter(() => setKeywords({ ...keywords, region: '' }))}>
          <input
            type="text"
            placeholder="Bölge girin"
            className="form-input w-full mb-2"
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
    <FilterSection title="Fiyat Aralığı" onClear={() => handleClearFilter(() => setPriceRange({ min: '', max: '' }))}>
      <div className="flex gap-2"> {/* Wrapper for inline elements */}
        <div className="flex items-center w-1/2 mb-2">
          <span className="mr-2">₺</span>
          <input
            type="number"
            placeholder="Min fiyat"
            className="form-input w-full"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
        </div>
        <div className="flex items-center w-1/2 mb-2">
          <span className="mr-2">₺</span>
          <input
            type="number"
            placeholder="Max fiyat"
            className="form-input w-full"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
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

    {/* Yıldız Derecelendirmesi */}
    <FilterSection title="Yıldız Derecelendirmesi" onClear={() => handleClearFilter(setSelectedStars)}>
  <div className="grid grid-cols-1 gap-2">
    {['1 Yıldız ve üzeri', '2 Yıldız ve üzeri', '3 Yıldız ve üzeri', '4 Yıldız ve üzeri'].map((star) => (
      <label key={star} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedStars.includes(star)}
          onChange={() => handleCheckboxChange(star, selectedStars, setSelectedStars)}
        />
        <span className="text-sm flex items-center">
          {star}
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
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {toursData.map(tour => (
        
        <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative group">
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
          İndirim %{tour.discountRate} {/* Assuming discountRate is a property of tour */}
        </span>
      )}
    
    <img className="w-full h-70 object-cover rounded-t-xl rounded-b-xl" src={tour.imageUrl} alt={`Tour ${tour.id}`} />
    <div className="p-4 text-xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-4">
                <div>
                  <h5 className="text-md font-bold">{tour.location}</h5>
                  <p className="text-gray-600">{tour.name}</p>
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
            </div>
            <div className="flex items-center justify-between border-t-2 border-gray">
              <div className="flex items-center">
                <svg className="fill-current text-gray-500 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 3h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5C3.346 3 2 4.346 2 6v13c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM5 4h1v.5a.5.5 0 1 0 1 0V4h8v.5a.5.5 0 1 0 1 0V4h1c.551 0 1 .449 1 1v2H4V5c0-.551.449-1 1-1zm14 15c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V9h14v10zm0-11H4V7h14v1z"/>
                </svg>
                <span className="text-sm text-gray-700 mt-2">{new Date(tour.startDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })} - {new Date(tour.endDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.069 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l 1.069 3.292c.3.921-.755 1.688-1.537 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.782.57-1.838-.197-1.537-1.118l1.069-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.782-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.069-3.292z" />
                </svg>
                <span className="text-sm text-orange-500 font-bold ml-1">{tour.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
  </div>
  );
};

export default FiltrationPage;