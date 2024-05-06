import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';  // Ensure correct path to AdminNavbar

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="admin-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
