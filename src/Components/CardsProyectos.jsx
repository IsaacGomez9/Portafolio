import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProyectCard from "./ProyectCard";

const CardsProyectos = () => {
  return (
    <Container className="p-4 mt-3">
      <Row>
        <Col sm={6} xs={12}>
          <ProyectCard
            title="Rick And Morty Wiki"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657787145/Captura_hzhrsd.png"
            description="En éste proyecto utilicé: React Js | Redux | Firebase Login | React-Bootstrap. En esté proyecto mi objetivo principal, era consumir una API con la cual pudiera hacer una barra de búsqueda de personajes, así como Practicar enrutamiento dinámico con React Router Dom."
            proyecto="https://github.com/IsaacGomez9/Firebase-Redux-Rick-and-Morty"
            link="https://firebase-redux-rick-and-morty.vercel.app/"
          />
        </Col>
        <Col sm={6} xs={12} className="mt-5">
          <ProyectCard
            title="Countdown React"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657865905/CountDown_rntxc4.png"
            description="En éste proyecto utilice React Js | Hooks | Time Date  |  Mi principal objetivo era practicar el uso de Hooks de react creando este contador al cual se le pone una fecha para que obtenga la informacion para luego compararla con una fecha en especifico "
            proyecto="https://github.com/IsaacGomez9/React-Countdown-"
            link="https://react-countdown-amber.vercel.app/"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={6} xs={12}>
          <ProyectCard
            title="Pronóstico del Tiempo"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682676/Time_f5tm27.png"
            description="En éste proyecto utilice React Js | Redux | Firebase Crud | React-Bootstrap.  Mi principal objetivo era practicar el inicio y logeo de sesión con Firebase y hacer un crud de este con Redux"
            proyecto="https://github.com/IsaacGomez9/Clima-Redux-App"
            link="https://clima-redux-app.vercel.app/*"
          />
        </Col>
        <Col sm={6} xs={12} className="mt-5">
          <ProyectCard
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682767/ModaRapida_wmmch1.png"
            title="Moda Rápida"
            description="En éste proyecto utilicé: HTML | CSS | JavaScript  para lograr una landing page enfocada en el tema de la moda rapida. Mi principal objetivo era demostrar mis habilidades en CSS. "
            proyecto="https://github.com/IsaacGomez9/Pagina-Moda-rapida./tree/main/Proyecto-final"
            link="https://phenomenal-narwhal-81224a.netlify.app"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={6} xs={12}>
          <ProyectCard
            title="Landing Page Restaurante"
            img="https://res.cloudinary.com/duddljshu/image/upload/v1657682920/LandingPage_i4had8.png"
            proyecto="https://github.com/IsaacGomez9/LandingPage-Restaurante"
            link="https://leafy-medovik-eb24a7.netlify.app"
            description="En éste Proyecto utilicé:   HTML | CSS | JavaScript | Dark mode | Light mode. Mi objetivo era seguir un prototipo de alta fidelidad de Figma, y hacer que este tuviera Dark mode y Light mode."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardsProyectos;
