import React from 'react';
import Fila from './Fila';
import { filas } from '../lista';

const Taula: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Compras</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Tienda</th>
            <th>Notas</th>
            <th>Comprado</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <Fila key={index} fila={fila} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Taula;
