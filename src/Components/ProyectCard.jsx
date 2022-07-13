import React from "react";
import { Card, Button } from "react-bootstrap";

const ProyectCard = ({ img, title, description }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button className="btn btn-primary w-25  ">Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProyectCard;
