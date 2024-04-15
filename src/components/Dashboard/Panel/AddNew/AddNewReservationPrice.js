import React, { useState } from 'react';

const CounterInput = ({ label, value, onIncrement, onDecrement }) => (
  <div className="flex items-center">
    <label className="font-medium mr-2">{label}:</label>
    <button
      onClick={() => onDecrement(value)}
      disabled={value <= 0}
      className={`text-white font-bold py-1 px-2 rounded-l focus:outline-none ${
        value > 0 ? 'bg-red-500 hover:bg-red-600' : 'bg-red-300'
      }`}
    >
      -
    </button>
    <input
      type="text"
      readOnly
      value={value}
      className="w-10 text-center border-t border-b border-gray-200 focus:outline-none"
    />
    <button
      onClick={() => onIncrement(value)}
      className="bg-green-500 text-white font-bold py-1 px-2 rounded-r hover:bg-green-600 focus:outline-none"
    >
      +
    </button>
  </div>
);

const HotelOption = ({ hotel, onSelectHotel, selectedHotel }) => (
  <div
    className={`p-4 rounded-lg shadow cursor-pointer ${
      selectedHotel === hotel.name ? 'bg-blue-500 text-white' : 'bg-gray-100'
    }`}
    onClick={() => onSelectHotel(hotel.name)}
  >
    <h2 className="text-lg font-semibold">{hotel.name}</h2>
    <p className="text-gray-600">{`${hotel.stars} yıldız`}</p>
    <p className="text-gray-600">{`${hotel.pricePerNight} TL / Gece`}</p>
  </div>
);

const RoomOption = ({ roomType, onRoomTypeChange, currency, onCurrencyChange }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">{roomType.name} Oda Fiyatları</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['single', 'double', 'triple'].map((type) => (
        <div key={type}>
          <label className="block text-gray-700 text-sm font-bold mb-2">{type.charAt(0).toUpperCase() + type.slice(1)} PP:</label>
          <input
            type="number"
            name={type}
            value={roomType[type]}
            onChange={(e) => onRoomTypeChange(roomType.name, type, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Currency:</label>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="TRY">TL</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  </div>
);

const AddNewReservationPrice = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState('');
  const [currency, setCurrency] = useState('TRY');

  const hotels = [
    { id: 1, name: 'Hilton', stars: 5, pricePerNight: 500 },
    { id: 2, name: 'Marriott', stars: 4, pricePerNight: 350 },
    { id: 3, name: 'Sheraton', stars: 3, pricePerNight: 250 },
  ];

  const [roomTypes, setRoomTypes] = useState({
    'Standard Oda': { single: 2250, double: 4500, triple: 6750 },
    'Suite Oda': { single: 4500, double: 9000, triple: 13500 }
  });

  const onRoomTypeChange = (roomName, key, value) => {
    setRoomTypes(prevRoomTypes => ({
      ...prevRoomTypes,
      [roomName]: {
        ...prevRoomTypes[roomName],
        [key]: parseFloat(value) || 0
      }
    }));
  };

  const onCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const onSelectHotel = (hotelName) => {
    setSelectedHotel(hotelName);
  };

  const calculatePrice = () => {
    const hotel = hotels.find(h => h.name === selectedHotel);
    const prices = roomTypes[selectedHotel] || roomTypes['Standard Room']; // Default to Standard if no specific type found
    const basePrice = (hotel ? hotel.pricePerNight : 0) * adultCount;
    const additionalPrice = prices.single * adultCount + prices.double * childCount + prices.triple * infantCount;
    const convertedPrice = convertPriceToCurrency(basePrice + additionalPrice, currency);
    setTotalPrice(convertedPrice);
  };

  const convertPriceToCurrency = (price, currency) => {
    const conversionRates = { 'TRY': 1, 'EUR': 0.1, 'USD': 0.12 }; // Example conversion rates
    return price * (conversionRates[currency] || 1);
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Ege Turu</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {hotels.map((hotel) => (
          <HotelOption
            key={hotel.id}
            hotel={hotel}
            selectedHotel={selectedHotel}
            onSelectHotel={onSelectHotel}
          />
        ))}
      </div>

      {Object.entries(roomTypes).map(([name, prices]) => (
        <RoomOption
          key={name}
          roomType={{ name, ...prices }}
          onRoomTypeChange={onRoomTypeChange}
          currency={currency}
          onCurrencyChange={onCurrencyChange}
        />
      ))}

      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="px-2 w-full md:w-1/3">
          <CounterInput
            label="Adults"
            value={adultCount}
            onIncrement={() => setAdultCount(adultCount + 1)}
            onDecrement={() => setAdultCount(Math.max(adultCount - 1, 0))}
          />
        </div>
        <div className="px-2 w-full md:w-1/3">
          <CounterInput
            label="Children"
            value={childCount}
            onIncrement={() => setChildCount(childCount + 1)}
            onDecrement={() => setChildCount(Math.max(childCount - 1, 0))}
          />
        </div>
        <div className="px-2 w-full md:w-1/3">
          <CounterInput
            label="Infants"
            value={infantCount}
            onIncrement={() => setInfantCount(infantCount + 1)}
            onDecrement={() => setInfantCount(Math.max(infantCount - 1, 0))}
          />
        </div>
      </div>

      <button
        onClick={calculatePrice}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Calculate Price
      </button>

      {totalPrice > 0 && (
        <div className="mt-4">
          <p className="text-xl">Toplam Fiyat: {totalPrice} {currency}</p>
        </div>
      )}
    </div>
  );
};

export default AddNewReservationPrice;
