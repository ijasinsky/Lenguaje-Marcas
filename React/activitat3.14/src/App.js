import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BreedListPage from './pages/BreedListPage';
import BreedDetailsPage from './pages/BreedDetailsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BreedListPage />} />
          <Route path="/breed/:id" element={<BreedDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
