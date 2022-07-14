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
                Soy Isaac Gomez{" "}
                <span className="" style={{ color: "#610707" }}>
                  un desarrollador web(trainee)
                </span>{" "}
                Soy Isaac Gómez, un desarrollador web (trainee). Me encanta todo
                lo relacionado con el tema del desarrollo web, por lo que
                actualmente pertenezco al Bootcamp de Fron-End Academia Geek, en
                el cual,aprendo y pongo a prueba este conocimiento; lo que me
                ayuda a mejorar mis habilidades y sentirme más cómodo con las
                nuevas tecnologias. Me encantaria pertenecer a un equipo de
                trabajo, en donde pueda poner en practica mis habilidades para
                mejorarlas, y desarrollar más mis destrezas y aptitudes.
              </p>
              {/*   */}
              <div className="d-flex justify-content-around mt-5">
                <div>
                  <h5 className="" style={{ color: "#610707" }}>
                    6+ meses
                  </h5>
                  <h6>Experiencia</h6>
                </div>
                <div>
                  <h5 className="" style={{ color: "#610707" }}>
                    {" "}
                    15+
                  </h5>
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
