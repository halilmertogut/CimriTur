import React, { useState } from 'react';
import { Card, Input, Button, List, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

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
            <Card key={booking.id} className="mb-4">
                <List.Item>
                    <List.Item.Meta
                        title={<Text strong>{booking.name} - {booking.tour}</Text>}
                        description={
                            <>
                                <Text>{booking.people} Kişi - Tarih: {booking.date}</Text><br />
                                <Text type="secondary">Acenta: {booking.agent}</Text><br />
                                {booking.status === 'Onay Bekliyor' && (
                                    <Text type="warning">Onay Bekleniyor - {((new Date() - new Date(booking.bookingDate)) / (1000 * 3600 * 24)).toFixed(0)} gün geçti</Text>
                                )}<br />
                                {booking.status === 'Onaylandı' && (
                                    <Text type="success">Onaylandı - {booking.approvalDate}</Text>
                                )}<br />
                                <Text strong>Toplam Ücret: ${booking.totalCost}</Text>
                            </>
                        }
                    />
                </List.Item>
            </Card>
        ));
    };

    return (
        <div className="container mx-auto p-6">
            <Title level={2} className="text-center mb-6">Rezervasyonlar Genel Bakış</Title>
            <Row className="mb-6" gutter={16}>
                <Col xs={20}>
                    <Input 
                        placeholder="İsim, tur veya acenta arayın"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Col>
                <Col xs={4}>
                    <Button type="primary" onClick={handleSearch}>Ara</Button>
                </Col>
            </Row>
            <List>
                {filteredBookings.length > 0 ? renderBookings(filteredBookings) : renderBookings(bookings)}
            </List>
        </div>
    );
};

export default Bookings;
