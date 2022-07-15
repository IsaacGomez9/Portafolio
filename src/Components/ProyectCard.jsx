import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from '../Styles/Style.module.css'


const ProyectCard = ({ img, title, description, proyecto, link}) => {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-around">
          <Button className="btn  w-25" href={proyecto} style={{ backgroundColor: "#114358" }} target="_blank">Codigo</Button>
           <Button className="btn  w-25" href={link} style={{ backgroundColor: "#114358" }} target="_blank">Despliegue</Button>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProyectCard;
