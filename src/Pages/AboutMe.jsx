import React from "react";
import styles from "../Styles/EstilosGenerales/css.module.css";
import SobreMi from "../Components/SobreMi";
import Habilidades from "../Components/Habilidades";
const AboutMe = () => {
  return (
    <div className={`mt-5 ${styles.aboutmeP}`}>
      <SobreMi />
      <Habilidades />
    </div>
  );
};

export default AboutMe;
