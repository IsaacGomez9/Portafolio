import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Isaac G</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Conactme</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
