import React from "react";
import AboutMe from "./AboutMe";
import CarruselTrabajos from "./CarruselTrabajos";
import Saludo from "./Saludo";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container">
      <Saludo />
      <hr/>
      <h1 className="text-center mt-5">About me</h1>
      <p className="text-center">My introduction</p>
      <AboutMe />
      <hr/>
      <Skills/>
      <CarruselTrabajos/>

    </div>
  );
};

export default Home;
