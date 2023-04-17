import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
import { AllTickets } from './components/AllTickets';
import { MyTicket } from './components/MyTicket';

function Hello() {
  return <Test />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/allTickets" element={< AllTickets/>} />
        <Route path="/myTicket" element={< MyTicket/>} />
      </Routes>
    </Router>
  );
}
