// src/pages/LeisureActivities.js
import React from 'react';

function LeisureActivities() {
  return (
    <div className="container mt-5">
      <h1>Activitats de Lleure</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Excursió a la Muntanya</h5>
          <p>Gaudeix d'una excursió guiada a les muntanyes locals, amb vistes panoràmiques espectaculars.</p>
        </li>
        <li className="list-group-item">
          <h5>Festival de Música</h5>
          <p>Participa en el nostre festival anual de música amb artistes de tot el món.</p>
        </li>
        <li className="list-group-item">
          <h5>Classes de Surf</h5>
          <p>Aprèn a fer surf a les nostres belles platges amb instructors experimentats.</p>
        </li>
      </ul>
    </div>
  );
}

export default LeisureActivities;
