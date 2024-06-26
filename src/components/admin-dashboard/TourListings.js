import React, { useState } from 'react';
import { Input, Card, Pagination, Row, Col } from 'antd';

const { Search } = Input;

const TourListings = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 9;

    const tours = [
        { name: "Roma Tarihi Turu", agency: "Antik Kaşifler", location: "Roma, İtalya", description: "Antik Roma'nın kalıntılarını uzman rehberlerle keşfedin.", imageUrl: "https://placeimg.com/640/480/arch" },
        { name: "Singapur Gece Safari", agency: "Vahşi Yaşam Maceraları", location: "Singapur", description: "Dünyanın ilk gece hayvanat bahçesinde gece vahşi yaşamını deneyimleyin.", imageUrl: "https://placeimg.com/640/480/nature" },
        { name: "Tokyo Kültür Festivalleri", agency: "Kültür Bağlantısı", location: "Tokyo, Japonya", description: "Tokyo'nun canlı festivallerine kendinizi kaptırın.", imageUrl: "https://placeimg.com/640/480/people" },
        // Add more tours as necessary
    ];

    const filteredTours = tours.filter(tour =>
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.agency.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const pageCount = Math.ceil(filteredTours.length / itemsPerPage);
    const currentData = filteredTours.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Tur Listeleri</h1>
            <div className="mb-4">
                <Search
                    placeholder="Tur adı, konum veya ajans adıyla ara"
                    enterButton="Ara"
                    size="large"
                    onSearch={value => setSearchQuery(value)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Row gutter={[16, 16]}>
                {currentData.map((tour, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            cover={<img alt={tour.name} src={tour.imageUrl} className="w-full h-56 object-cover object-center" />}
                        >
                            <Card.Meta
                                title={tour.name}
                                description={
                                    <>
                                        <p className="text-sm text-gray-500">Organize Eden: {tour.agency}</p>
                                        <p className="text-sm text-gray-500">Konum: {tour.location}</p>
                                        <p className="mt-2 text-gray-700 text-sm">{tour.description}</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="flex justify-center mt-6">
                <Pagination
                    current={currentPage}
                    total={filteredTours.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default TourListings;
