import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from '../Styles/Style.module.css'

const ProyectCard = ({ img, title, description }) => {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button className="btn  w-25  " style={{ backgroundColor: "#114358" }}>Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProyectCard;
