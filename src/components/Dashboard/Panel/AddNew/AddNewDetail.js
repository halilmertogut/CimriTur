import React, { useState, useEffect } from 'react';
import { RiStarFill, RiCalendar2Fill, RiPriceTag3Fill, RiSave3Fill, RiCheckFill } from 'react-icons/ri';

const AddNewDetail = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedHotel, setSelectedHotel] = useState(null);

    const [hotels, setHotels] = useState([
        { id: 1, name: '3 Yıldızlı Otel', fillRates: {}, quota: 100, discount: 0 },
        { id: 2, name: '4 Yıldızlı Otel', fillRates: {}, quota: 100, discount: 0 },
        { id: 3, name: '5 Yıldızlı Otel', fillRates: {}, quota: 100, discount: 0 },

    ]);
    const [isSaved, setIsSaved] = useState(false);
    const getDaysInMonth = (year, month) => {
        let date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };


    const getMonthDays = (year, month) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const renderCalendarDays = (year, month) => {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = daysInMonth[0].getDay();

        // Generate leading empty days to align the first day of the month correctly
        const leadingDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`leading-${i}`} className="border p-2" />
        ));

        // Generate the actual days of the month
        const monthDays = daysInMonth.map((dayDate) => {
            const key = dayDate.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
            return (
                <div
                    key={key}
                    className={`border p-2 cursor-pointer ${hotels.find((hotel) => hotel.id === selectedHotel)?.fillRates[key]
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                        }`}
                    onClick={() => handleDayClick(key)}
                >
                    {dayDate.getDate()}
                </div>
            );
        });

        return [...leadingDays, ...monthDays];
    };
    useEffect(() => {
        // This will initialize the calendar for the current month
        setHotels((hotels) =>
            hotels.map((hotel) => {
                const daysInMonth = new Date(2024, selectedMonth + 1, 0).getDate();
                let newFillRates = {};
                for (let day = 1; day <= daysInMonth; day++) {
                    newFillRates[`${day}-${selectedMonth + 1}`] = false;
                }
                return { ...hotel, fillRates: newFillRates };
            }),
        );
    }, [selectedMonth]);


    const handleHotelSelection = (hotelId) => {
        setSelectedHotel(hotelId);
    };

    const handleDayClick = (day) => {
        setHotels((hotels) =>
            hotels.map((hotel) => {
                if (hotel.id === selectedHotel) {
                    return {
                        ...hotel,
                        fillRates: {
                            ...hotel.fillRates,
                            [day]: !hotel.fillRates[day],
                        },
                    };
                }
                return hotel;
            }),
        );
    };

    const handleSave = () => {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };
    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10));
    };
    function generateYearFillRates() {
        const yearFillRates = {};
        for (let month = 0; month < 12; month++) {
            const days = getMonthDays(2024, month);
            days.forEach(day => {
                const key = `${day}-${month + 1}-2024`;
                yearFillRates[key] = false;
            });
        }
        return yearFillRates;
    }

    useEffect(() => {
        // Initialize the hotels state with fill rates for the entire year if empty
        if (hotels.every(hotel => Object.keys(hotel.fillRates).length === 0)) {
            const newHotels = hotels.map(hotel => ({
                ...hotel,
                fillRates: generateYearFillRates()
            }));
            setHotels(newHotels);
        }
    }, [selectedMonth]);
    const getCalendarDays = (year, month) => {
        const startDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day, index) => ({
            day,
            index: (startDay + index) % 7,
        }));
    };


    const hotelOptions = {
        '3': ['Hotel Park', 'Hotel Lakeview'],
        '4': ['Hotel Skyline', 'Hotel Marina'],
        '5': ['Hotel Grand', 'Hotel Royal'],
    };
    return (
        <div className="container mx-auto p-6 font-montserrat">
            {/* Star Rating and Hotel Name Selectors */}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-1/2 pr-2">
                    <label htmlFor="starRating" className="block mb-1">Otelin Yıldız Derecesi (Gerekli)</label>
                    <select
                        id="starRating"
                        className="w-full p-2 border"
                        value={selectedHotel}
                        onChange={(e) => handleHotelSelection(parseInt(e.target.value, 10))}
                    >
                        <option value="">Yıldız Seç</option>
                        {Object.keys(hotelOptions).map(starRating => (
                            <option key={starRating} value={starRating}>{starRating} Yıldızlı Otel</option>
                        ))}
                    </select>
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="hotelName" className="block mb-1">Otel Adı (Gerekli)</label>
                    <select
                        id="hotelName"
                        className="w-full p-2 border"
                        disabled={!selectedHotel}
                    >
                        <option value="">Otel Seç</option>
                        {selectedHotel && hotelOptions[selectedHotel].map(hotelName => (
                            <option key={hotelName} value={hotelName}>{hotelName}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Month Selector */}
            <div className="mb-4">
                <label htmlFor="monthSelection" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ay Seçimi
                </label>
                <div className="relative">
                    <select
                        id="monthSelection"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                    >
                        {Array.from({ length: 12 }).map((_, i) => (
                            <option key={i} value={i}>
                                {new Date(2024, i).toLocaleString('default', { month: 'long' })}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <RiStarFill />
                    </div>
                </div>
            </div>


            {/* Calendar View */}
            <div className="flex flex-col my-4">
                <div className="grid grid-cols-7 text-center font-bold">
                    {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {renderCalendarDays(2024, selectedMonth)}
                </div>
            </div>

            <div className="flex justify-between">
                <div>
                    <label>Tur Kontenjanı</label>
                    <input
                        type="number"
                        className="border p-2"
                        value={
                            hotels.find((hotel) => hotel.id === selectedHotel)?.quota || 0
                        }
                        onChange={(e) =>
                            setHotels((hotels) =>
                                hotels.map((hotel) =>
                                    hotel.id === selectedHotel
                                        ? { ...hotel, quota: parseInt(e.target.value, 10) }
                                        : hotel,
                                ),
                            )
                        }
                    />
                </div>
                <div>
                    <label>İndirim (%)</label>
                    <input
                        type="number"
                        className="border p-2"
                        value={
                            hotels.find((hotel) => hotel.id === selectedHotel)?.discount || 0
                        }
                        onChange={(e) =>
                            setHotels((hotels) =>
                                hotels.map((hotel) =>
                                    hotel.id === selectedHotel
                                        ? { ...hotel, discount: parseInt(e.target.value, 10) }
                                        : hotel,
                                ),
                            )
                        }
                    />
                </div>
            </div>

            <button
                onClick={handleSave}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
                <RiSave3Fill className="inline-block" />
                Kaydet
            </button>

            {isSaved && (
                <div className="mt-4 bg-green-200 text-green-600 p-2 rounded">
                    <RiCheckFill className="inline-block" />
                    Kaydedildi
                </div>
            )}
        </div>
    );
};

export default AddNewDetail;
