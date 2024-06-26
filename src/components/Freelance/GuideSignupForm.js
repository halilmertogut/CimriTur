import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import 'react-tagsinput/react-tagsinput.css';
import { storage } from '../../firebase/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Form,
  Input,
  Button,
  Avatar,
  Upload,
  Card,
  DatePicker as AntDatePicker,
  Select,
  message,
  Row,
  Col,
  Typography
} from 'antd';
import {
  CameraOutlined
} from '@ant-design/icons';
import TagsInput from 'react-tagsinput';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';

const { TextArea } = Input;
const { Title } = Typography;

const uploadToFirebase = async (file, path) => {
  const fileRef = storageRef(storage, path);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
};

const GuideSignupForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [experience, setExperience] = useState([]);
  const [tourRegions, setTourRegions] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [dates, setDates] = useState({});
  const [licenseValidity, setLicenseValidity] = useState(null);
  const [formData, setFormData] = useState({});

  const generateTimeSlots = () => {
    const slots = [];
    const startTime = 9;
    const endTime = 17;
    for (let hour = startTime; hour < endTime; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const handleLanguagesChange = (languages) => {
    setLanguages(languages);
  };

  const handleExperienceChange = (experience) => {
    setExperience(experience);
  };

  const handleTourRegionsChange = (tourRegions) => {
    setTourRegions(tourRegions);
  };

  const handleSubmit = async (values) => {
    try {
      let profilePhotoUrl = '';
      if (profilePhoto) {
        profilePhotoUrl = await uploadToFirebase(profilePhoto, `profilePhotos/${profilePhoto.name}`);
      }
      const postData = {
        ...values,
        profilePhoto: profilePhotoUrl,
        languages,
        experience,
        tourRegions,
        licenseValidity: licenseValidity ? licenseValidity.toISOString().split('T')[0] : ''
      };
      console.log('Form Data Submitted:', postData);

      const response = await fetch('http://localhost:3000/api/guides/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit guide data');
      }
      message.success('Guide successfully registered!');
      navigate('/login');
    } catch (error) {
      message.error(`Registration failed: ${error.message}`);
      console.error("Registration Error:", error);
    }
  };

  const handleProfilePhotoChange = useCallback((file) => {
    setProfilePhoto(Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDates(prevDates => ({
      ...prevDates,
      [formattedDate]: prevDates[formattedDate] || []
    }));
  };

  const handleSlotClick = (date, slot) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDates(prevDates => {
      const currentSlots = prevDates[formattedDate];
      if (currentSlots.includes(slot)) {
        return {
          ...prevDates,
          [formattedDate]: currentSlots.filter(s => s !== slot)
        };
      } else if (currentSlots.length < 5) {
        return {
          ...prevDates,
          [formattedDate]: [...currentSlots, slot]
        };
      }
      return prevDates;
    });
  };

  const removeSlot = (date, slot) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDates(prevDates => ({
      ...prevDates,
      [formattedDate]: prevDates[formattedDate].filter(s => s !== slot)
    }));
  };

  const removeDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDates(prevDates => {
      const { [formattedDate]: _, ...remainingDates } = prevDates;
      return remainingDates;
    });
  };

  useEffect(() => {
    const values = form.getFieldsValue();
    setFormData({
      ...values,
      licenseValidity: licenseValidity ? licenseValidity.toISOString().split('T')[0] : '',
    });
  }, [form, licenseValidity]);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded flex flex-col font-montserrat">
      <Title level={2} className="text-center mb-6">Rehber Kayıt Formu</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        onValuesChange={() => {
          const values = form.getFieldsValue();
          setFormData({
            ...values,
            licenseValidity: licenseValidity ? licenseValidity.toISOString().split('T')[0] : '',
          });
        }}
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          dateOfBirth: '',
          address: '',
          biography: '',
          references: '',
          nationalId: '',
          bloodType: '',
          registryNo: '',
          licenseNo: '',
          password: '',
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Card title="Kişisel Bilgiler" bordered={false}>
              <Form.Item>
                <div className="flex items-center space-x-4">
                  {profilePhoto ? (
                    <Avatar size={64} src={profilePhoto.preview} />
                  ) : (
                    <Avatar size={64} icon={<CameraOutlined />} />
                  )}
                  <Upload
                    accept="image/*"
                    showUploadList={false}
                    beforeUpload={(file) => {
                      handleProfilePhotoChange(file);
                      return false;
                    }}
                  >
                    <Button>{profilePhoto ? 'PP Değiştir' : 'PP Ekle'}</Button>
                  </Upload>
                </div>
              </Form.Item>
              <Form.Item name="fullName" label="Ad Soyad" rules={[{ required: true, message: 'Ad Soyad gerekli' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="E-posta" rules={[{ required: true, type: 'email', message: 'Geçerli bir e-posta girin' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Şifre" rules={[{ required: true, message: 'Şifre gerekli' }]}>
                <Input.Password />
              </Form.Item>
              <Form.Item name="phoneNumber" label="Telefon Numarası" rules={[{ required: true, message: 'Telefon Numarası gerekli' }]}>
                <PhoneInput
                  international
                  defaultCountry="TR"
                  value={form.getFieldValue('phoneNumber')}
                  onChange={(phoneNumber) => form.setFieldsValue({ phoneNumber })}
                />
              </Form.Item>
              <Form.Item name="dateOfBirth" label="Doğum Tarihi" rules={[{ required: true, message: 'Doğum Tarihi gerekli' }]}>
                <AntDatePicker />
              </Form.Item>
              <Form.Item label="Diller">
                <TagsInput value={languages} onChange={handleLanguagesChange} />
              </Form.Item>
              <Form.Item label="Deneyimler">
                <TagsInput value={experience} onChange={handleExperienceChange} />
              </Form.Item>
              <Form.Item label="Tur Bölgeleri">
                <TagsInput value={tourRegions} onChange={handleTourRegionsChange} />
              </Form.Item>
              <Form.Item name="references" label="Referanslar" rules={[{ required: true, message: 'Referanslar gerekli' }]}>
                <TextArea rows={4} />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Türkiye Turist Rehberler Birliği Kartı" bordered={false}>
              <Form.Item name="nationalId" label="TC Kimlik No" rules={[{ required: true, message: 'TC Kimlik No gerekli' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="bloodType" label="Kan Grubu" rules={[{ required: true, message: 'Kan Grubu gerekli' }]}>
                <Select>
                  <Select.Option value="A+">A+</Select.Option>
                  <Select.Option value="A-">A-</Select.Option>
                  <Select.Option value="B+">B+</Select.Option>
                  <Select.Option value="B-">B-</Select.Option>
                  <Select.Option value="AB+">AB+</Select.Option>
                  <Select.Option value="AB-">AB-</Select.Option>
                  <Select.Option value="0+">0+</Select.Option>
                  <Select.Option value="0-">0-</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="registryNo" label="Sicil No" rules={[{ required: true, message: 'Sicil No gerekli' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="licenseNo" label="Ruhsat No" rules={[{ required: true, message: 'Ruhsat No gerekli' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="licenseValidity" label="Ruhsat Geçerlilik Süresi" rules={[{ required: true, message: 'Ruhsat Geçerlilik Süresi gerekli' }]}>
                <AntDatePicker onChange={setLicenseValidity} />
              </Form.Item>
              <Card title="Türkiye Turist Rehberler Birliği Kartı Önizlemesi" bordered={false}>
                {profilePhoto && (
                  <img src={profilePhoto.preview} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                )}
                <div className="text-gray-900 font-bold text-center">Ad Soyad: {form.getFieldValue('fullName')}</div>
                <div className="text-gray-600 text-center">TC Kimlik No: {form.getFieldValue('nationalId')}</div>
                <div className="text-gray-600 text-center">Kan Grubu: {form.getFieldValue('bloodType')}</div>
                <div className="text-gray-600 text-center">Sicil No: {form.getFieldValue('registryNo')}</div>
                <div className="text-gray-600 text-center">Ruhsat No: {form.getFieldValue('licenseNo')}</div>
                <div className="text-gray-600 text-center">Ruhsat Geçerlilik Süresi: {licenseValidity ? licenseValidity.toISOString().split('T')[0] : ''}</div>
              </Card>
            </Card>
          </Col>
        </Row>
        <div className="p-4 bg-white shadow rounded mt-6">
          <DatePicker
            selected={null}
            onChange={handleDateChange}
            inline
          />
          {Object.entries(dates).map(([date, slots]) => (
            <div key={date} className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{new Date(date).toDateString()}</h3>
                <button onClick={() => removeDate(new Date(date))} className="ml-2 text-red-500 hover:text-red-700">
                  &times;
                </button>
              </div>
              <div className="flex flex-wrap">
                {generateTimeSlots().map((slot, index) => (
                  <div key={index} className="m-1 flex items-center">
                    <button onClick={() => handleSlotClick(new Date(date), slot)}
                      className={`p-2 rounded-full text-sm flex items-center ${slots.includes(slot) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                      {slot}
                      {slots.includes(slot) && (
                        <span onClick={() => removeSlot(new Date(date), slot)} className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
                          &times;
                        </span>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            type="primary"
            htmlType="submit"
            className="flex-1 mr-2"
          >
            Kayıt Ol
          </Button>
          <Button
            type="default"
            onClick={() => navigate('/login')}
            className="flex-1 ml-2"
          >
            Giriş Yap
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default GuideSignupForm;
