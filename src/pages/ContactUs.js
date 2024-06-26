import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import bgVideo from '../images/contactvideo.mp4'; // Ensure you have a compelling travel video

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    idea: '',
    nda: false
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/api/contact/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      message.success('E-posta başarıyla gönderildi!');
    } catch (error) {
      console.error('E-posta gönderilemedi:', error);
      message.error('E-posta gönderilemedi, lütfen daha sonra tekrar deneyiniz.');
    }
  };

  const handleValuesChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black font-montserrat">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={bgVideo} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-7xl w-full z-20 relative">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-5 bg-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-center text-gray-700">Merhaba <span className='text-4xl'>👋</span></Title>
            <Title level={3} className="text-center text-gray-700 mt-5">Bizimle iletişime geçin! ✨</Title>
            <Paragraph className="text-center text-gray-500 mb-6 mt-5">
              Sizden haber almak için sabırsızlanıyoruz. Aşağıdaki formu doldurun ve kısa süre içinde sizinle iletişime geçelim!
            </Paragraph>
            <Form
              form={form}
              onFinish={handleSubmit}
              onValuesChange={handleValuesChange}
              layout="vertical"
              className="mt-6"
              initialValues={formData}
            >
              <Form.Item
                name="contactName"
                rules={[{ required: true, message: 'Lütfen adınızı girin!' }]}
                label="Ad Soyad"
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Ali Veli"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, type: 'email', message: 'Lütfen geçerli bir e-posta adresi girin!' }]}
                label="Email"
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="aliveli@gmail.com"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="idea"
                rules={[{ required: true, message: 'Lütfen mesajınızı girin!' }]}
                label="Mesaj"
              >
                <Input.TextArea
                  prefix={<MessageOutlined className="site-form-item-icon" />}
                  placeholder="Mesajınızı yazınız..."
                  rows={4}
                  size="large"
                />
              </Form.Item>
              <Form.Item name="nda" valuePropName="checked">
                <Checkbox>
                  KVKK
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Gönder
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <div className="w-full md:w-1/2 bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4248365496356!2d32.75082831525116!3d39.86992197942934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8d8a9d1e2b%3A0x2840b2bcca9a6a39!2sBilkent%20University!5e0!3m2!1sen!2str!4v1642620692123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg mt-20 pr-5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
