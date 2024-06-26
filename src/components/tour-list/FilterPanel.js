import React, { useState, useEffect } from 'react';
import { Input, Select, Button, Radio, Form, Space, Affix, Typography, Divider } from 'antd';
import { FilterOutlined, ClearOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (changedValues) => {
    setLocalFilters((prev) => ({ ...prev, ...changedValues }));
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      type: '',
      region: '',
      rating: '',
      priceSort: '',
      transportType: '',
      minPrice: '',
      maxPrice: '',
      startLocation: ''
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
  };

  const ratings = ['Hepsi', '1+', '2+', '3+', '4+', '5'];

  return (
    <Affix offsetTop={20} >
      <Form
        layout="vertical"
        initialValues={localFilters}
        onValuesChange={(_, allValues) => handleFilterChange(allValues)}
        style={{
          background: '#fff',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          width: '250px',
          marginTop: '70px' // Adjusted width for a compact design
        }}
      >
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Form.Item name="search" label="Ara" style={{ marginBottom: '8px' }}>
            <Input 
              placeholder="Turları ara..." 
              allowClear
              style={{ borderRadius: '8px', padding: '5px' }}
            />
          </Form.Item>

          <Form.Item name="startLocation" label="Başlangıç Noktası" style={{ marginBottom: '8px' }}>
            <Input 
              placeholder="Başlangıç noktası..." 
              allowClear
              style={{ borderRadius: '8px', padding: '5px' }}
            />
          </Form.Item>

          <Form.Item name="type" label="Tip" style={{ marginBottom: '8px' }}>
            <Select 
              placeholder="Tüm Tipler" 
              style={{ borderRadius: '8px', width: '100%' }}
            >
              <Option value="">Tüm Tipler</Option>
              <Option value="Macera">Macera</Option>
              <Option value="Kültürel">Kültürel</Option>
              <Option value="Boş Zaman">Boş Zaman</Option>
              <Option value="Eğitim">Eğitim</Option>
            </Select>
          </Form.Item>

          <Form.Item name="region" label="Bölge" style={{ marginBottom: '8px' }}>
            <Select 
              placeholder="Tüm Bölgeler" 
              style={{ borderRadius: '8px', width: '100%' }}
            >
              <Option value="">Tüm Bölgeler</Option>
              <Option value="Ege">Ege</Option>
              <Option value="Akdeniz">Akdeniz</Option>
              <Option value="Karadeniz">Karadeniz</Option>
              <Option value="İç Anadolu">İç Anadolu</Option>
              <Option value="Güneydoğu Anadolu">Güneydoğu Anadolu</Option>
              <Option value="Doğu Anadolu">Doğu Anadolu</Option>
              <Option value="Marmara">Marmara</Option>
            </Select>
          </Form.Item>

          <Form.Item name="transportType" label="Ulaşım Tipi" style={{ marginBottom: '8px' }}>
            <Select 
              placeholder="Tüm Ulaşım Tipleri" 
              style={{ borderRadius: '8px', width: '100%' }}
            >
              <Option value="">Tüm Ulaşım Tipleri</Option>
              <Option value="Otobüs">Otobüs</Option>
              <Option value="Uçak">Uçak</Option>
              <Option value="Tren">Tren</Option>
            </Select>
          </Form.Item>

          <Form.Item name="minPrice" label="Min Fiyat" style={{ marginBottom: '8px' }}>
            <Input 
              placeholder="Min Fiyat" 
              allowClear
              style={{ borderRadius: '8px', padding: '5px' }}
            />
          </Form.Item>

          <Form.Item name="maxPrice" label="Max Fiyat" style={{ marginBottom: '8px' }}>
            <Input 
              placeholder="Max Fiyat" 
              allowClear
              style={{ borderRadius: '8px', padding: '5px' }}
            />
          </Form.Item>

          <Form.Item name="priceSort" label="Fiyata Göre Sırala" style={{ marginBottom: '8px' }}>
            <Select 
              placeholder="Fiyata Göre Sırala" 
              style={{ borderRadius: '8px', width: '100%' }}
            >
              <Option value="">Sırala</Option>
              <Option value="asc">Düşükten Yükseğe</Option>
              <Option value="desc">Yüksekten Düşüğe</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Puan" style={{ marginBottom: '8px' }}>
            <Radio.Group
              name="rating"
              value={localFilters.rating}
              onChange={(e) => handleFilterChange({ rating: e.target.value })}
            >
              {ratings.map((rating) => (
                <Radio key={rating} value={rating}>
                  {rating}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>

          <Space size="small" direction="vertical" style={{ width: '100%' }}>
            <Button onClick={clearFilters} type="default" icon={<ClearOutlined />} block>
              Filtreleri Sıfırla
            </Button>
            <Button onClick={applyFilters} type="primary" icon={<FilterOutlined />} block>
              Uygula
            </Button>
          </Space>
        </Space>
      </Form>
    </Affix>
  );
};

export default FilterPanel;
