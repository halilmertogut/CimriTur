import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { startOfWeek, endOfWeek, format, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdExplore } from "react-icons/md";
import './css/custom.css';

const FilterSection = () => {
  const [inputValues, setInputValues] = useState({
    tourRegion: '',
    minPrice: '',
    maxPrice: '',
    startDate: new Date(),
    endDate: endOfWeek(new Date(), { weekStartsOn: 1 })
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const handleWeekChange = (date) => {
    if (date && !isNaN(date.valueOf())) {
      let startWeek = startOfWeek(date, { weekStartsOn: 1 });
      let endWeek = endOfWeek(date, { weekStartsOn: 1 });
      setInputValues(prev => ({ ...prev, startDate: startWeek, endDate: endWeek }));
    }
  };

  const handleWeekHighlight = (date) => {
    if (!inputValues.startDate) return false;
    return (
      date >= startOfWeek(inputValues.startDate, { weekStartsOn: 1 }) &&
      date <= endOfWeek(inputValues.startDate, { weekStartsOn: 1 })
    );
  };

  const CustomInput = ({ value, onClick }) => (
    <button onClick={onClick} className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2">
      {format(inputValues.startDate, 'dd/MM/yyyy')} - {format(inputValues.endDate, 'dd/MM/yyyy')}
    </button>
  );

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl flex flex-wrap items-center justify-around gap-4 font-montserrat">
      <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm">
        <FaMapMarkerAlt size={24} className="text-blue-500" />
        <input
          type="text"
          name="Destination"
          placeholder="Gideceğiniz yeri giriniz"
          className="focus:outline-none placeholder-gray-500 text-gray-700 w-64 rounded-md p-2"
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
        onChange={handleWeekChange}
        highlightDates={[{
          "react-datepicker__day--highlighted-custom-1": [inputValues.startDate].map(date => startOfWeek(date, { weekStartsOn: 1 })).map(date => addDays(date, 1))
        }]}
        className="focus:outline-none placeholder-gray-500 text-gray-700 w-full max-w-xs rounded-md p-2"
        placeholderText="Select a date"
        dateFormat="dd/MM/yyyy"
        dayClassName={date => handleWeekHighlight(date) ? 'react-datepicker__day--highlighted-custom-1' : undefined}
        shouldCloseOnSelect={true}
        showWeekNumbers
        customInput={<CustomInput />}
      />
    </div>

      <button className="flex items-center space-x-2 explore-button">
        <MdExplore size={30} />
        <span>Ara</span>
      </button>
    </div>
  );
};

export default FilterSection;
