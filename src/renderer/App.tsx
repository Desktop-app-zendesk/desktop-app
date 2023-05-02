import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Filter from 'renderer/common/Filter';
import Header from './common/Header';
import './App.css';
import Tickets from './components/Tickets';
import TicketDetails from './components/Tickets/TicketDetails';

export default function App() {
  return (
    <>
      <Header />
      <Filter />
      <Router>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/ticket-details" element={<TicketDetails />} />
        </Routes>
      </Router>
    </>
  );
}
