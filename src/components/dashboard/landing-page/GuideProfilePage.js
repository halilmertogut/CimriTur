import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const GuideProfilePage = ({ guideId }) => {
  const [guideProfile, setGuideProfile] = useState({
    fullName: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    phoneNumber: '+905551234567',
    dateOfBirth: '1975-05-21',
    languages: ['İngilizce', 'İspanyolca'],
    tourRegions: ['İstanbul', 'Kapadokya'],
    experience: 'İstanbul\'da tarihi yerlerde rehberlik yapmanın üzerinden on yıl geçti. Topkapı Sarayı, Ayasofya gibi dünya çapında ünlü mekanlarda derin tarih bilgimle ziyaretçilere unutulmaz deneyimler sunuyorum.',
    biography: 'İstanbul\'un hareketli pazarlarından, Boğaz\'ın sakin güzelliklerine kadar, bu şehirde tur rehberliği yapmak benim tutkum ve mesleğim. Misafirlerime bilgilendirici, eğlenceli ve unutulmaz deneyimler sunmayı kendime ilke edindim.',
    profilePhoto: 'https://i.imgur.com/6Tm3df5.jpg',
  });
  const [availableDates, setAvailableDates] = useState({
    '2024-04-14': ['9:00 AM', '10:30 AM', '2:00 PM', '4:00 PM'],
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelect = (time) => {
    setSelectedTime(time === selectedTime ? '' : time);  // Toggle zaman seçimi
  };

  const renderAvailableTimes = () => {
    if (!selectedDate) return null;
    const dateString = selectedDate.toISOString().split('T')[0];
    const times = availableDates[dateString] || [];
    return times.length > 0 ? (
      <div className="flex flex-wrap justify-center items-center mt-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`text-xs font-semibold mx-2 my-1 px-3 py-1 rounded-full ${selectedTime === time ? 'bg-blue-800 text-white' : 'bg-blue-200 text-blue-800'}`}
          >
            {time}
          </button>
        ))}
      </div>
    ) : (
      <div className="text-sm text-gray-500 mt-2">Bu tarihte uygun zaman yok.</div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100 p-4 rounded-l-lg">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto">
              <img src={guideProfile.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-center text-xl font-semibold my-2">{guideProfile.fullName}</h2>
            <p className="text-center text-gray-600">{guideProfile.email}</p>
            <p className="text-center text-gray-600">{guideProfile.phoneNumber}</p>
          </div>
          <div className="md:w-2/3 p-4">
            <h3 className="text-lg font-semibold">Diller</h3>
            <p>{guideProfile.languages.join(', ')}</p>
            <h3 className="text-lg font-semibold mt-4">Tur Bölgeleri</h3>
            <p>{guideProfile.tourRegions.join(', ')}</p>
            <h3 className="text-lg font-semibold mt-4">Deneyim</h3>
            <p>{guideProfile.experience}</p>
            <h3 className="text-lg font-semibold mt-4">Biyografi</h3>
            <p>{guideProfile.biography}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 p-8">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Müsait Tarihler</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => { setSelectedDate(date); setSelectedTime(''); }}
              inline
              calendarClassName="react-datepicker-custom"
              highlightDates={Object.keys(availableDates).map((date) => new Date(date))}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Müsait Zamanlar</label>
            {renderAvailableTimes()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfilePage;
