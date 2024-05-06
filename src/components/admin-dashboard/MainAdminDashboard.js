import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminDashboardMain = () => {
    const navigate = useNavigate();
    const [adminName, setAdminName] = useState('John Doe');

    const [allAdminActivity, setAllAdminActivity] = useState([
        { id: 1, name: "Fatih Kuru", activity: "🔑 10 dakika önce giriş yaptı", createdBy: 'Fatih Kuru', createdOn: 'Bugün' },
        { id: 2, name: "Bob Smith", activity: "🔑 30 dakika önce giriş yaptı", createdBy: 'Bob Smith', createdOn: 'Dün' },
        { id: 3, name: "Charlie Davis", activity: "🚪 1 saat önce çıkış yaptı", createdBy: 'Charlie Davis', createdOn: 'Geçen Hafta' }
    ]);

    const [pastEvents, setPastEvents] = useState([
        { event: "🛠 Teknik Bakım", date: "1 Nisan 2023", createdBy: 'Alice Johnson' },
        { event: "📚 Ürün Eğitimi", date: "15 Nisan 2023", createdBy: 'Bob Smith' }
    ]);

    const [upcomingEvents, setUpcomingEvents] = useState([
        { event: "📅 Yönetim Toplantısı", date: new Date(new Date().getTime() + 86400000).toISOString().split('T')[0], createdBy: 'Charlie Davis' },
        { event: "🔄 Sistem Güncellemesi", date: "20 Mayıs 2023", createdBy: 'Alice Johnson' }
    ]);

    const [notifications, setNotifications] = useState([
        { id: 1, text: 'Yeni freelancer kaydınız onayınızı bekliyor.', link: '/freelance-actions', logo: '🚀' },
        { id: 2, text: 'Yeni ajans kaydınız onayınızı bekliyor.', link: '/agency-actions', logo: '🏢' }
    ]);

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedTomorrow = tomorrow.toISOString().split('T')[0];

        const upcomingNotifications = upcomingEvents.filter(event => event.date === formattedTomorrow).map(event => ({
            id: event.date,
            text: `Yaklaşan Etkinlik: ${event.event} yarın.`,
            link: '/upcoming-events',
            logo: '📅'
        }));

        setNotifications(prev => [...prev, ...upcomingNotifications]);
        setTimeout(() => setAdminName('Fatih Kuru'), 1000);  // Simulate fetching admin name
    }, [upcomingEvents]);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const graphOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    const salesData = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [{
            label: 'Aylık Satışlar',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#4B8BF4',
            backgroundColor: 'rgba(75, 123, 236, 0.5)',
            fill: true,
            tension: 0.4
        }]
    };

    const activityData = {
        labels: ['Bugün', 'Dün', 'Geçen Hafta', 'Geçen Ay'],
        datasets: [{
            label: 'Site Aktiviteleri',
            data: [120, 75, 200, 150],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    return (
        
        <div className="min-h-screen bg-gradient-to-b from-sky-500 to-indigo-900 text-white w-full">
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-center">Hoş Geldiniz, {adminName}</h1>
                <div className="bg-white/10 rounded-xl shadow-xl p-6 backdrop-blur-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold text-center">Bildirimler ve Kontroller</h2>
                            <ul className="space-y-4">
                                {notifications.map(notification => (
                                    <li key={notification.id}
                                        className="p-4 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30 flex items-center justify-between"
                                        onClick={() => handleNavigate(notification.link)}>
                                        <span className="text-lg">{notification.logo}</span>
                                        <span>{notification.text}</span>
                                    </li>
                                ))}
                                <li className="p-4 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30"
                                    onClick={() => handleNavigate('/tour-listings')}>
                                    🗺 Tur Listelemeleri
                                </li>
                                <li className="p-4 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30"
                                    onClick={() => handleNavigate('/bookings')}>
                                    📅 Rezervasyonlar
                                </li>
                                <li className="p-4 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30"
                                    onClick={() => handleNavigate('/system-reports')}>
                                    📊 Sistem Raporları
                                </li>
                                <li className="p-4 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30"
                                    onClick={() => handleNavigate('/support')}>
                                    🆘 Destek
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex flex-wrap justify-center mt-4 space-x-4">
                                <button onClick={() => handleNavigate('/user-actions')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Kullanıcı İşlemleri</button>
                                <button onClick={() => handleNavigate('/agency-actions')}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">Ajans İşlemleri</button>
                                <button onClick={() => handleNavigate('/freelance-actions')}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">Freelancer İşlemleri</button>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold text-center">Zaman İçinde Satışlar</h2>
                                <div className="h-64">
                                    <Line data={salesData} options={graphOptions} />
                                </div>
                                <h2 className="text-xl font-semibold text-center mt-6">Site Aktiviteleri</h2>
                                <div className="h-64">
                                    <Bar data={activityData} options={graphOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-center">Tüm Yönetici Aktiviteleri</h2>
                        <ul className="space-y-4">
                            {allAdminActivity.map(activity => (
                                <li key={activity.id} className="p-4 bg-white/20 rounded-lg">
                                    <p>{activity.name} - {activity.activity}</p>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold text-center mt-4">Geçmiş Etkinlikler</h2>
                        <ul className="space-y-4">
                            {pastEvents.map(event => (
                                <li key={event.event} className="p-4 bg-white/20 rounded-lg">
                                    <p>{event.event} - {event.date} (Oluşturan: {event.createdBy})</p>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold text-center mt-4">Yaklaşan Etkinlikler</h2>
                        
                        <ul className="space-y-4">
                            {upcomingEvents.map(event => (
                                <li key={event.event} className="p-4 bg-white/20 rounded-lg">
                                    <p>{event.event} - {event.date} (Oluşturan: {event.createdBy})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardMain;