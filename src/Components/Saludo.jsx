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
              <p className="">
                Soy un <span className="text-danger">desarrollador web.</span>{" "}
                Cuento con conocimientos en: HTML | CSS | Javascript, y Como
                biblioteca de JavaScript Utilizo React js. Trabajo con
                metodologias agiles, lo que me permite desempeñarme de una
                manera excelente en mi campo laboral.
              </p>
              <Button
                href="https://www.linkedin.com/in/isaac-cajamarca-gomez/"
                style={{ backgroundColor: "#114358" }}
                target="_blank"
              >
                Contactame !
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
