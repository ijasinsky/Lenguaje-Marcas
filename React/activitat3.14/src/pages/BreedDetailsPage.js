// src/pages/BreedDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BreedDetails from '../components/BreedDetails';

const BreedDetailsPage = () => {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
      headers: { 'x-api-key': 'live_6Bz4NBzJaxZm8EvHJZkVohImPOT7rvnfoABH1HWJ3BNPhsSgUbbKrePYtPy2zYJh' }
    })
      .then(response => response.json())
      .then(data => setBreed(data));
  }, [id]);

  return breed ? <BreedDetails breed={breed} /> : <p>Loading...</p>;
};

export default BreedDetailsPage;