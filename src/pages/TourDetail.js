import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import { Card, Col, Row, Typography, InputNumber, Button, List, Carousel, Spin, Alert, Space, Divider, Image } from "antd";
import { UserOutlined, DollarOutlined, EnvironmentOutlined, CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "react-image-gallery/styles/css/image-gallery.css";

const { Title, Text } = Typography;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  strokeColor: "#FF6347",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF6347",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [],
  zIndex: 1,
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [coordinates, setCoordinates] = useState({
    start: null,
    destination: null,
  });
  const [otherTours, setOtherTours] = useState([]);
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchCoordinates = async (placeName) => {
    const apiKey = "7d16ea5ca75d4d5788534d4e09ab2fc0";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      placeName
    )}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results.length > 0 ? data.results[0].geometry : null;
    } catch (error) {
      throw new Error("Koordinatlar çekilirken hata oluştu");
    }
  };

  useEffect(() => {
    let isActive = true;
    const fetchTourDetails = async () => {
      try {
        const tourResponse = await fetch(`http://localhost:3000/api/tours/${id}`);
        if (!tourResponse.ok) throw new Error("Tur detayları yüklenirken hata oluştu.");
        const tourData = await tourResponse.json();

        const startCoords = await fetchCoordinates(tourData.startLocation);
        const destinationCoords = await fetchCoordinates(tourData.destination);

        if (isActive) {
          setCoordinates({ start: startCoords, destination: destinationCoords });
          setTour(tourData);
        }

        const allToursResponse = await fetch("http://localhost:3000/api/tours/all-tours");
        if (!allToursResponse.ok) throw new Error("Diğer turlar yüklenirken hata oluştu.");
        const allToursData = await allToursResponse.json();
        const shuffledTours = allToursData
          .filter(t => t.id !== id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        if (isActive) {
          setOtherTours(shuffledTours);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchTourDetails();
    return () => {
      isActive = false;
    };
  }, [id]);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '20% auto' }} />;
  if (error) return <Alert message="Hata" description={error} type="error" showIcon />;
  if (!tour || !coordinates.start || !coordinates.destination)
    return <Alert message="Hata" description="Tur bilgisi eksik veya mevcut değil." type="error" showIcon />;

  options.paths = [
    { lat: coordinates.start.lat, lng: coordinates.start.lng },
    { lat: coordinates.destination.lat, lng: coordinates.destination.lng },
  ];

  return (
    <div className="font-montserrat bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <Row gutter={32}>
          <Col xs={24} md={16}>
            <Title level={1} style={{ marginBottom: '20px' }}>
              {tour.name}
            </Title>
            <Card
              hoverable
              cover={
                <Carousel autoplay arrows infinite>
                  {tour.tourImagesUrl.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={tour.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    </div>
                  ))}
                </Carousel>
              }
              style={{ marginBottom: '20px', borderRadius: '10px', overflow: 'hidden' }}
              bodyStyle={{ padding: '20px' }}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: coordinates.start.lat,
                  lng: coordinates.start.lng,
                }}
                zoom={5}
              >
                <Marker
                  position={{
                    lat: coordinates.start.lat,
                    lng: coordinates.start.lng,
                  }}
                />
                <Marker
                  position={{
                    lat: coordinates.destination.lat,
                    lng: coordinates.destination.lng,
                  }}
                />
                <Polyline
                  path={[
                    { lat: coordinates.start.lat, lng: coordinates.start.lng },
                    {
                      lat: coordinates.destination.lat,
                      lng: coordinates.destination.lng,
                    },
                  ]}
                  options={options}
                />
              </GoogleMap>
              <div className="text-lg text-gray-700 mt-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(tour.description),
                  }}
                  className="prose prose-lg mb-4"
                  style={{ fontSize: '18px' }}
                />
                {tour.days.map((day, index) => (
                  <Card key={index} title={`Gün ${index + 1}`} style={{ marginBottom: '10px', borderRadius: '10px', overflow: 'hidden' }} bodyStyle={{ padding: '20px' }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(day.description),
                      }}
                      style={{ fontSize: '16px' }}
                    />
                  </Card>
                ))}
              </div>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              title={<Title level={3}>Turunuzu Şimdi Ayırtın</Title>}
              bordered={false}
              style={{ marginBottom: '20px', borderRadius: '10px' }}
              bodyStyle={{ padding: '20px' }}
              hoverable
            >
              <Text strong style={{ fontSize: '18px' }}>Kişi sayısını seçiniz:</Text>
              <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '20px' }}>
                <InputNumber
                  min={1}
                  value={participants}
                  onChange={setParticipants}
                  addonBefore={<UserOutlined />}
                  style={{ width: '100%' }}
                />
                <Text type="secondary" style={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
                  <DollarOutlined style={{ marginRight: '8px' }} /> 
                  {`${participants * (tour.price || 0)} ${tour.currency}`}
                </Text>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{ fontSize: '18px', height: '50px' }}
                  onClick={() => navigate('/purchase-1', {
                    state: {
                      tourName: tour.name,
                      tourImage: tour.tourImagesUrl[0], // Assuming the first image is representative
                      participants: participants,
                      totalCost: participants * (tour.price || 0),
                      currency: tour.currency
                    }
                  })}
                >
                  Şimdi Rezerve Et
                </Button>
              </Space>
            </Card>
            <Card title={<Title level={3}>Diğer Turları Keşfedin</Title>} bordered={false} style={{ borderRadius: '10px' }} bodyStyle={{ padding: '20px' }}>
              <List
                itemLayout="vertical"
                dataSource={otherTours}
                renderItem={(item) => (
                  <List.Item
                    key={item._id}
                    style={{ cursor: 'pointer', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}
                    onClick={() => navigate(`/explore/${item._id}`)}
                  >
                    <Row gutter={16} align="middle">
                      <Col span={8}>
                        <Image
                          width={100}
                          height={100}
                          src={item.tourImagesUrl[0]}
                          alt={item.name}
                          style={{ borderRadius: '10px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col span={16}>
                        <List.Item.Meta
                          title={<a href={`/explore/${item._id}`} style={{ fontSize: '18px' }}>{item.name}</a>}
                          description={<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} style={{ fontSize: '16px' }} />}
                        />
                        <Space direction="vertical" size="small">
                          <Text type="secondary" style={{ fontSize: '14px' }}><EnvironmentOutlined /> {item.region}</Text>
                          <Text type="secondary" style={{ fontSize: '14px' }}><CalendarOutlined /> {formatDate(item.startDate)}</Text>
                        </Space>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TourDetail;
