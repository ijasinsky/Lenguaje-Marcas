// src/components/BreedList.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreedList = ({ breeds }) => {
  return (
    <Row>
      {breeds.map(breed => (
        <Col key={breed.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{breed.name}</Card.Title>
              <Card.Text>{breed.description}</Card.Text>
              <Link to={`/breed/${breed.id}`} className="btn btn-primary">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BreedList;