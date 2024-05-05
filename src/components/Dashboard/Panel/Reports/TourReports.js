import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format, isWithinInterval } from 'date-fns';
import { tr } from 'date-fns/locale';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const TourReports = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [allTours, setAllTours] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSelect = (ranges) => {
        setDates({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
        });
    };

    // Simulate fetching data initially or when needed
    useEffect(() => {
        setLoading(true);
        // Simulate fetching data
        setTimeout(() => {
            // Example data
            const fetchedTours = [
                { id: "#13-240421", name: "Transfer: Dalaman Havalimanı", date: new Date(2024, 3, 21) },
                { id: "#12-240424", name: "Otobüslü Orta Avrupa Turu", date: new Date(2024, 3, 24) }
            ];
            setAllTours(fetchedTours);
            setLoading(false);
        }, 1000);
    }, []);

    // Filter tours based on the selected date range
    const filteredTours = allTours.filter(tour =>
        isWithinInterval(tour.date, { start: dates.startDate, end: dates.endDate })
    );

    const selectionRange = {
        startDate: dates.startDate,
        endDate: dates.endDate,
        key: 'selection',
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">RAPORLAR</h2>
                    <p className="text-sm text-gray-500">Rapor almak istediğiniz hizmeti seçiniz.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        direction="horizontal"
                        locale={tr}
                        rangeColors={['#3B82F6']}
                        className="col-span-1"
                    />
                    <input
                        type="text"
                        placeholder={`Başlangıç: ${format(dates.startDate, 'PP', { locale: tr })}`}
                        className="border rounded py-1 px-2 col-span-1 input input-bordered w-full"
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder={`Bitiş: ${format(dates.endDate, 'PP', { locale: tr })}`}
                        className="border rounded py-1 px-2 col-span-1 input input-bordered w-full"
                        readOnly
                    />
                    <button className="btn btn-primary col-span-1 bg-sky-500 text-white px-4 py-2 rounded shadow flex-shrink-0">ARA</button>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8 mt-8">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">GEZİ RAPORLARI</h2>
                    {loading ? <p>Loading...</p> : (
                        filteredTours.map(tour => (
                            <div key={tour.id} className="bg-gray-100 p-4 rounded-lg mb-4">
                                <p className="text-lg font-medium text-gray-800">{tour.name}</p>
                                <p className="text-sm text-gray-500">{format(tour.date, 'PP', { locale: tr })}</p>
                                <p className="text-xs text-gray-500">{tour.id}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TourReports;
