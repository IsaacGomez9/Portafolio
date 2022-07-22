import React from "react";
import AboutMe from "./AboutMe";
import CarruselTrabajos from "./CarruselTrabajos";
import Saludo from "./Saludo";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container">
      <Saludo />
      <hr />
      <h1 className="text-center mt-5 ">¿Quién soy?</h1>
      <p className="text-center " style={{ color: "#610707" }}>Mi introducción</p>
      <AboutMe />
      <hr className="mt-5" />
      <Skills />
      <CarruselTrabajos />
    </div>
  );
};

export default Home;
