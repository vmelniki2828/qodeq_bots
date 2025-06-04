import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from './HomePage/HomePage';
import ReviewsPage from './ReviewsPage/ReviewsPage';
import TechnologiesPage from './TechnologiesPage/TechnologiesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="technologies" element={<TechnologiesPage />} />
      </Route>
    </Routes>
  );
};
