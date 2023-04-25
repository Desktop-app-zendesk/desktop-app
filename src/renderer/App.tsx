import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tickets from './components/Tickets';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tickets />} />
      </Routes>
    </Router>
  );
}
