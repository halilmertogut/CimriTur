import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const SystemReports = () => {
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
            <Title level={2} className="text-center mb-6">Sistem Raporları</Title>
            <Row gutter={16}>
                <Col xs={24} md={8}>
                    <Card title="Son Çeyrek Satış Raporu" className="rounded-lg">
                        <Line data={salesData} />
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="Kullanıcı Etkileşim İstatistikleri" className="rounded-lg">
                        <Bar data={userEngagementData} />
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="Hata Kayıtları ve Sistem Sağlığı" className="rounded-lg">
                        <Doughnut data={systemHealthData} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SystemReports;
