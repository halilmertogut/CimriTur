import Sidebar from './SideBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                {children}

            </div>
        </div>
    );
};

export default DashboardLayout;
