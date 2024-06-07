// src/pages/Hotels.js
import React from 'react';

function Hotels() {
  return (
    <div className="container mt-5">
      <h1>Hotels</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Hotel Luxor</h5>
          <p>Preu: 150€/nit</p>
          <p>Ubicació: Carrer Principal, 123</p>
          <p>Serveis: Piscina, Spa, Gimnàs</p>
        </li>
        <li className="list-group-item">
          <h5>Hotel Bella Vista</h5>
          <p>Preu: 120€/nit</p>
          <p>Ubicació: Avinguda del Mar, 456</p>
          <p>Serveis: Vistes al mar, Restaurant, Wi-Fi gratuït</p>
        </li>
        <li className="list-group-item">
          <h5>Hotel Econòmic</h5>
          <p>Preu: 80€/nit</p>
          <p>Ubicació: Carrer dels Estels, 789</p>
          <p>Serveis: Esmorzar inclòs, Aparcament gratuït</p>
        </li>
      </ul>
    </div>
  );
}

export default Hotels;
