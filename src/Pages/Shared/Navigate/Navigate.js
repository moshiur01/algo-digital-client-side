import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./nav.css";

const Navigate = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar
      className="p-lg-3 p-md-3 sticky-top"
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#243352" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={HashLink} to="/home" className="fs-2">
          ALGO DIGITAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home" className="">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services" className="">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#aboutUs" className="">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#team" className="">
              Our Team
            </Nav.Link>
            <Nav.Link href="#pricing" className="">
              Reviews
            </Nav.Link>
            <Nav.Link href="/home#contactUs" className="">
              Contact Us
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link as={HashLink} to="/dashboard" className="">
                  Dashboard
                </Nav.Link>
                <Navbar.Text className=" me-3 text-white">
                  Hello: {user.displayName}
                  <span className="text-light fw-bold"></span>
                </Navbar.Text>

                <Navbar.Text className=" text-white " onClick={logout}>
                  <span style={{ cursor: "pointer " }}>LogOut</span>
                </Navbar.Text>
              </>
            ) : (
              <Nav.Link as={HashLink} to="/login" className="">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigate;
