import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  //const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('token');

  // Check if the user has the required role
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    // Redirect to login if not authenticated or if the role is not allowed
    return <Navigate to="/" />;
  }
  if( (allowedRoles && !allowedRoles.includes(userRole))){
    return <Navigate to="/restricted" />;
  }

  return children;
};

export default ProtectedRoute;
