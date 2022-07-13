import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProyectCard from "./ProyectCard";

const CardComponent = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col sm={6} xs={12}>
          <ProyectCard
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682767/ModaRapida_wmmch1.png"
            title="Moda Rapida"
            description="En este proyecto utilice HTML | CSS | JavaScript | para lograr una landing page enfocada en el tema de la moda rapida, mi principal objetivo era demostrar mis habilidades en CSS "
          />
        </Col>
        <Col sm={6} xs={12} className="mt-5">
          <ProyectCard
            title="Pronostico del Tiempo"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682676/Time_f5tm27.png"
            description="En este proyecto utilice React Js | Redux | Firebase Crud | React-Bootstrap.  Mi principal objetivo era practicar el inicio y logeo de sesion con Firebase y hacer un crud de este con Redux"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={6} xs={12}>
          <ProyectCard
            title="Rick And Morty Wiki"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657680711/Rick_And_morty_utyq5w.png"
            description="En este proyecto utilice React Js | Redux | Firebase Login | React-Bootstrap | En este Proyecto mi objetivo principal era consumir una API con la cual pudiera hacer una barra de busqueda de personajes, así como Practicar enrutamiento dinamo con React Router Dom"
          />
        </Col>
        <Col sm={6} xs={12} className="mt-5">
          <ProyectCard
            title="Landing Page Restaurante"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682920/LandingPage_i4had8.png"
            description="En este Proyecto utilice   HTML | CSS | JavaScript | Dark mode | Light mode |  en este proyecto mi objetivo era seguir un prototipo de alta fidelidad de Figma y hacer que este tuviera Dark mode y Light mode"
         />
        </Col>
      </Row>
    </Container>
  );
};

export default CardComponent;
