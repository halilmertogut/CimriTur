import React from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet
import Sidebar from './SideBar';  // Ensure the import path is correct

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
