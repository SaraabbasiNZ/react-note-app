// src/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return(
        <>
            {isAuthenticated ? children : <Navigate to="/login" />}
        </>)

};

export default ProtectedRoute;
 