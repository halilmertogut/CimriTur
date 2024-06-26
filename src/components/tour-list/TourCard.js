import React from 'react';
import { Card, Badge, Button, Space, Tag, Rate, Typography } from 'antd';
import { EnvironmentOutlined, CarOutlined, GlobalOutlined, CalendarOutlined, RightOutlined } from '@ant-design/icons';
import DOMPurify from 'dompurify';

const { Meta } = Card;
const { Text, Title } = Typography;

const createMarkup = (htmlContent) => ({ __html: DOMPurify.sanitize(htmlContent) });

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const TourCard = ({ tour, onClick }) => (
  <Card
    hoverable
    style={{
      marginBottom: '20px',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
      height: 'auto', 
      border: '1px solid #f0f0f0',
    }}
    cover={<img alt={tour.name} src={tour.tourImagesUrl[0]} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />} 
    onClick={() => onClick(tour._id)}
    bodyStyle={{ padding: '15px' }} 
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.borderColor = '#d9d9d9';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = '#f0f0f0';
    }}
  >
    <Meta
      title={<Title level={4} style={{ margin: 0 }}>{tour.name}</Title>}
      description={<div dangerouslySetInnerHTML={createMarkup(tour.description)} style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis' }} />}
    />
    <Space direction="vertical" size="small" style={{ width: '100%', marginTop: 8 }}>
      <Rate disabled defaultValue={tour.rating} style={{ fontSize: '1em' }} />
      <Space>
        <Badge count={tour.rating.toFixed(1)} style={{ backgroundColor: '#52c41a' }} />
        <Text type="secondary">({tour.reviews} Reviews)</Text>
      </Space>
      <div style={{ marginTop: 8 }}>
        <Tag icon={<EnvironmentOutlined />} color="default">
          {tour.startLocation} - {tour.destination}
        </Tag>
        <Tag icon={<GlobalOutlined />} color="default">
          {tour.region}
        </Tag>
        <Tag icon={<CarOutlined />} color="default">
          {tour.transportType}
        </Tag>
        <Tag icon={<CalendarOutlined />} color="default">
          {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
        </Tag>
      </div>
      <Button type="primary" block icon={<RightOutlined />} onClick={() => onClick(tour._id)}>
        Daha Fazla
      </Button>
    </Space>
  </Card>
);

export default TourCard;
