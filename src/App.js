import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';
import TechnologiesPage from './components/TechnologiesPage/TechnologiesPage';
import './App.css';

function App() {
  return (
    <Router basename="/react-homework-template">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 