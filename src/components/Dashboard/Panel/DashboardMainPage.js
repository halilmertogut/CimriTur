import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import TurkeyMap from 'turkey-map-react';


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


// Türkiye haritasını temsil eden basit bir komponent.
// Gerçek bir harita için özel bir harita kütüphanesi kullanılmalıdır.
const TurkeyMapPlaceholder = () => {
    // Bu bir placeholder. Gerçek bir harita kütüphanesi ile değiştirilmeli.
    return (
        <div className="relative h-64 bg-gray-200 rounded-md">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                {/* Basit bir Türkiye SVG haritası örneği. */}
                {/* Ankara'yı temsil eden daire. Gerçek bir harita için koordinatları ayarlamanız gerekecek. */}
                <circle cx="50" cy="50" r="5" fill="red" />
            </svg>
            <span className="absolute text-sm text-gray-700" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Ankara
            </span>
        </div>
    );
};

const DashboardMainPage = () => {
    // Satışlar için dummy veriler.
    const sales = {
        profit: 297000,
        loss: 30000,
        total: 327000,
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
        // Diğer satışlar...
    ];

    return (
        <div className="bg-white min-h-screen p-4 font-montserrat">
            <div className="container mx-auto">
                <h2 className="text-xl font-semibold mb-4">Günlük Durum Paneli</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Satışlar */}
                    <div className="md:col-span-1 lg:col-span-2 p-4 bg-gray-100 rounded-md shadow">
                        <h3 className="font-semibold text-lg">Satışlar</h3>
                        <p className="text-3xl mb-2">₺{sales.total.toLocaleString()}</p>
                        <BarGraph profit={sales.profit} loss={sales.loss} />
                        <div className="flex justify-between text-sm mt-2">
                            <span className="text-green-500">Kar: ₺{sales.profit.toLocaleString()}</span>
                            <span className="text-red-500">Zarar: ₺{sales.loss.toLocaleString()}</span>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentSales.map((sale, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="p-2 text-sm text-gray-700">{sale.tourName}</td>
                                            <td className="p-2 text-sm text-gray-700">{sale.price}</td>
                                            <td className="p-2 text-sm text-gray-700">{sale.participants}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Aktif Şehirler ve Türkiye Haritası */}
                    <div className="md:col-span-1 lg:col-span-2 p-4 bg-gray-100 rounded-md shadow ">
                        <h3 className="text-lg font-semibold mb-2">Aktif Şehirler</h3>
                        <TurkeyMap
                            cities={{
                                ankara: {
                                    fillColor: "#FF0000",
                                    strokeColor: "#FF0000"
                                }
                            }}
                        />
                    </div>

                    {/* Kar/Zarar Grafik */}
                    <div className="lg:col-span-2 md:col-span-2 bg-gray-100 rounded-md shadow p-4">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                    {/* Son Geribildirimler */}
                    <div className="lg:col-span-4 p-4 bg-gray-100 rounded-md shadow">
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
