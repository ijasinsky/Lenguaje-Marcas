// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PointsOfInterest from './pages/PointsOfInterest';
import Restaurants from './pages/Restaurants';
import Hotels from './pages/Hotels';
import LeisureActivities from './pages/LeisureActivities';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/points-of-interest" element={<PointsOfInterest />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/leisure-activities" element={<LeisureActivities />} />
      </Routes>
    </div>
  );
}

export default App;
