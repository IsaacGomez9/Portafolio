import React from "react";
import { Slide } from "react-awesome-reveal";
import CardsProyectos from "../Components/CardsProyectos";

const CardComponent = () => {
  return (
    <Slide triggerOnce>
      <CardsProyectos />
    </Slide>
  );
};

export default CardComponent;
