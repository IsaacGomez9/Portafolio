import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark mt-5">
      <Container>
        <Nav className="m-auto">
          <p>@ Isaac Gomez</p>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
