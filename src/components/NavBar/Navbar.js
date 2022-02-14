import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="nav-brand" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navBarS">
            <Link
              className="navLink home"
              style={{ color: "white" }}
              smooth={true}
              spy={true}
              to="home"
            >
              Home
            </Link>
            <Link
              smooth={true}
              spy={true}
              className="navLink contact"
              style={{ color: "white" }}
              to="contact"
            >
              Contact
            </Link>
            <Link
              smooth={true}
              spy={true}
              className="navLink about"
              style={{ color: "white" }}
              to="about"
            >
              About
            </Link>
            <Link
              className="navLink projects"
              style={{ color: "white" }}
              smooth={true}
              spy={true}
              to="projects"
            >
              Projects
            </Link>
            <Nav.Link
              className=" Resume"
              style={{
                color: "white",
                border: "1px solid red",
                borderRadius: "10%",
                outline: "none",
              }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
