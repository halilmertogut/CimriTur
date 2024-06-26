import React from "react";
import { BellOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import Navbar from "./Navbar";

const { Title, Text } = Typography;

const notifications = [
  { id: 1, message: "Roma için başarılı bir tur rezervasyonu yaptınız. Maceranız için hazır olun!", date: "01.05.2024" },
  { id: 2, message: "Paris turunuz onaylanmıştır. İyi yolculuklar!", date: "15.04.2024" },
  { id: 3, message: "Maldivler Kaçamağı için ödemeniz işleme alındı.", date: "12.04.2024" }
];

const Notifications = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center h-auto">
      <Navbar />
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5 mt-20">
        <Title level={2} className="text-red-500 text-center">Bildirimler</Title>
        <div className="w-full">
          {notifications.map((notification) => (
            <Card key={notification.id} className="mb-4">
              <Card.Meta
                avatar={<BellOutlined className="text-red-500" />}
                title={<Text className="text-neutral-800">{notification.message}</Text>}
                description={<Text className="text-neutral-500">{notification.date}</Text>}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
