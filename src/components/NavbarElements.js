import React from 'react';
import Dropdown from './Dropdown';
import { Navbar, Nav } from 'react-bootstrap'

function NavbarElements() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">EPIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Dropdown />
          </Nav>
          <Nav>
            <Nav.Link href="/contact-us">Contacts</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarElements;
