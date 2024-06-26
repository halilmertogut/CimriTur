import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Pagination, Layout, Typography } from 'antd';
import TourCard from "./TourCard";
import FilterPanel from "./FilterPanel";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const TourList = () => {
  const location = useLocation();
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState(() => {
    const defaultFilters = {
      type: "",
      region: "",
      rating: "Hepsi",
      search: "",
      minPrice: "",
      maxPrice: "",
      startLocation: "",
    };
    return location.state
      ? { ...defaultFilters, ...location.state }
      : defaultFilters;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPage] = useState(6); // Show fewer tours per page for more details
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch("http://localhost:3000/api/tours/all-tours");
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
    };
    fetchTours();
  }, []);

  useEffect(() => {
    let result = tours.filter(
      (tour) =>
        (!filters.type ||
          tour.type.toLowerCase().trim() ===
            filters.type.toLowerCase().trim()) &&
        (!filters.region ||
          tour.region.toLowerCase().trim() ===
            filters.region.toLowerCase().trim()) &&
        (!filters.rating ||
          filters.rating === "Hepsi" ||
          tour.rating >= parseInt(filters.rating)) &&
        (!filters.search ||
          tour.name.toLowerCase().includes(filters.search.toLowerCase())) &&
        (!filters.minPrice || tour.price >= parseFloat(filters.minPrice)) &&
        (!filters.maxPrice || tour.price <= parseFloat(filters.maxPrice)) &&
        (!filters.transportType ||
          tour.transportType
            .toLowerCase()
            .includes(filters.transportType.toLowerCase())) &&
        (!filters.startLocation ||
          tour.startLocation.toLowerCase().trim() ===
            filters.startLocation.toLowerCase().trim())
    );

    if (filters.priceSort === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.priceSort === "desc") {
      result.sort((a, b) => b.price - a.price);
    }
    setFilteredTours(result);
  }, [filters, tours]);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Sider width={300} style={{ background: '#fff', padding: '20px' }}>
        <FilterPanel filters={filters} setFilters={setFilters} />
      </Sider>
      <Content style={{ padding: '20px' }}>
        <Title level={2} style={{ color: '#333' }}>
          Turları Keşfet
        </Title>
        <Text style={{ fontSize: '1em', color: '#666', marginBottom: '20px', display: 'block' }}>
          Tur listelerini tercihlerinize göre uyarlamak için soldaki filtreleri kullanın.
        </Text>
        <Row gutter={[16, 16]}>
          {currentTours.map((tour) => (
            <Col key={tour._id} xs={24} sm={24} md={12} lg={8}>
              <TourCard tour={tour} onClick={() => navigate(`/explore/${tour._id}`)} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={currentPage}
          pageSize={toursPerPage}
          total={filteredTours.length}
          onChange={paginate}
          className="mt-8"
          style={{ textAlign: 'center' }}
        />
      </Content>
    </Layout>
  );
};

export default TourList;
