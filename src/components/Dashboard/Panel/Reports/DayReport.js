import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const initialToursData = [
    {
        date: '2024-04-16',
        name: 'Otobüslü Orta Avrupa Turu',
        reservation: 2,
        participant: 7,
        payment: 3,
        quota: '8 / 10',
        active: true,
        actions: ['Aksiyon 1', 'Aksiyon 2']
    },
    {
        date: '2024-05-20',
        name: 'Ege Kıyıları Macerası',
        reservation: 5,
        participant: 15,
        payment: 10,
        quota: '15 / 20',
        active: false,
        actions: ['Aksiyon 1', 'Aksiyon 2']
    },
];

const DayReport = () => {
    const [toursData, setToursData] = useState(initialToursData.map(tour => ({
        ...tour,
        date: new Date(tour.date)
    })));
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const filteredTours = toursData.filter(tour =>
        tour.date >= startDate && tour.date <= endDate
    );

    return (
        <div className="container mx-auto p-4 font-montserrat">
            <div className="flex flex-wrap gap-4 mb-4">
                <DatePickerWrapper label="Başlangıç Tarihi" date={startDate} onChange={setStartDate} endDate={endDate} />
                <DatePickerWrapper label="Bitiş Tarihi" date={endDate} onChange={setEndDate} startDate={startDate} />
                <button className="bg-sky-500 text-white px-4 py-2 rounded shadow flex-shrink-0">
                    FİLTRELE
                </button>
            </div>
            <table className="min-w-full leading-normal shadow rounded">
                <thead className="bg-gray-200 text-gray-600">
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            ÇIKIŞ TARİHİ
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            TUR
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            Rezervasyon
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            Katılımcı
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            Ödeme
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            Kontenjan
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            Aktif
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                            İşlemler
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTours.length > 0 ? filteredTours.map((tour, index) => (
                        <tr key={index} className="text-gray-700 border-b">
                            <td className="px-5 py-4">{tour.date.toLocaleDateString('tr-TR')}</td>
                            <td className="px-5 py-4">{tour.name}</td>
                            <td className="px-5 py-4">{tour.reservation}</td>
                            <td className="px-5 py-4">{tour.participant}</td>
                            <td className="px-5 py-4">{tour.payment}</td>
                            <td className="px-5 py-4">{tour.quota}</td>
                            <td className="px-5 py-4 text-center">
                                {tour.active ? <CheckIcon className="h-5 w-5 text-green-500" /> : <XIcon className="h-5 w-5 text-red-500" />}
                            </td>
                            <td className="px-5 py-4">
                                <select className="border rounded bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring">
                                    {tour.actions.map(action => (
                                        <option key={action}>{action}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="8" className="text-center py-3">Seçili tarihler için tur bulunamadı</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

const DatePickerWrapper = ({ label, date, onChange, startDate, endDate }) => (
    <div className="flex flex-grow items-center bg-white rounded overflow-hidden shadow">
        <span className="material-icons-outlined text-gray-500 p-2">{label}</span>
        <DatePicker
            selected={date}
            onChange={onChange}
            selectsStart={!!startDate}
            selectsEnd={!!endDate}
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            className="p-2 w-full"
            placeholderText={`${label} seç`}
        />
    </div>
);

export default DayReport;
