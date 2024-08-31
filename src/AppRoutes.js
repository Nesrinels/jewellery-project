import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ProductListPage from './ProductListPage';

function AppRoutes  () {
    return (
        <Routes>
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default AppRoutes;