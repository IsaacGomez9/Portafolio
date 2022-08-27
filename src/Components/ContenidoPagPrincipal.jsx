import React from "react";
import styles from "../Styles/EstilosGenerales/css.module.css";
import { Fade } from "react-awesome-reveal";

const ContenidoPagPrincipal = () => {
  return (
    <div className={styles.divPrincipal}>
      <div className={styles.divContent}>
        <img
          className={`${styles.imagen} ${styles.imgLogo} ${styles.riLogoCircleLine}`}
          src="https://res.cloudinary.com/duddljshu/image/upload/v1658471255/WhatsApp_Image_2022-07-22_at_1.27.03_AM_qn41tf.jpg"
          alt=""
        />
        <div className={styles.cont}>
          {" "}
          <h1 className={`${styles.Titulos} ${styles.animacion}`}>
            Isaac Gómez
          </h1>
          <p className={`${styles.animacion}`}>Frontend Developer</p>
          <Fade delay={2000}>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/isaac-cajamarca-gomez/"
                target="_blank"
              >
                <img src="https://res.cloudinary.com/duddljshu/image/upload/v1658622248/linkedin-svgrepo-com_pls7pw.svg"></img>
              </a>
              <a href="https://github.com/IsaacGomez9" target="_blank">
                <img src="https://res.cloudinary.com/duddljshu/image/upload/v1658623473/github-svgrepo-com_o6yaam.svg"></img>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPagPrincipal;
