
import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as XLSX from 'xlsx';

const options = {

    chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: '75%'
    },

    title: {
        text: 'Tur Kazançları'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Pay',
        data: [
            { name: 'Kapadokya Macerası', y: 20000 },
            { name: 'Ege Kıyıları Gezisi', y: 15000 },
            { name: 'Akdeniz Rüyası', y: 30000 }
        ]
    }]
};
const barOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gelir ve Giderler'
    },
    xAxis: {
        categories: ['Finansal']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tutar (₺)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}₺</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Gelirler',
        data: [297000], // Bu veri dinamik olabilir
        stack: 'income',
        color: 'green'
    }, {
        name: 'Giderler',
        data: [30000], // Bu veri dinamik olabilir
        stack: 'expenses',
        color: 'red'
    }]
};

// Bar grafiği için basit bir komponent.

const BarGraph = ({ profit, loss }) => {
    const total = profit + loss;
    const profitPercentage = (profit / total) * 100;
    const lossPercentage = (loss / total) * 100;

    return (
        <div className="flex h-6 bg-gray-200 rounded-md overflow-hidden">
            <div className="bg-green-500" style={{ width: `${profitPercentage}%` }}></div>
            <div className="bg-red-500" style={{ width: `${lossPercentage}%` }}></div>
        </div>
    );
};
// Detayları göstermek için modal component
// Detayları göstermek için modal component
const DetailModal = ({ isOpen, onClose, details }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
                <h3 className="text-xl font-semibold mb-4">{details.tourName}</h3>
                <ul>
                    <li><strong>Katılımcı Sayısı:</strong> {details.participants}</li>
                    <li><strong>Total Gelir:</strong> {details.totalRevenue.toLocaleString()}₺</li>
                    <li><strong>Puanlama:</strong> {details.rating}</li>
                </ul>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    aria-label="close">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

/* GEÇMİŞ TURLAR KISIMI EXCEL */

const PastToursExport = () => {
    const [tours, setTours] = useState([
        {
            id: 1,
            tourName: 'Kapadokya Macerası',
            participants: 12,
            price: '1500₺',
            participantsDetails: [
                { name: "Ali Veli", identityNumber: "12345678901", peopleCount: 2, payment: "3000₺" },
                { name: "Canan Can", identityNumber: "98765432101", peopleCount: 3, payment: "4500₺" },
                { name: "Elif Elif", identityNumber: "56473829100", peopleCount: 1, payment: "1500₺" }
            ]
        },
        {
            id: 2,
            tourName: 'Ege Kıyıları Gezisi',
            participants: 8,
            price: '2500₺',
            participantsDetails: [
                { name: "Mehmet Yılmaz", identityNumber: "11223344556", peopleCount: 2, payment: "5000₺" },
                { name: "Ayşe Fatma", identityNumber: "22334455667", peopleCount: 1, payment: "2500₺" }
            ]
        },
        {
            id: 3,
            tourName: 'Mardin Gezisi',
            participants: 20,
            price: '2500₺',
            participantsDetails: [
                { name: "John Doe", identityNumber: "3322445566", peopleCount: 4, payment: "10000₺" },
                { name: "Jane Doe", identityNumber: "4455667788", peopleCount: 2, payment: "5000₺" }
            ]
        },
        {
            id: 4,
            tourName: 'Antalya Serüveni',
            participants: 15,
            price: '1800₺',
            participantsDetails: [
                { name: "Okan Yıldız", identityNumber: "5566778899", peopleCount: 3, payment: "5400₺" },
                { name: "Elvan Demir", identityNumber: "6677889900", peopleCount: 4, payment: "7200₺" }
            ]
        },
        {
            id: 5,
            tourName: 'Trabzon Yaylaları',
            participants: 10,
            price: '1600₺',
            participantsDetails: [
                { name: "Ece Uslu", identityNumber: "7788990011", peopleCount: 2, payment: "3200₺" },
                { name: "Lale Uslu", identityNumber: "8899001122", peopleCount: 3, payment: "4800₺" }
            ]
        }
    ]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const handleDownload = (tourDetails) => {
        if (tourDetails.participantsDetails && tourDetails.participantsDetails.length > 0) {
            const ws = XLSX.utils.json_to_sheet(tourDetails.participantsDetails.map(detail => ({
                'Ad-Soyad': detail.name,
                'TC Kimlik Numarası': detail.identityNumber,
                'Kişi Sayısı': detail.peopleCount,
                'Ödeme': detail.payment
            })));
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Katılımcılar');
            XLSX.writeFile(wb, `${tourDetails.tourName}_katılımcılar.xlsx`);
        } else {
            alert("Bu tur için katılımcı detayları bulunamadı.");
        }
    };


    const paginatedTours = tours.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow">
            {paginatedTours.map((tour) => (
                <div key={tour.id} className="bg-white p-2 mb-2 rounded shadow">
                    <h4>{tour.tourName}</h4>
                    <p>Katılımcı Sayısı: {tour.participants}</p>
                    <p>Fiyat: {tour.price}</p>
                    <button onClick={() => handleDownload(tour)} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Excel'e Aktar
                    </button>
                </div>
            ))}
            <div className="flex justify-between mt-4">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Önceki
                </button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage + 1) * itemsPerPage >= tours.length} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Sonraki
                </button>
            </div>
        </div>
    );
};

/* GEÇMİŞ TURLAR KISIMI EXCEL */

const DashboardMainPage = () => {
    // Satışlar için dummy veriler.
    const financials = {
        income: 297000,
        expenses: 30000
    };
    const sales = {
        profit: 297000,
        loss: 30000,
        total: 327000,
    };
    const [showDetails, setShowDetails] = useState(false);
    const [selectedTourDetails, setSelectedTourDetails] = useState({});

    const handleShowDetails = (sale) => {
        // Önce fiyat bilgisini düzeltmek gerekirse,
        // Fiyat bilgisini doğru formatta ayarla: Örneğin fiyatı "1500₺" şeklinde verildiğinde sayıya çevir.
        const price = parseInt(sale.price.replace('₺', ''));

        const tourDetails = {
            ...sale,
            price: price,
            totalRevenue: price * sale.participants, // Toplam geliri hesapla
            rating: "8.5 / 10" // Varsayılan veya dinamik puanlama
        };
        setSelectedTourDetails(tourDetails);
        setShowDetails(true);
    };



    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    // Son geri bildirimler için dummy veriler.
    const feedbacks = [
        { text: 'Harika bir deneyimdi, herkese tavsiye ederim!', date: '1 gün önce' },
        { text: 'Çok yardımcı oldunuz, teşekkürler!', date: '2 gün önce' },
        // Diğer geribildirimler...
    ];

    // Son satışlar için dummy veriler.
    const recentSales = [
        { tourName: 'Kapadokya Macerası', price: '1500₺', participants: 12 },
        { tourName: 'Ege Kıyıları Gezisi', price: '2500₺', participants: 8 },
        { tourName: 'Mardin', price: '2500₺', participants: 20 },
        // Diğer satışlar...
    ];
    const collaborators = [
        { name: "Ahmet Kaya", phone: "0505 123 4567", role: "Servisçi" },
        { name: "Ayşe Güler", phone: "0505 765 4321", role: "Rehber" }
    ];

    return (
        <div className="bg-white min-h-screen p-4">
            <div className="container mx-auto">
                <h2 className="text-xl font-semibold mb-4">Günlük Durum Paneli</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Satışlar */}
                    <div className="md:col-span-1 lg:col-span-2 p-4 bg-gray-100 rounded-md shadow">
                        <h3 className="font-semibold text-lg">Satışlar</h3>
                        {/* Gelirler ve Giderler */}
                        <div className="lg:col-span-2 md:col-span-2 bg-gray-100 rounded-md shadow p-4">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={barOptions}
                            />
                        </div>
                    </div>

                    {/* Son Satışlar */}
                    <div className="md:col-span-1 lg:col-span-2 p-4 bg-gray-100 rounded-md shadow">
                        <h3 className="font-semibold text-lg">Son Satışlar</h3>
                        <div className="overflow-auto max-h-48">
                            <table className="min-w-full">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="p-2 text-left text-sm font-medium text-gray-600">Tur Adı</th>
                                        <th className="p-2 text-left text-sm font-medium text-gray-600">Fiyat</th>
                                        <th className="p-2 text-left text-sm font-medium text-gray-600">Katılımcı</th>
                                        <th className="p-2 text-left text-sm font-medium text-gray-600">Aksiyon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentSales.map((sale, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="p-2 text-sm text-gray-700">{sale.tourName}</td>
                                            <td className="p-2 text-sm text-gray-700">{sale.price}</td>
                                            <td className="p-2 text-sm text-gray-700">{sale.participants}</td>
                                            <td className="p-2 text-sm text-gray-700">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleShowDetails(sale)}>Detaylar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {showDetails && <DetailModal isOpen={showDetails} onClose={handleCloseDetails} details={selectedTourDetails} />}
                    </div>
                    {/* Aktif Şehirler ve Türkiye Haritası */}
                    <div className="md:col-span-1 lg:col-span-2 p-4 bg-gray-100 rounded-md shadow ">
                        <h3 className="text-lg font-semibold mb-2">Geçmiş Turlar Liste</h3>
                        <PastToursExport />
                    </div>

                    {/* Kar/Zarar Grafik */}
                    <div className="lg:col-span-2 md:col-span-2 bg-gray-100 rounded-md shadow p-4">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                    {/* Son Geribildirimler */}
                    {/* İşbirlikçiler */}
                    <div className="lg:col-span-2 md:col-span-2 bg-gray-100 rounded-md shadow p-4">
                        <h3 className="font-semibold text-lg">İşbirlikçiler</h3>
                        <div className="overflow-auto max-h-48">
                            <table className="min-w-full">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Ad-Soyad</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Telefon Numarası</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">İş Bölümü</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {collaborators.map((collaborator, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-4 py-2 text-sm text-gray-700">{collaborator.name}</td>
                                            <td className="px-4 py-2 text-sm text-gray-700">{collaborator.phone}</td>
                                            <td className="px-4 py-2 text-sm text-gray-700">{collaborator.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Adjusting Son Geribildirimler to match the width of Geçmiş Turlar Liste */}
                    <div className="lg:col-span-2 md:col-span-2 bg-gray-100 rounded-md shadow p-4">
                        <h3 className="font-semibold text-lg">Son Geribildirimler</h3>
                        <div className="overflow-auto max-h-48">
                            {feedbacks.map((feedback, index) => (
                                <div key={index} className="border-b last:border-b-0 p-2">
                                    <p className="text-sm text-gray-700">{feedback.text}</p>
                                    <p className="text-xs text-gray-500">{feedback.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <footer className="text-center text-gray-600 mt-8">
                {new Date().toLocaleTimeString()} - Günlük durum paneli
            </footer>
        </div>

    );
};

export default DashboardMainPage;
