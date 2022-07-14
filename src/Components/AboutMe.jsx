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
             {/*   */}
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
