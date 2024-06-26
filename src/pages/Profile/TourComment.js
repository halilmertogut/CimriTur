import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, List, Avatar, Button, Tabs, Rate, Typography } from 'antd';

const { TabPane } = Tabs;
const { Title } = Typography;

const truncate = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
};

const userTours = [
    {
        id: 1,
        title: "Kapadokya Balon Turu",
        imageUrl: "https://via.placeholder.com/150",
        price: "1500 TL",
        company: "Dream Tours",
        date: "20 Mart 2024 - 09:00"
    },
    {
        id: 2,
        title: "Antalya Yat Turu",
        imageUrl: "https://via.placeholder.com/150",
        price: "3000 TL",
        company: "Sea Adventures",
        date: "18 Mart 2024 - 14:00"
    },
    // ... more tours
];

const userReviews = [
    {
        id: 1,
        title: "Harika bir deneyimdi!",
        content: "Balon turu sırasında muhteşem manzaralar eşliğinde çok eğlendik.",
        rating: 5,
        date: "22 Mart 2024"
    },
    {
        id: 2,
        title: "Unutulmaz bir gezi",
        content: "Yat turu beklediğimden daha heyecan vericiydi, herkese tavsiye ederim!",
        rating: 4,
        date: "19 Mart 2024"
    },
    // ... more reviews
];

const sellerReviews = [
    {
        id: 1,
        title: "Güzeldi!!",
        content: "Her konuda çok yardımcı oldular, ekibe çok teşekkürler.",
        imageUrl: "https://via.placeholder.com/150",
        rating: 5,
        date: "22 Mayıs 2024"
    }
];

const TourComment = () => {
    const [activeTab, setActiveTab] = useState('tourReviews');

    return (
        <div className="w-full font-montserrat p-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <Tabs defaultActiveKey="tourReviews" onChange={setActiveTab}>
                    <TabPane tab="Tur Değerlendirmelerim" key="tourReviews">
                        <List
                            itemLayout="horizontal"
                            dataSource={userReviews}
                            renderItem={review => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://via.placeholder.com/150?sig=${review.id}`} />}
                                        title={<Title level={4}>{review.title}</Title>}
                                        description={
                                            <>
                                                <p>{truncate(review.content, 50)}</p>
                                                <p>Değerlendirme Tarihi: {review.date}</p>
                                                <Rate disabled defaultValue={review.rating} />
                                            </>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>
                    <TabPane tab="Satıcı Değerlendirmelerim" key="sellerReviews">
                        <List
                            itemLayout="horizontal"
                            dataSource={sellerReviews}
                            renderItem={review => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={review.imageUrl} />}
                                        title={<Title level={4}>{review.title}</Title>}
                                        description={
                                            <>
                                                <p>{truncate(review.content, 50)}</p>
                                                <p>Değerlendirme Tarihi: {review.date}</p>
                                                <Rate disabled defaultValue={review.rating} />
                                            </>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>
                </Tabs>
                <Card title="Turlarım" className="mt-4">
                    <List
                        itemLayout="vertical"
                        dataSource={userTours}
                        renderItem={tour => (
                            <List.Item
                                key={tour.id}
                                extra={<img width={150} alt="tour" src={tour.imageUrl} />}
                            >
                                <List.Item.Meta
                                    title={<Title level={4}>{tour.title}</Title>}
                                    description={
                                        <>
                                            <p>Tur Fiyatı: <strong>{tour.price}</strong></p>
                                            <p>Tur Şirketi: <strong>{tour.company}</strong></p>
                                            <p>{tour.date}</p>
                                        </>
                                    }
                                />
                                <Button type="primary">
                                    <Link to={`/evaluate/${tour.id}`}>Turu Değerlendir</Link>
                                </Button>
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        </div>
    );
};

export default TourComment;
