import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../admin-dashboard/admin-panel/AuthContext';  // Ensure correct path to AuthProvider
import AdminNavbar from './AdminNavbar';  // Ensure correct path to AdminNavbar
import { Layout } from 'antd';

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <AdminNavbar />
        <Layout className="site-layout">
          <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
            <Outlet /> 
          </Content>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default AdminLayout;
