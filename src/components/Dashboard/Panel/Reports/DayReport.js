import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialToursData = [
    {
        date: '2024-04-16', // Date as a string
        name: 'Otobüslü Orta Avrupa Turu',
        reservation: 2,
        participant: 7,
        payment: 3,
        quota: '8 / 10',
        active: true,
        actions: ['Action 1', 'Action 2']
    },
    // Add more tour data here as needed
];

const DayReport = () => {
    const [toursData, setToursData] = useState(initialToursData.map(tour => ({
        ...tour,
        date: new Date(tour.date) // Convert string to Date object on initialization
    })));
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // Filter tours based on the date range
    const filteredTours = toursData.filter(tour =>
        tour.date >= startDate && tour.date <= endDate
    );

    return (
        <div className="container mx-auto p-4 font-montserrat">
            <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-grow items-center bg-white rounded overflow-hidden shadow">
                    <span className="material-icons-outlined text-gray-500 p-2">Başlangıç Tarihi</span>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        className="p-2 w-full"
                        placeholderText="Başlangıç tarihi seç"
                    />
                </div>
                <div className="flex flex-grow items-center bg-white rounded overflow-hidden shadow">
                    <span className="material-icons-outlined text-gray-500 p-2">Bitiş Tarihi </span>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="dd/MM/yyyy"
                        className="p-2 w-full"
                        placeholderText="Bitiş tarihi seç"
                    />
                </div>
                <button className="bg-sky-500 text-white px-4 py-2 rounded shadow flex-shrink-0">
                    FİLTRELE
                </button>
            </div>
            <table className="w-full bg-white rounded-md shadow ">
                <thead className="bg-gray-600 bg-opacity-50 text-white">
                    <tr>
                        <th className="py-3 px-4">ÇIKIŞ TARİHİ</th>
                        <th className="py-3 px-4">TUR</th>
                        <th className="py-3 px-4">Rezervasyon</th>
                        <th className="py-3 px-4">Katılımcı</th>
                        <th className="py-3 px-4">Ödeme</th>
                        <th className="py-3 px-4">Kontenjan</th>
                        <th className="py-3 px-4">Aktif</th>
                        <th className="py-3 px-4">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTours.length > 0 ? filteredTours.map((tour, index) => (
                        <tr key={index} className="text-gray-700 border-b text-center">
                            <td className="py-3 px-4">{tour.date.toLocaleDateString('tr-TR')}</td>
                            <td className="py-3 px-4">{tour.name}</td>
                            <td className="py-3 px-4">{tour.reservation}</td>
                            <td className="py-3 px-4">{tour.participant}</td>
                            <td className="py-3 px-4">{tour.payment}</td>
                            <td className="py-3 px-4">{tour.quota}</td>
                            <td className="py-3 px-4">
                                <span className={`font-bold ${tour.active ? 'text-green-500' : 'text-red-500'}`}>
                                    {tour.active ? '✓' : '✕'}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <select className="border rounded py-1 px-2 bg-white shadow-sm">
                                    {['Seçiniz', ...tour.actions].map(action => (
                                        <option key={action}>{action}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="8" className="text-center py-3">No tours available for selected dates</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default DayReport;
