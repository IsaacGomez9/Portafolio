import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col sm={6}>
          <div className="  text-center">
            <img
              src="https://res.cloudinary.com/duddljshu/image/upload/v1657667289/WhatsApp_Image_2022-07-12_at_6.06.20_PM_hwuziu.jpg"
              alt=""
              style={{ width: "80" }}
            />
          </div>
        </Col>
        <Col sm={6}>
          <div
            className="d-flex align-items-center"
            style={{ height: "400px" }}
          >
            <div className="">
              <p className="">
                Soy un <span className="text-danger">desarrollador web.</span> Cuento con conocimientos en: HTML |
                CSS | Javascript, y Como biblioteca de JavaScript Utilizo React
                js. Trabajo con metodologias agiles, lo que me permite
                desempeñarme de una manera excelente en mi campo laboral.
              </p>
              <div className="d-flex justify-content-around mt-5">
                <div>
                  <h5 className="text-danger">6+ meses</h5>
                  <h6>Experiencia</h6>
                </div>
                <div>
                  <h5 className="text-danger"> 15+</h5>
                  <h6>Proyectos Realizados</h6>
                </div>
                
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
