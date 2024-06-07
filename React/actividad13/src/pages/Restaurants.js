// src/pages/Restaurants.js
import React from 'react';

function Restaurants() {
  return (
    <div className="container mt-5">
      <h1>Restaurants</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Restaurant Gourmet</h5>
          <p>Descripció: Alta cuina amb ingredients frescos i de qualitat.</p>
          <p>Contacte: 123-456-7890</p>
        </li>
        <li className="list-group-item">
          <h5>Bistro Bon Appétit</h5>
          <p>Descripció: Cuina francesa autèntica en un ambient acollidor.</p>
          <p>Contacte: 234-567-8901</p>
        </li>
        <li className="list-group-item">
          <h5>La Trattoria</h5>
          <p>Descripció: Deliciosos plats italians fets amb passió.</p>
          <p>Contacte: 345-678-9012</p>
        </li>
      </ul>
    </div>
  );
}

export default Restaurants;
