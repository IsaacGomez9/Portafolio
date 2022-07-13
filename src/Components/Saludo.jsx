import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Saludo = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col sm={6}>
          <div className="mt-5  d-flex justify-content-around">
            <div className="mt-5 m-auto">
              <h1>Hola Soy Isaac G</h1>
              <p>Frontend Developer</p>
              <p>
                Soy un desarrollador web, el cual cuenta con los conocimientos
                para enfrentar nuevos retos y brindar soluciones basadas en las
                necesidades del usuario, también estoy dispuesto aprender nuevas
                tecnologías que me ayuden a crecer profesionalmente y a brindar
                mejores soluciones para el usuario.
              </p>
              <Button>Contact me</Button>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="ms-5  text-center mt-5">
            <img
              src="https://res.cloudinary.com/duddljshu/image/upload/v1657667289/WhatsApp_Image_2022-07-12_at_6.06.20_PM_hwuziu.jpg"
              alt=""
              style={{ width: "80%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Saludo;
