import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Typography, Spin, Divider, Row, Col, Image } from 'antd';
import { ArrowLeftOutlined, FileTextOutlined, InstagramOutlined, WhatsAppOutlined, TwitterOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Blog yüklenirken bir hata oluştu:', error));
    }, [id]);

    if (!blog) return <div className="text-center py-10"><Spin size="large" /></div>;

    const handleSocialShare = (platform) => {
        const url = `http://localhost:3000/blogs/${id}`;
        const message = encodeURIComponent(`Bu harika blog yazısına göz atın: ${blog.title} ${url}`);
        
        switch (platform) {
            case 'instagram':
                window.open(`https://www.instagram.com/yourprofile/`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${message}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${message}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mx-auto max-w-4xl p-4 my-8">
            <Card
                bordered={false}
                className="shadow-lg rounded-lg overflow-hidden"
                cover={<Image alt="Blog Kapak Fotoğrafı" src={blog.imageUrl || "https://source.unsplash.com/random/1024x400"} />}
            >
                <Row justify="space-between" align="middle">
                    <Col>
                        <Button type="link" onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>
                            Ana Sayfaya Dön
                        </Button>
                    </Col>
                    <Col>
                        <Button type="link" onClick={() => navigate('/blog')} icon={<FileTextOutlined />}>
                            Bloglara Dön
                        </Button>
                    </Col>
                </Row>
                <Title level={2} className="mt-4 mb-2">{blog.title}</Title>
                <Row justify="space-between" align="middle" className="mb-4">
                    <Col>
                        <Text type="secondary">Yayınlanma Tarihi: {blog.createDate ? new Date(blog.createDate).toLocaleDateString('tr-TR') : 'Tarih bilgisi yok'}</Text>
                    </Col>
                    <Col>
                        <Text type="secondary" className="capitalize">Blog Türü: {blog.blogType}</Text>
                    </Col>
                </Row>
                <Divider />
                <Title level={3}>Açıklama</Title>
                <Paragraph>{blog.description}</Paragraph>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose lg:prose-xl" />
            </Card>
            <Card className="bg-gray-100 mt-4 p-4">
                <Title level={4}>Bu Yazıyı Paylaş</Title>
                <div className="flex gap-3 mt-4">
                    <Button onClick={() => handleSocialShare('instagram')} type="primary" shape="circle" icon={<InstagramOutlined />} />
                    <Button onClick={() => handleSocialShare('whatsapp')} type="primary" shape="circle" icon={<WhatsAppOutlined />} />
                    <Button onClick={() => handleSocialShare('twitter')} type="primary" shape="circle" icon={<TwitterOutlined />} />
                </div>
            </Card>
        </div>
    );
};

export default BlogDetail;
