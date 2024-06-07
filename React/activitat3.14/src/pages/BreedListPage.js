// src/pages/BreedListPage.js
import React, { useState, useEffect } from 'react';
import BreedList from '../components/BreedList';

const BreedListPage = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: { 'x-api-key': 'live_6Bz4NBzJaxZm8EvHJZkVohImPOT7rvnfoABH1HWJ3BNPhsSgUbbKrePYtPy2zYJh' }
    })
      .then(response => response.json())
      .then(data => setBreeds(data));
  }, []);

  return <BreedList breeds={breeds} />;
};

export default BreedListPage;