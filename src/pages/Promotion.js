import React, { useState } from 'react';
import { Card, Tabs, Row, Col, Typography, Tooltip } from 'antd';
import { HeartOutlined, HeartFilled, StarFilled } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Promotion = () => {
    const [activeTab, setActiveTab] = useState('mostAdded');
    const [likedTours, setLikedTours] = useState([]);

    const toggleLike = (id) => {
        setLikedTours((prev) =>
            prev.includes(id) ? prev.filter((tourId) => tourId !== id) : [...prev, id]
        );
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const products = [
        { id: 1, name: "Ege Turu", price: "1500 TL", rating: 4.4 },
        { id: 2, name: "Karadeniz Turu", price: "1750 TL", rating: 3.6 },
    ];

    const tours = [
        { id: 1, name: "Konum 20", price: "523 TL", rating: 4.4, date: "Sat, Jul 29, 2023" },
        { id: 2, name: "Konum 5", price: "640 TL", rating: 4.3, date: "Mon, Jul 24, 2023 - Thu, Jul 27, 2023" },
    ];

    const flashTours = [
        { id: 1, name: "Istanbul City Tour", price: "200 TL", rating: 5.0, date: "Fri, Aug 4, 2023" },
        { id: 2, name: "Cappadocia Hot Air Balloon", price: "850 TL", rating: 4.9, date: "Sun, Aug 6, 2023" },
    ];

    const cities = [
        { id: 1, name: "Istanbul", image: "https://picsum.photos/200/200?random=1" },
        { id: 2, name: "Antalya", image: "https://picsum.photos/200/200?random=2" },
        { id: 3, name: "Cappadocia", image: "https://picsum.photos/200/200?random=3" },
        { id: 4, name: "Izmir", image: "https://picsum.photos/200/200?random=4" },
        { id: 5, name: "Kyrenia", image: "https://picsum.photos/200/200?random=5" },
    ];

    return (
        <div className="container mx-auto px-4 py-8 font-montserrat">
            <div className="flex justify-center space-x-4 overflow-x-auto mb-6">
                {cities.map(city => (
                    <div key={city.id} className="flex-shrink-0 w-24 h-24 relative">
                        <img src={city.image} alt={city.name} className="rounded-full w-full h-full object-cover" />
                        <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 rounded-full">
                            {city.name}
                        </div>
                    </div>
                ))}
            </div>

            <Tabs defaultActiveKey="1" onChange={(key) => setActiveTab(key)}>
                <TabPane tab="Sepete En Çok Eklenenler" key="mostAdded">
                    <div id="mostAddedSection" className="pt-8">
                        <Title level={2}>Popüler Ürünler</Title>
                        <Row gutter={[16, 16]}>
                            {products.map(product => (
                                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        hoverable
                                        cover={<img alt={product.name} src={`https://picsum.photos/200/200?random=${product.id}`} />}
                                    >
                                        <Card.Meta
                                            title={product.name}
                                            description={
                                                <>
                                                    <div className="flex items-center my-2">
                                                        <StarFilled className="text-yellow-500" />
                                                        <span className="ml-1 text-sm">{product.rating}</span>
                                                    </div>
                                                    <Text className="text-lg font-semibold text-red-500">{product.price}</Text>
                                                </>
                                            }
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="En Çok Öne Çıkanlar" key="featured">
                    <div id="featuredSection" className="pt-8">
                        <Title level={2}>Önerilen Turlar</Title>
                        <Row gutter={[16, 16]}>
                            {tours.map(tour => (
                                <Col key={tour.id} xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        hoverable
                                        cover={<img alt={tour.name} src={`https://picsum.photos/200/200?random=${tour.id + 100}`} />}
                                        actions={[
                                            <Tooltip title="Favorilere Ekle">
                                                {likedTours.includes(tour.id) ? (
                                                    <HeartFilled
                                                        style={{ color: 'red' }}
                                                        onClick={() => toggleLike(tour.id)}
                                                    />
                                                ) : (
                                                    <HeartOutlined
                                                        onClick={() => toggleLike(tour.id)}
                                                    />
                                                )}
                                            </Tooltip>,
                                        ]}
                                    >
                                        <Card.Meta
                                            title={tour.name}
                                            description={
                                                <>
                                                    <div className="flex items-center my-2">
                                                        <StarFilled className="text-yellow-500" />
                                                        <span className="ml-1 text-sm">{tour.rating}</span>
                                                    </div>
                                                    <Text className="text-lg font-semibold text-red-500">{tour.price}</Text>
                                                    <p className="text-gray-600 text-sm">{tour.date}</p>
                                                </>
                                            }
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Flaş Teklifler" key="flashProducts">
                    <div id="flashProductsSection" className="pt-8">
                        <Title level={2}>Flaş Teklifler</Title>
                        <Row gutter={[16, 16]}>
                            {flashTours.map(tour => (
                                <Col key={tour.id} xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        hoverable
                                        cover={<img alt={tour.name} src={`https://picsum.photos/200/200?random=${tour.id + 200}`} />}
                                        actions={[
                                            <Tooltip title="Favorilere Ekle">
                                                {likedTours.includes(tour.id) ? (
                                                    <HeartFilled
                                                        style={{ color: 'red' }}
                                                        onClick={() => toggleLike(tour.id)}
                                                    />
                                                ) : (
                                                    <HeartOutlined
                                                        onClick={() => toggleLike(tour.id)}
                                                    />
                                                )}
                                            </Tooltip>,
                                        ]}
                                    >
                                        <Card.Meta
                                            title={tour.name}
                                            description={
                                                <>
                                                    <div className="flex items-center my-2">
                                                        <StarFilled className="text-yellow-500" />
                                                        <span className="ml-1 text-sm">{tour.rating}</span>
                                                    </div>
                                                    <Text className="text-lg font-semibold text-red-500">{tour.price}</Text>
                                                    <p className="text-gray-600 text-sm">{tour.date}</p>
                                                </>
                                            }
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Promotion;
