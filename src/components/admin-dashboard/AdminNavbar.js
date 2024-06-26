import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    BankOutlined,
    SolutionOutlined,
    CalendarOutlined,
    BarChartOutlined,
    FileTextOutlined,
    QuestionCircleOutlined,
    HomeOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Sider collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/user-actions')} style={{marginTop:'150px'}}>
                    Kullanıcı İşlemleri
                </Menu.Item>
                <Menu.Item key="2" icon={<BankOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/agency-actions')}>
                    Acenta İşlemleri
                </Menu.Item>
                <Menu.Item key="3" icon={<SolutionOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/freelance-actions')}>
                    Freelancer İşlemleri
                </Menu.Item>
                <Menu.Item key="4" icon={<CalendarOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/tour-listings')}>
                    Tur Listelemeleri
                </Menu.Item>
                <Menu.Item key="5" icon={<BarChartOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/bookings')}>
                    Rezervasyonlar
                </Menu.Item>
                <Menu.Item key="6" icon={<FileTextOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/system-reports')}>
                    Sistem Raporları
                </Menu.Item>
                <Menu.Item key="7" icon={<QuestionCircleOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/support')}>
                    Destek
                </Menu.Item>
                <Menu.Item key="8" icon={<HomeOutlined />} onClick={() => handleNavigate('/main-admin-dashboard')}>
                    Ana Sayfa
                </Menu.Item>
                <Menu.Item key="9" icon={<SettingOutlined />} onClick={() => handleNavigate('/main-admin-dashboard/settings')}>
                    Ayarlar
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default AdminNavbar;
