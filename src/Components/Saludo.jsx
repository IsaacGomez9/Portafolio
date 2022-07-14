import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Saludo = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col sm={6}>
          <div className="mt-5  d-flex justify-content-around">
            <div className="mt-5 m-auto">
              <h1>Hola, Soy Isaac Gómez</h1>
              <p className="text-danger">Frontend Developer</p>
              <p>
                Soy Isaac Gomez{" "}
                <span className="text-danger">
                  un desarrollador web(trainee)
                </span>{" "}
                que le encanta todo lo relacionado con el tema del desarrollo
                web, por lo que actualmente pertenezco al Bootcamp de Fron-End
                Academia Geek, en el cual aprendo y pongo a prueba este
                conocimiento lo que me ayuda a mejorar mis habilidades y
                sentirme mas comodo con las nuevas tecnologias; me encantaria
                pertenecer a un equipo de trabajo en donde pueda poner en
                practica mis habilidades para mejorarlas reforzando mis
                destrezas y mis aptitudes.
              </p>
              <Button
                href="https://www.linkedin.com/in/isaac-cajamarca-gomez/"
                style={{ backgroundColor: "#114358" }}
                target="_blank"
              >
                Contact me
              </Button>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="ms-5  text-center mt-5">
            <img
              src="https://res.cloudinary.com/duddljshu/image/upload/v1657667289/WhatsApp_Image_2022-07-12_at_6.06.20_PM_hwuziu.jpg"
              alt=""
              style={{ width: "80%", borderRadius: "90px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Saludo;
