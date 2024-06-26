import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography, Button, Card, Col, Row, Pagination, Tag, Tooltip } from 'antd';
import { ReadOutlined, FileAddOutlined, SearchOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const categories = ['Hepsi', 'Tarih', 'Macera', 'Doğa', 'Mutfak'];
const blogsPerPage = 9;

const BlogCard = ({ item, onClick, isExpanded, onExpand }) => (
  <Col xs={24} sm={12} md={8}>
    <Card
      hoverable
      cover={<img alt={item.category} src={item.imageUrl && item.imageUrl !== "undefined" ? item.imageUrl : `https://picsum.photos/600/300`} />}
      onClick={() => onClick(item._id)}
      className="blog-card"
      style={{ marginBottom: '20px' }}
    >
      <Tag color="red">{item.blogType.toUpperCase()}</Tag>
      <Title level={4}>{item.title}</Title>
      <Paragraph ellipsis={!isExpanded} style={{ marginBottom: '8px' }}>
        {item.description}
      </Paragraph>
      {!isExpanded && (
        <Button type="link" onClick={e => { e.stopPropagation(); onExpand(item._id); }}>
          Devamını Oku
        </Button>
      )}
    </Card>
  </Col>
);

const Blog = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [blogItems, setBlogItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandDescription, setExpandDescription] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogItems(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const filterBlogItems = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    return blogItems.filter(item => lowerCaseCategory === 'hepsi' ? true : item.blogType.toLowerCase() === lowerCaseCategory);
  };

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleExpandDescription = (id) => {
    setExpandDescription({ ...expandDescription, [id]: true });
  };

  const handleCreateBlog = () => {
    if (isAuthenticated) {
      navigate('/create-blog');
    }
  };

  const filteredBlogs = () => {
    const filteredItems = selectedCategory === 'Hepsi' ? blogItems : filterBlogItems(selectedCategory);
    const startIndex = (currentPage - 1) * blogsPerPage;
    return filteredItems.slice(startIndex, startIndex + blogsPerPage);
  };

  const pageCount = Math.ceil(blogItems.length / blogsPerPage);

  return (
    <div className="blog-container font montserrat" style={{ background: '#f0f2f5', padding: '20px 0' }}>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="text-center mb-10">
          <Title>En İyi Blogları Keşfedin</Title>
          <Paragraph>Farklı kategorilerdeki ilgi çekici blog yazılarını keşfet.</Paragraph>
        </div>
        <div className="categories mb-6 flex justify-center flex-wrap gap-3">
          {categories.map(category => (
            <Button danger key={category} type={selectedCategory === category ? 'primary' : 'default'} shape="round" onClick={() => setSelectedCategory(category)}>
              {category}
            </Button>
          ))}
        </div>
        <Row gutter={[16, 16]}>
          {filteredBlogs().map(item => (
            <BlogCard
              key={item._id}
              item={item}
              onClick={handleCardClick}
              isExpanded={expandDescription[item._id]}
              onExpand={handleExpandDescription}
            />
          ))}
        </Row>
        {pageCount > 1 && (
          <Pagination
            current={currentPage}
            total={blogItems.length}
            pageSize={blogsPerPage}
            onChange={setCurrentPage}
            className="text-center mt-10"
          />
        )}
      </div>
      <div className="create-blog-section py-8" style={{ background: '#f0f2f5'}}>
        <div className="text-center">
          <Tooltip title={isAuthenticated ? "Create a new blog" : "You need to be logged in to create a blog"}>
            <Button
              type="primary"
              icon={<FileAddOutlined />}
              size="large"
              onClick={handleCreateBlog}
              disabled={!isAuthenticated}
              className="create-blog-button"
            >
              Blog Oluştur
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Blog;
