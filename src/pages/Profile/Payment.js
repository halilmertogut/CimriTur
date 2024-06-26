import React, { useState } from "react";
import { CreditCardOutlined, UserOutlined, CalendarOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Typography, Card } from 'antd';
import Navbar from "./Navbar";

const { Title } = Typography;

const Payment = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-6 mt-20">
        <Title level={2} className="text-red-500 text-center">Ödeme Bilgisi</Title>
        <div className="flex justify-center items-center mt-10">
          <Card className="w-full sm:w-[50%]">
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="cardNumber"
                label="Kart Numarası"
                rules={[{ required: true, message: 'Lütfen kart numaranızı girin' }]}
              >
                <Input prefix={<CreditCardOutlined className="text-gray-500" />} placeholder="Kart Numarası" />
              </Form.Item>
              <Form.Item
                name="cardHolder"
                label="Kart Sahibinin Adı"
                rules={[{ required: true, message: 'Lütfen kart sahibinin adını girin' }]}
              >
                <Input prefix={<UserOutlined className="text-gray-500" />} placeholder="Kart Sahibinin Adı" />
              </Form.Item>
              <Form.Item
                name="expiryDate"
                label="Son Kullanım Tarihi (MM/YY)"
                rules={[{ required: true, message: 'Lütfen son kullanım tarihini girin' }]}
              >
                <Input prefix={<CalendarOutlined className="text-gray-500" />} placeholder="MM/YY" />
              </Form.Item>
              <Form.Item
                name="cvv"
                label="CVV"
                rules={[{ required: true, message: 'Lütfen CVV girin' }]}
              >
                <Input.Password prefix={<LockOutlined className="text-gray-500" />} placeholder="CVV" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full sm:w-auto">
                  Kaydet
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
