import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/admin-dashboard/admin-panel/AuthContext';  // Ensure this path is correct

const AdminProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Use context to check if the user is authenticated
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login, but save the current location they were trying to go to
        return <Navigate to="/admin-login" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminProtectedRoute;
