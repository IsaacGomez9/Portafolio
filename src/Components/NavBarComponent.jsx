import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <div>
      <Navbar bg="" variant="" style={{ backgroundColor: "#114358" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#F1ECE7" }}>Isaac Gómez</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home" style={{ color: "#F1ECE7" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#F1ECE7" }}>
              About
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#F1ECE7" }}>
              Skills
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#F1ECE7" }}>
              Conact me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
