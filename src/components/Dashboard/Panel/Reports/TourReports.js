import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';


const TourDetailsCard = ({ date, day, name, reference }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            
            <h3 className="text-lg font-semibold">{date} {day}</h3>
            <div className="border p-3 rounded my-2">
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">{reference}</p>
                <div className="flex justify-around mt-2">
                    <button className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200">Tur Raporu</button>
                    <button className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200">Satışlar</button>
                    <button className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200">Maliyetler</button>
                    <button className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200">Rezervasyonlar</button>
                    <select
                        id="reportType"
                        name="reportType"
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                        <option value="">Araçlar</option>
                        <option value="">Lütfen seçim yapın</option>
                        <option value="">Lütfen seçim yapın</option>
                        {/* Diğer opsiyonlar buraya eklenecek */}
                    </select>
                    <select
                        id="reportType"
                        name="reportType"
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                        <option value="">Aktarım</option>
                        <option value="">Lütfen seçim yapın</option>
                        <option value="">Lütfen seçim yapın</option>
                        {/* Diğer opsiyonlar buraya eklenecek */}
                    </select>
                </div>
                
            </div>
        </div>
    );
};
const toursData = [
    {
        id: 1,
        date: '21 Nisan 2024',
        day: 'Pazar',
        name: 'Transfer: Dalaman Havalimanı',
        reference: '#13-240421',
    },
    {
        id: 2,
        date: '24 Nisan 2024',
        day: 'Çarşamba',
        name: 'Otobüslü Orta Avrupa Turu',
        reference: '#12-240424',
    },
    // Daha fazla tur eklenebilir...
];

const TourReports = () => {


    const [date, setDate] = useState(new Date());

    const handleSelect = (ranges) => {
        setDate(ranges.selection.startDate);
    };

    const selectionRange = {
        startDate: date,
        endDate: date,
        key: 'selection',
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">RAPORLAR</h2>
                    <p className="text-sm text-gray-500">Rapor almak istediğiniz hizmeti seçiniz.</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">Tur veya Hizmet Seçiniz</label>
                    <select
                        id="reportType"
                        name="reportType"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                        <option value="">Lütfen seçim yapın</option>
                        <option value="">Lütfen seçim yapın</option>
                        <option value="">Lütfen seçim yapın</option>
                        {/* Diğer opsiyonlar buraya eklenecek */}
                    </select>
                </div>
            </div>


            <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">ÇIKIŞ RAPORLARI</h2>
                    <p className="text-sm text-gray-500">Depar tarihine göre görmek istediğiniz bir seçiniz</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        direction="horizontal"
                        showDateDisplay={false}
                        showMonthAndYearPickers={true}
                        rangeColors={['#3B82F6']}
                        className="col-span-1"
                    />
                    <input
                        type="text"
                        placeholder="Tur Adı"
                        className="border rounded py-1 px-2 col-span-1 input input-bordered w-full"
                    />
                    <button className="btn btn-primary col-span-1 bg-sky-500 text-white px-4 py-2 rounded shadow flex-shrink-0">ARA</button>
                </div>

            </div>

            <div className="mt-8">
                {toursData.map(tour => (
                    <TourDetailsCard
                        key={tour.id}
                        date={tour.date}
                        day={tour.day}
                        name={tour.name}
                        reference={tour.reference}
                    />
                ))}
            </div>
        </div>
    );
};

export default TourReports;
