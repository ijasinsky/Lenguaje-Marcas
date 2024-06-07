import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map(item => (
          <div className="col-md-4" key={item.id}>
            <Card className="mb-4">
              <CardImg top width="100%" src={item.imatgeUrl} alt={item.nom} />
              <CardBody>
                <CardTitle tag="h5">{item.nom}</CardTitle>
                <CardText>ID: {item.id}</CardText>
                <CardText>
                  Disponible: {item.disponible ? 'Sí' : 'No'}
                </CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;
