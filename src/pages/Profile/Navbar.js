import React from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';

const Navbar = () => (
  <div className="w-full font-montserrat bg-white shadow px-5 py-2 flex justify-between items-center">
    <div className="font-semibold text-xl">Profil Yönetimi</div>
    <Menu mode="horizontal" className="border-none bg-white">
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile" className="text-indigo-500 hover:text-indigo-700">Profil</Link>
      </Menu.Item>
      <Menu.Item key="personalinfo" icon={<UserOutlined />}>
        <Link to="/personalinfo" className="text-indigo-500 hover:text-indigo-700">Kişisel Bilgiler</Link>
      </Menu.Item>
      <Menu.Item key="payment" icon={<CreditCardOutlined />}>
        <Link to="/payment" className="text-indigo-500 hover:text-indigo-700">Ödeme</Link>
      </Menu.Item>
      <Menu.Item key="notifications" icon={<BellOutlined />}>
        <Link to="/notifications" className="text-indigo-500 hover:text-indigo-700">Bildirimler</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
