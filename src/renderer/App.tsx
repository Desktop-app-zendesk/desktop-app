import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';

function Hello() {
  return <Test />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
