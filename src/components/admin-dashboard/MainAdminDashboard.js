import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Layout, Menu, Card, List, Button, Typography, Divider, Space, Tooltip } from 'antd';
import {
    UserOutlined,
    BankOutlined,
    SolutionOutlined,
    BarChartOutlined,
    CalendarOutlined,
    NotificationOutlined,
    FileTextOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

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
        <Layout style={{ minHeight: '100vh' }}>

            <Layout className="site-layout" style={{background: 'white'}}>
                <Header className="site-layout-background" style={{ padding: 0, background: 'white' }}>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: 'white' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card title="Bildirimler" extra={<NotificationOutlined />} className="rounded-lg">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={notifications}
                                    renderItem={notification => (
                                        <List.Item onClick={() => handleNavigate(notification.link)}>
                                            <List.Item.Meta
                                                avatar={<span>{notification.logo}</span>}
                                                title={notification.text}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                            <Card title="Tüm Yönetici Aktiviteleri" className="rounded-lg">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={allAdminActivity}
                                    renderItem={activity => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={activity.name}
                                                description={activity.activity}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                            <Card title="Geçmiş Etkinlikler" className="rounded-lg">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={pastEvents}
                                    renderItem={event => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={event.event}
                                                description={`${event.date} (Oluşturan: ${event.createdBy})`}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                            <Card title="Yaklaşan Etkinlikler" className="rounded-lg">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={upcomingEvents}
                                    renderItem={event => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={event.event}
                                                description={`${event.date} (Oluşturan: ${event.createdBy})`}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </div>
                        <Divider />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <Card title="Zaman İçinde Satışlar" className="rounded-lg">
                                <Line data={salesData} options={graphOptions} height={150} />
                            </Card>
                            <Card title="Site Aktiviteleri" className="rounded-lg">
                                <Bar data={activityData} options={graphOptions} height={150} />
                            </Card>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboardMain;
