import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import Login from './login-register/Login';
import Register from './login-register/Register'

function AppRoutes  () {
    return (
        <Routes>
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRoutes;