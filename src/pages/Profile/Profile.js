import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Card, Avatar, Button, Tabs, List, Typography, Row, Col } from 'antd';
import { UserOutlined, CommentOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import LoginSecurity from "./LoginSecurity";
import Payment from "./Payment";
import Notifications from "./Notifications";
import CancelTour from "./CancelTour";
import TourComment from "./TourComment"; // Import the TourComment component

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Profile = () => {
    const user = useSelector(state => state.auth.user);
    const [activeTab, setActiveTab] = useState('past');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const pastTours = [
        { id: 1, name: "Paris Turu", date: "2021-09-10", reservationNo: "RES101" },
        { id: 2, name: "Roma Turu", date: "2021-10-15", reservationNo: "RES102" }
    ];

    const activeTours = [
        { id: 1, name: "İstanbul Turu", reservationNo: "RES123", cancellable: true },
        { id: 2, name: "Ankara Turu", reservationNo: "RES456", cancellable: false }
    ];

    const toursInCancellation = [
        { id: 3, name: "İstanbul Turu", reservationNo: "RES345", status: "İptal aşamasında" },
        { id: 4, name: "Ankara Turu", reservationNo: "RES456", status: "İptal onaylanmıştır" }
    ];

    const handleOpenModal = (tour) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };

    return (
        <div className="font-montserrat flex flex-col items-center justify-center h-auto mt-20 mb-20">
            <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-6">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                        <Card
                            cover={<img alt="Profile Cover" src="https://via.placeholder.com/500x200" />}
                            actions={[
                                <Link to="/personalinfo">Profil</Link>,
                                <Link to="/login-security">Güvenlik</Link>,
                                <Link to="/payment">Ödeme</Link>,
                                <Link to="/notifications">Bildirimler</Link>,
                                <Link to="/tourcomment">Yorumlarım</Link> // Added link for TourComment
                            ]}
                        >
                            <Card.Meta
                                avatar={<Avatar size={64} src="https://via.placeholder.com/150" />}
                                title={<Title level={4}>{user.firstName} {user.lastName}</Title>}
                                description={<Text>{user.email}</Text>}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} md={16}>
                        <Tabs activeKey={activeTab} onChange={setActiveTab} type="card">
                            <TabPane tab="Geçmiş Turlarım" key="past">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={pastTours}
                                    renderItem={tour => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src="https://via.placeholder.com/50" />}
                                                title={<Text>{tour.name} - {tour.date}</Text>}
                                                description={<Text>Rezervasyon No: {tour.reservationNo}</Text>}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                            <TabPane tab="Aktif Turlarım" key="active">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={activeTours}
                                    renderItem={tour => (
                                        <List.Item
                                            actions={[
                                                tour.cancellable ? <Button type="danger" onClick={() => handleOpenModal(tour)}>İptal Et</Button> : <Text className="text-red-500">Tur başlangıcına 48 saat kala iptale izin verilmez</Text>
                                            ]}
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src="https://via.placeholder.com/50" />}
                                                title={<Text>{tour.name}</Text>}
                                                description={<Text>Rezervasyon No: {tour.reservationNo}</Text>}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                            <TabPane tab="İptal Sürecinde Olan Turlarım" key="cancellation">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={toursInCancellation}
                                    renderItem={tour => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src="https://via.placeholder.com/50" />}
                                                title={<Text>{tour.name}</Text>}
                                                description={<Text>Rezervasyon No: {tour.reservationNo}</Text>}
                                            />
                                            <div>{tour.status}</div>
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        </Tabs>
                        <CancelTour isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tour={selectedTour} user={user} />
                    </Col>
                </Row>
            </div>

            <Routes>
                <Route path="/personalinfo" element={<PersonalInfo />} />
                <Route path="/login-security" element={<LoginSecurity />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/tourcomment" element={<TourComment />} /> {/* Added route for TourComment */}
            </Routes>
        </div>
    );
};

export default Profile;
