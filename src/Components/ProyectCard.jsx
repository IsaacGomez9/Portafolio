import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "../Styles/Style.module.css";

const ProyectCard = ({ img, title, description, proyecto, link }) => {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="p-2 d-flex justify-content-around">
          <Button
            className="btn  "
            href={proyecto}
            style={{ backgroundColor: "#114358", width: "40%" }}
            target="_blank"
          >
            Codigo
          </Button>
          <Button
            className=" "
            href={link}
            style={{ backgroundColor: "#114358", width: "40%" }}
            target="_blank"
          >
            Despliegue
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProyectCard;
