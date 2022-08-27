import React from "react";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import styles from "../Styles/EstilosGenerales/css.module.css"

const SobreMi = () => {
  return (
    <div
      className={`my-auto  ms-2  text-center d-flex flex-column justify-content-center ${styles.sobreMi} `}
      style={{ height: "90%", width: "50%", borderRadius: "1%" }}
    >
      <div className="text-center">
        <Fade>
          <h1 className={`text-center mt-4  ${styles.Titulos}`}>
            <span className="text-danger">-</span>SOBRE MI
            <span className="text-danger">-</span>
          </h1>
        </Fade>
        <Slide triggerOnce>
          <p>El mejor modo de predecir el futuro es inventandolo</p>
        </Slide>
      </div>
      <div
        className=" text-center m-auto  "
        style={{ height: "70%", width: "50%" }}
      >
        <JackInTheBox>
          <img
            src="https://res.cloudinary.com/duddljshu/image/upload/v1657667289/WhatsApp_Image_2022-07-12_at_6.06.20_PM_hwuziu.jpg"
            alt=""
            style={{ width: "55%", borderRadius: "50%" }}
            className="m-auto"
          />
        </JackInTheBox>
      </div>
      <div
        className="text-center m-auto"
        style={{ height: "100%", width: "80%" }}
      >
        <Slide triggerOnce>
          <p className={`mt-2 ${styles.Letras}`}>
            Soy Isaac Gomez un desarrollador web(trainee). Me encanta todo lo
            relacionado con el tema del desarrollo web, por lo que actualmente
            pertenezco al Bootcamp de Fron-End Academia Geek, en el cual,aprendo
            y pongo a prueba este conocimiento; lo que me ayuda a mejorar mis
            habilidades y sentirme más cómodo con las nuevas tecnologias. Me
            encantaria pertenecer a un equipo de trabajo, en donde pueda poner
            en practica mis habilidades para mejorarlas, y desarrollar más mis
            destrezas y aptitudes.
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default SobreMi;
