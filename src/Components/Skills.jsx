import React from "react";
import styles from "../Styles/EstilosGenerales/css.module.css";
import { Slide } from "react-awesome-reveal";

import CardComponent from "../Pages/CardComponent";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className="text-center">
        <Slide triggerOnce>
          <h1 className={`text-center mt-5 ${styles.Titulos}`}>
            <span className="text-danger">-</span>My Proyects
            <span className="text-danger">-</span>
          </h1>
        </Slide>
      </div>
      <CardComponent />
    </div>
  );
};

export default Skills;
