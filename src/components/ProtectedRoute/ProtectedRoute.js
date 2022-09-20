import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext.js';

const ProtectedRoute = ({ isAuthLoading, children }) => {

  const loggedIn = useContext(AuthContext);

  if (isAuthLoading) {
    return (loggedIn ? children : <Navigate to="/" />)
  }
};

export default ProtectedRoute;
