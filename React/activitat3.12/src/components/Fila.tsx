import React from 'react';

interface FilaProps {
  fila: {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
  };
}

const Fila: React.FC<FilaProps> = ({ fila }) => {
  return (
    <tr>
      <td>{fila.producto}</td>
      <td>{fila.cantidad}</td>
      <td>{fila.precio}</td>
      <td>{fila.tienda}</td>
      <td>{fila.notas}</td>
      <td>{fila.comprado ? 'Sí' : 'No'}</td>
      <td>
        <img src={fila.imagen} alt={fila.producto} style={{ width: '50px', height: '50px'}} />
      </td>
    </tr>
  );
};

export default Fila;
