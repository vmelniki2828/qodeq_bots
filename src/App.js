import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ScrollProvider } from './contexts/ScrollContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import ChatBotPage from './components/ChatBotPage';
import CallBotPage from './components/CallBotPage';
import CallCheckerPage from './components/CallCheckerPage';
import ChatCheckerPage from './components/ChatCheckerPage';
import { EmailBotPage } from './components/EmailBotPage';
import { AntiFraudPage } from './components/AntiFraudPage';
import { CasesPage } from './components/CasesPage';
import { PricesPage } from './components/PricesPage';
import { ContactsPage } from './components/ContactsPage';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat-bot" element={<ChatBotPage />} />
            <Route path="/call-bot" element={<CallBotPage />} />
            <Route path="/call-checker" element={<CallCheckerPage />} />
            <Route path="/chat-checker" element={<ChatCheckerPage />} />
            <Route path="/email-bot" element={<EmailBotPage />} />
            <Route path="/antifraud" element={<AntiFraudPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
      </Router>
    </ScrollProvider>
  );
}


export default App; 