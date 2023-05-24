import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import './App.css';
import Tickets from './components/Tickets';
import TicketDetails from './components/Tickets/TicketDetails';
import AppProvider from './containers/AppContext';

export default function App() {
  return (
    <>
      <Header />
      <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/ticket-details" element={<TicketDetails />} />
        </Routes>
      </Router>
      </AppProvider>
    </>
  );
}
