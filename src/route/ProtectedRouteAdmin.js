import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/admin-dashboard/admin-panel/AuthContext';

const ProtectedRouteAdmin = ({ children }) => {
  const { user } = useAuth();
  console.log("Authenticated user in protected route:", user);

  if (!user) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRouteAdmin;
