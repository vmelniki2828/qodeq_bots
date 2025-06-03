import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="section">
          {/* Пустая секция для визуализации фона */}
          <div style={{ minHeight: '70vh' }}></div>
        </div>
      </main>
    </div>
  );
}

export default App; 