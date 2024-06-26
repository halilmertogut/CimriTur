import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Select, Button, DatePicker, Upload, Card, Switch, Typography, Divider } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill editor'ün stilini ekleyin
import moment from 'moment';

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

const QuillTextArea = ({ label, name, value, onChange }) => {
    const handleQuillChange = (content) => {
        onChange({ target: { name, value: content } });
    };

    return (
        <Form.Item label={label} name={name}>
            <ReactQuill theme="snow" value={value} onChange={handleQuillChange} />
        </Form.Item>
    );
};

const TourManagement = () => {
    const token = useSelector(state => state.auth.token);

    const [tourData, setTourData] = useState({
        name: '',
        type: '',
        region: '',
        startLocation: '',
        destination: '',
        description: '',
        price: '',
        transportType: '',
        currency: 'TRY',
        tourImages: [],
        startDate: null,
        endDate: null,
        days: [{ description: '', imageFile: null }]
    });

    const [mealsIncluded, setMealsIncluded] = useState({
        breakfast: false,
        lunch: false,
        tea: false,
        dinner: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTourData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setTourData(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (dates) => {
        setTourData(prev => ({
            ...prev,
            startDate: dates[0],
            endDate: dates[1]
        }));
    };

    const handleFileChange = ({ fileList }) => {
        setTourData(prev => ({ ...prev, tourImages: fileList }));
    };

    const handleDayChange = (index, e) => {
        const { name, value } = e.target;
        const newDays = [...tourData.days];
        newDays[index][name] = value;
        setTourData(prev => ({ ...prev, days: newDays }));
    };

    const handleDayFileChange = (index, file) => {
        const newDays = [...tourData.days];
        newDays[index].imageFile = file;
        setTourData(prev => ({ ...prev, days: newDays }));
    };

    const addDay = () => {
        setTourData(prev => ({
            ...prev,
            days: [...prev.days, { description: '', imageFile: null }]
        }));
    };

    const removeDay = (index) => {
        setTourData(prev => ({
            ...prev,
            days: prev.days.filter((_, idx) => idx !== index)
        }));
    };

    const handleSubmit = async (values) => {
        try {
            const tourImagesUrl = await Promise.all(
                tourData.tourImages.map(file => uploadToFirebase(file.originFileObj, `tourImages/${file.name}`))
            );

            const daysWithImages = await Promise.all(
                tourData.days.map(async (day) => ({
                    description: day.description,
                    imageUrl: day.imageFile ? await uploadToFirebase(day.imageFile.originFileObj, `dayImages/${day.imageFile.name}`) : ''
                }))
            );

            const tourDetails = {
                ...tourData,
                tourImages: tourImagesUrl,
                days: daysWithImages
            };

            const response = await fetch('http://localhost:3000/api/tours/add', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tourDetails)
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message);

            toast.success('Tur başarıyla eklendi!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                window.location.reload();
            }, 3000);

        } catch (error) {
            toast.error(`Tur eklenemedi: ${error.message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error("Detaylı hata:", error);
        }
    };

    const uploadToFirebase = async (file, path) => {
        const fileRef = storageRef(storage, path);
        await uploadBytes(fileRef, file);
        return getDownloadURL(fileRef);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <div className="flex-grow p-8">
                <Card title="Yeni Tur Oluştur" bordered={false} className="max-w-5xl mx-auto">
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item label="Tur Adı" name="name" rules={[{ required: true, message: 'Lütfen tur adı girin' }]}>
                            <Input name="name" value={tourData.name} onChange={handleInputChange} />
                        </Form.Item>
                        <Form.Item label="Tur Türü, Tema" name="type" rules={[{ required: true, message: 'Lütfen tur türü seçin' }]}>
                            <Select value={tourData.type} onChange={(value) => handleSelectChange('type', value)}>
                                <Option value="">Seçiniz</Option>
                                <Option value="Kültürel">Kültürel</Option>
                                <Option value="Macera">Macera</Option>
                                <Option value="Dağ Evi">Dağ Evi</Option>
                                <Option value="Tarihi">Tarihi</Option>
                                <Option value="Günübirlik">Günübirlik</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Bölge" name="region" rules={[{ required: true, message: 'Lütfen bölge seçin' }]}>
                            <Select value={tourData.region} onChange={(value) => handleSelectChange('region', value)}>
                                <Option value="">Seçiniz</Option>
                                <Option value="Ege">Ege</Option>
                                <Option value="Akdeniz">Akdeniz</Option>
                                <Option value="Karadeniz">Karadeniz</Option>
                                <Option value="İç Anadolu">İç Anadolu</Option>
                                <Option value="Güneydoğu Anadolu">Güneydoğu Anadolu</Option>
                                <Option value="Doğu Anadolu">Doğu Anadolu</Option>
                                <Option value="Marmara">Marmara</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Başlangıç Yeri" name="startLocation" rules={[{ required: true, message: 'Lütfen başlangıç yeri girin' }]}>
                            <Input name="startLocation" value={tourData.startLocation} onChange={handleInputChange} />
                        </Form.Item>
                        <Form.Item label="Varış Yeri" name="destination" rules={[{ required: true, message: 'Lütfen varış yeri girin' }]}>
                            <Input name="destination" value={tourData.destination} onChange={handleInputChange} />
                        </Form.Item>
                        <Form.Item label="Fiyat" name="price" rules={[{ required: true, message: 'Lütfen fiyat girin' }]}>
                            <Input.Group compact>
                                <Input
                                    style={{ width: '70%' }}
                                    type="number"
                                    name="price"
                                    value={tourData.price}
                                    onChange={handleInputChange}
                                />
                                <Select value={tourData.currency} onChange={(value) => handleSelectChange('currency', value)} style={{ width: '30%' }}>
                                    <Option value="TRY">TRY</Option>
                                    <Option value="USD">USD</Option>
                                    <Option value="EUR">EUR</Option>
                                    <Option value="GBP">GBP</Option>
                                </Select>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item label="Tarih Aralığı" name="dateRange" rules={[{ required: true, message: 'Lütfen tarih aralığı seçin' }]}>
                            <RangePicker
                                format="DD/MM/YYYY"
                                value={tourData.startDate ? [moment(tourData.startDate), moment(tourData.endDate)] : []}
                                onChange={handleDateChange}
                            />
                        </Form.Item>
                        <QuillTextArea label="Açıklama" name="description" value={tourData.description} onChange={handleInputChange} />
                        <Form.Item label="Taşıma Türü" name="transportType" rules={[{ required: true, message: 'Lütfen taşıma türü seçin' }]}>
                            <Select value={tourData.transportType} onChange={(value) => handleSelectChange('transportType', value)}>
                                <Option value="">Seçiniz</Option>
                                <Option value="Otobüs">Otobüs</Option>
                                <Option value="Uçak">Uçak</Option>
                                <Option value="Tren">Tren</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Tur Resimleri" name="tourImages" rules={[{ required: true, message: 'Lütfen tur resimleri yükleyin' }]}>
                            <Upload
                                listType="picture"
                                multiple
                                beforeUpload={() => false}
                                onChange={handleFileChange}
                            >
                                <Button>Resim Ekle</Button>
                            </Upload>
                        </Form.Item>
                        <Divider orientation="left">Günler</Divider>
                        {tourData.days.map((day, index) => (
                            <Card
                                key={index}
                                title={`Gün ${index + 1}`}
                                extra={<Button type="link" onClick={() => removeDay(index)}>Sil</Button>}
                                style={{ marginBottom: '16px' }}
                            >
                                <QuillTextArea
                                    label="Açıklama"
                                    name="description"
                                    value={day.description}
                                    onChange={(e) => handleDayChange(index, e)}
                                />
                                <Form.Item label="Resim" name={`dayImage${index}`}>
                                    <Upload
                                        listType="picture"
                                        beforeUpload={() => false}
                                        onChange={({ file }) => handleDayFileChange(index, file)}
                                    >
                                        <Button>Resim Ekle</Button>
                                    </Upload>
                                </Form.Item>
                            </Card>
                        ))}
                        <Button type="dashed" onClick={addDay} style={{ width: '100%' }}>Başka Bir Gün Ekle</Button>
                        <Divider orientation="left">Dahil Olan Öğünler</Divider>
                        <Form.Item label="Kahvaltı">
                            <Switch
                                checked={mealsIncluded.breakfast}
                                onChange={(checked) => setMealsIncluded(prev => ({ ...prev, breakfast: checked }))}
                            />
                        </Form.Item>
                        <Form.Item label="Öğlen">
                            <Switch
                                checked={mealsIncluded.lunch}
                                onChange={(checked) => setMealsIncluded(prev => ({ ...prev, lunch: checked }))}
                            />
                        </Form.Item>
                        <Form.Item label="İkindi">
                            <Switch
                                checked={mealsIncluded.tea}
                                onChange={(checked) => setMealsIncluded(prev => ({ ...prev, tea: checked }))}
                            />
                        </Form.Item>
                        <Form.Item label="Akşam">
                            <Switch
                                checked={mealsIncluded.dinner}
                                onChange={(checked) => setMealsIncluded(prev => ({ ...prev, dinner: checked }))}
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Tur Ekle</Button>
                    </Form>
                </Card>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TourManagement;
