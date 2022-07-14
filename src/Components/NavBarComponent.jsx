import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <div>
      <Navbar bg="" variant="" style={{ backgroundColor: "#114358" }}>
        <Container>
          <Navbar.Brand className="m-auto" style={{ color: "#F1ECE7" }}>
            Isaac Gómez
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
