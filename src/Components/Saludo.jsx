import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";




const Saludo = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col sm={6} className="m-auto">
          <div className="mt-5  d-flex justify-content-around">
            <div className="">
              <h1>Hola, Soy Isaac Gómez</h1>
              <p className="" style={{ color: "#610707" }}>
                Frontend Developer
              </p>
              <p className="text-body">
                Soy un{" "}
                <span style={{ color: "#610707" }}>desarrollador web.</span>{" "}
                Cuento con conocimientos en: HTML | CSS | Javascript, y Como
                biblioteca de JavaScript Utilizo React js. Trabajo con
                metodologias agiles, lo que me permite desempeñarme de una
                manera excelente en mi campo laboral.
              </p>
              <Button
                href="https://www.linkedin.com/in/isaac-cajamarca-gomez/"
                style={{ backgroundColor: "#114358" }}
                target="_blank"
                className="mt-3"
              >
                Contactame !
              </Button>
            </div>
          </div>
        </Col>
        <Col sm={6} className="m-auto">
          <div className=" text-center ">
            <img
              src="https://res.cloudinary.com/duddljshu/image/upload/v1657773918/WhatsApp_Image_2022-07-13_at_11.44.13_PM_1_acidgb.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Saludo;
