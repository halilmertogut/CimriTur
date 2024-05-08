import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { addDays, endOfWeek, format, eachDayOfInterval } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdExplore } from "react-icons/md";
import '../css/custom.css';
import { useNavigate } from 'react-router-dom';

const FilterSection = () => {

  const navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const success = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=7d16ea5ca75d4d5788534d4e09ab2fc0`)
      .then(response => response.json())
      .then(data => {
        const components = data.results[0].components;
        // const city = components.country + ', ' + components.province + ', ' + components.city_district || components.village || components.hamlet || "Location not found";
        const city = components.province || "Location not found";

        console.log(city);
        setInputValues(prev => ({ ...prev, startLocation: city }));
      })
      .catch(err => {
        console.error('Error fetching location data:', err);
        setInputValues(prev => ({ ...prev, startLocation: "Error retrieving location" }));
      });
  }
  const error = () => {
    console.error('Unable to retrieve your location');
  };

  const [inputValues, setInputValues] = useState({
    startLocation: '',
    minPrice: '',
    maxPrice: '',
    startDate: new Date(),
    endDate: endOfWeek(new Date(), { weekStartsOn: 1 })
  });

  const searchTours = () => {
    navigate('/explore', { state: inputValues });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const calculateHighlightedDates = () => {
    if (!inputValues.startDate) return [];
    return eachDayOfInterval({
      start: inputValues.startDate,
      end: inputValues.endDate
    });
  };

  const handleDateChange = (date) => {
    setInputValues(prev => ({
      ...prev,
      startDate: date,
      endDate: addDays(date, 7)
    }));
  };

  const CustomInput = ({ value, onClick }) => (
    <button onClick={onClick} className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2">
      {inputValues.startDate ? format(inputValues.startDate, 'dd/MM/yyyy') + ' - ' + format(inputValues.endDate, 'dd/MM/yyyy') : 'Choose start date'}
    </button>
  );

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl flex flex-wrap items-center justify-around gap-4 font-montserrat">
      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <FaMapMarkerAlt size={24} className="text-blue-500" />
        <input
          type="text"
          name="Destination"
          placeholder="Çıkış şehri giriniz.."
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-64 rounded-md p-2 w-72"
          value={inputValues.startLocation}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <p className='text-green-500 text-xl'>&#8378;</p>
        <input
          type="number"
          name="minPrice"
          placeholder="Min TL"
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-24 rounded-md p-2"
          min="0"
          value={inputValues.minPrice}
          onChange={handleInputChange}
        />
        <p className='text-red-500 text-xl'>&#8378;</p>
        <input
          type="number"
          name="maxPrice"
          placeholder="Max TL"
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
          highlightDates={calculateHighlightedDates()}
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2"
          placeholderText="Select a date"
          dateFormat="dd/MM/yyyy"
          customInput={<CustomInput />}
        />
      </div>
      <button className="flex items-center space-x-2 explore-button" onClick={searchTours}>
        <MdExplore size={30} />
        <span>Ara</span>
      </button>
    </div>
  );
};

export default FilterSection;
