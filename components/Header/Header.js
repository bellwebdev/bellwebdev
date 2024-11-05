"use client";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <Navbar expand="md">
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image
              src="projectImages/BellWebDevHFullVector.svg"
              width={150}
              height={50}
              alt="Bell WebDev Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto darkBlueText">
              <Nav.Link className="darkBlueText" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="darkBlueText" href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="darkBlueText" href="/blog">
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
