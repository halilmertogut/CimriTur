import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const SystemReports = () => {
    // Grafikler için örnek veriler
    const salesData = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan'],
        datasets: [{
            label: 'Satışlar',
            data: [150, 200, 175, 225],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };

    const userEngagementData = {
        labels: ['Sayfa Ziyaretleri', 'Kayıtlar', 'İndirmeler'],
        datasets: [{
            label: 'Etkileşim',
            data: [250, 130, 70],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const systemHealthData = {
        labels: ['Bellek Kullanımı', 'CPU Yükü', 'Ağ Trafiği'],
        datasets: [{
            data: [300, 450, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Sistem Raporları</h1>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-bold mb-2">Son Çeyrek Satış Raporu</h2>
                    <Line data={salesData} />
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-bold mb-2">Kullanıcı Etkileşim İstatistikleri</h2>
                    <Bar data={userEngagementData} />
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-bold mb-2">Hata Kayıtları ve Sistem Sağlığı</h2>
                    <Doughnut data={systemHealthData} />
                </div>
            </div>
        </div>
    );
};

export default SystemReports;
