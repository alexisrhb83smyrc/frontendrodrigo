import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Ferreteria</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link href="#home">Inicio</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#about">Acerca de</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;