import React from 'react';
import { List, Card, Tag, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Support = () => {
    const tickets = [
        {
            id: 1234,
            issue: "Giriş Sorunu",
            description: "Kullanıcı doğru bilgilerine rağmen giriş yapamıyor.",
            status: "Açık",
            submittedOn: "2024-04-16"
        },
        {
            id: 1235,
            issue: "Ödeme İşlenmedi",
            description: "Ödeme yapıldı fakat hesapta yansıtılmadı.",
            status: "Çözüldü",
            submittedOn: "2024-04-15",
            resolution: "Manuel doğrulama sonrası ödeme işlendi."
        },
        {
            id: 1236,
            issue: "Tur İptali Talebi",
            description: "Kullanıcı, rezerve edilmiş bir turun iptalini istiyor.",
            status: "Onay Bekliyor",
            submittedOn: "2024-04-14"
        }
    ];

    const statusColors = {
        "Açık": "red",
        "Çözüldü": "green",
        "Onay Bekliyor": "yellow"
    };

    return (
        <div className="container mx-auto p-6">
            <Title level={2} className="text-center mb-6">Destek Talepleri</Title>
            <Row gutter={16}>
                <Col span={24}>
                    <List
                        dataSource={tickets}
                        renderItem={ticket => (
                            <List.Item>
                                <Card className="w-full" bordered={false}>
                                    <List.Item.Meta
                                        title={<Text strong>Talep #{ticket.id} - {ticket.issue}</Text>}
                                        description={
                                            <>
                                                <Text>{ticket.description}</Text><br />
                                                <Tag color={statusColors[ticket.status]}>{ticket.status}</Tag><br />
                                                <Text type="secondary">Gönderildiği tarih: {ticket.submittedOn}</Text><br />
                                                {ticket.resolution && <Text type="secondary">Çözüm: {ticket.resolution}</Text>}<br />
                                                {ticket.status === 'Onay Bekliyor' && (
                                                    <Text type="secondary">Onaydan {new Date().getDate() - new Date(ticket.submittedOn).getDate()} gün geçti</Text>
                                                )}
                                            </>
                                        }
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Support;
