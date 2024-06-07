// src/components/BreedDetails.js
import React from 'react';
import { Card } from 'react-bootstrap';

const BreedDetails = ({ breed }) => {
  return (
    <Card>
      <Card.Img variant="top" src={breed.image?.url} />
      <Card.Body>
        <Card.Title>{breed.name}</Card.Title>
        <Card.Text>{breed.description}</Card.Text>
        <Card.Text><strong>Origin:</strong> {breed.origin}</Card.Text>
        <Card.Text><strong>Temperament:</strong> {breed.temperament}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BreedDetails;