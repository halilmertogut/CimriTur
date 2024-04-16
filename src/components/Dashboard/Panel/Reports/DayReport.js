import React, { useState, useEffect } from 'react';


const initialToursData = [
    {
        date: '16.04.2024',
        name: 'Otobüslü Orta Avrupa Turu',
        reservation: 2,
        participant: 7,
        payment: 3,
        quota: '8 / 10',
        active: true,
        actions: ['Seçiniz', 'Action 1', 'Action 2']
    },
    // ... diğer tur verileri
];


const DayReport = () => {

    const [toursData, setToursData] = useState(initialToursData);

    
    // API'den verileri almak ve toursData'yı güncellemek için kullanılır.
    // useEffect(() => {
    //   fetchToursData().then(data => {
    //     setToursData(data);
    //   });
    // }, []);

    return (

        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 bg-white p-4 rounded-md shadow w-full">
                <div className="flex flex-grow border rounded overflow-hidden">
                    <button className="bg-gray-200 p-2">
                        {/* Icon placeholder */}
                    </button>
                    <input type="text" className="p-2 w-full" placeholder="Rapor Aralığı" />
                </div>

                <div className="flex flex-grow border rounded overflow-hidden">
                    <button className="bg-gray-200 p-2">
                        {/* Icon placeholder */}
                    </button>
                    <select className="p-2 w-full appearance-none">
                        <option>Tur Filtresi</option>
                        {/* Diğer seçenekler */}
                    </select>
                </div>

                <div className="flex flex-grow border rounded overflow-hidden">
                    <button className="bg-gray-200 p-2">
                        {/* Icon placeholder */}
                    </button>
                    <select className="p-2 w-full appearance-none">
                        <option>Gösterim Filtresi</option>
                        {/* Diğer seçenekler */}
                    </select>
                </div>

                <button className="bg-sky-500 text-white px-4 py-2 rounded shadow flex-shrink-0">
                    FİLTRELE
                </button>
            </div>

            {/* Tours Table */}
            <div className="mt-4">
                <table className="min-w-full w-full bg-white shadow rounded-md">
                    <thead className="bg-white text-black">
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
                        {toursData.map((tour, index) => (
                            <tr key={index} className="text-gray-700 border-b text-center">
                                <td className="py-3 px-4">{tour.date}</td>
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
                                        {[`Seçiniz`, ...tour.actions].map(action => (
                                            <option key={action}>{action}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default DayReport;
