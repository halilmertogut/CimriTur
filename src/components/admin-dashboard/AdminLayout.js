import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../admin-dashboard/admin-panel/AuthContext';  // Correct path to AuthProvider
import AdminNavbar from './AdminNavbar';  // Ensure correct path to AdminNavbar

const AdminLayout = () => {
  return (
    <AuthProvider>
      <AdminNavbar />
      <div className="admin-content">
        <Outlet /> 
      </div>
    </AuthProvider>
  );
};

export default AdminLayout;
