import React from "react";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import { Container, Col, Row } from "react-bootstrap";
import { FcFlashOn } from "react-icons/fc";
import styles from "../Styles/EstilosGenerales/css.module.css";

const Habilidades = () => {
  return (
    <div
      className={` my-auto  ms-2  text-center ${styles.habilidades}`}
      style={{ height: "90%", width: "48%", borderRadius: "1%" }}
    >
      <div
        className=" d-flex flex-column mt-4 text-center"
        style={{ height: "90%" }}
      >
        {" "}
        <JackInTheBox>
          <div
            className={styles.habilidadesResponsive}
            style={{ marginBottom: "10rem" }}
          >
            <h1 className={styles.Titulos}>
              {" "}
              Habilidades
              <FcFlashOn />
            </h1>
          </div>
          <div
            className="text-center  m-auto  d-flex"
            style={{ height: "130%", width: "100%" }}
          >
            <Container
              className={styles.imgagenesResposive}
              style={{ width: "100%" }}
            >
              <Row>
                <Col>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.50.06_AM_cawdig.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.50.06_AM_1_ircvus.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645864/WhatsApp_Image_2022-07-24_at_12.53.14_AM_2_rurv8s.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645864/WhatsApp_Image_2022-07-24_at_12.53.13_AM_m4dyqn.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645864/WhatsApp_Image_2022-07-24_at_12.53.14_AM_msj6xy.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.50.06_AM_2_hl9hru.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.53.13_AM_1_agl8m9.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.53.13_AM_2_vhn9ts.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658639195/WhatsApp_Image_2022-07-24_at_12.05.39_AM_1_lgizxb.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658639435/WhatsApp_Image_2022-07-24_at_12.09.04_AM_zb7dfk.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.53.13_AM_1_agl8m9.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <img
                    src="https://res.cloudinary.com/duddljshu/image/upload/v1658645863/WhatsApp_Image_2022-07-24_at_12.53.13_AM_2_vhn9ts.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
              </Row>
            </Container>
            <div className="d-flex justify-content-around mt-5"></div>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Habilidades;
