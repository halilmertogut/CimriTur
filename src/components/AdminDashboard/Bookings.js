import React, { useState } from 'react';

const Bookings = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBookings, setFilteredBookings] = useState([]);

    const bookings = [
        { id: 1, name: "John Doe", tour: "Roma Turu", people: 3, date: "2024-05-12", totalCost: 300, status: "Onaylandı", agent: "Laura B.", approvalDate: "2024-05-12" },
        { id: 2, name: "Alice Johnson", tour: "Singapur Gece Safari", people: 2, date: "2024-06-05", totalCost: 450, status: "Onay Bekliyor", agent: "Tom S.", bookingDate: "2024-05-30" },
        { id: 3, name: "Michael Smith", tour: "Tokyo Kültür Festivali", people: 5, date: "2024-05-20", totalCost: 625, status: "Onaylandı", agent: "Jessie M.", approvalDate: "2024-05-20" }
    ];

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setFilteredBookings([]);
            return;
        }
        const filtered = bookings.filter(booking => 
            booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.tour.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.agent.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBookings(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const renderBookings = (bookingsList) => {
        return bookingsList.map(booking => (
            <li key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className="p-4">
                    <h3 className="text-lg font-bold">{booking.name} - {booking.tour}</h3>
                    <p className="text-sm text-gray-500">{booking.people} Kişi - Tarih: {booking.date}</p>
                    <p className="text-sm text-gray-500">Acenta: {booking.agent}</p>
                    <div className="mt-1">
                        {booking.status === 'Onay Bekliyor' && (
                            <p className="text-sm text-yellow-600">Onay Bekleniyor - {((new Date() - new Date(booking.bookingDate)) / (1000 * 3600 * 24)).toFixed(0)} gün geçti</p>
                        )}
                        {booking.status === 'Onaylandı' && (
                            <p className="text-sm text-green-600">Onaylandı - {booking.approvalDate}</p>
                        )}
                    </div>
                    <p className="text-gray-700 font-semibold mt-2">Toplam Ücret: ${booking.totalCost}</p>
                </div>
            </li>
        ));
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Rezervasyonlar Genel Bakış</h1>
            <div className="mb-6 flex items-center">
                <input 
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-l-md"
                    placeholder="İsim, tur veya acenta arayın"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                    onClick={handleSearch}
                >
                    Ara
                </button>
            </div>
            <ul>
                {filteredBookings.length > 0 ? renderBookings(filteredBookings) : renderBookings(bookings)}
            </ul>
        </div>
    );
};

export default Bookings;
