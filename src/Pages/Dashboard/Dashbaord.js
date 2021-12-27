import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

import "./Dashboard.css";

const Dashboard = () => {
  const { logout, admin } = useAuth();
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#243352" }}
        expand={false}
        className="p-lg-3 p-md-3 sticky-top"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand as={HashLink} to="/home" className="fs-2">
            ALGO DIGITAL
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                DashBoard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!admin ? (
                  <>
                    <Nav.Link as={HashLink} to="/" className="">
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={HashLink}
                      to="dashboard/myOrders"
                      className=""
                    >
                      My Orders
                    </Nav.Link>

                    <Nav.Link
                      as={HashLink}
                      to={`dashboard/makePayment`}
                      className=""
                    >
                      Make Payment
                    </Nav.Link>
                    <Nav.Link
                      as={HashLink}
                      to={`dashboard/addReview`}
                      className=""
                    >
                      Add Review
                    </Nav.Link>

                    <Navbar.Text onClick={logout}>
                      <span style={{ cursor: "pointer " }}>LogOut</span>
                    </Navbar.Text>
                  </>
                ) : (
                  <>
                    <Nav.Link as={HashLink} to="/" className="">
                      Home
                    </Nav.Link>
                    <Nav.Link as={HashLink} to={`dashboard/makeAdmin`}>
                      Make Admin
                    </Nav.Link>
                    <Nav.Link as={HashLink} to={`dashboard/manageOrders`}>
                      Manage Orders
                    </Nav.Link>
                    <Nav.Link as={HashLink} to={`dashboard/manageServices`}>
                      Manage Services
                    </Nav.Link>
                    <Nav.Link as={HashLink} to={`dashboard/addServices`}>
                      Add Services
                    </Nav.Link>
                    <Nav.Link as={HashLink} to={`dashboard/manageReviews`}>
                      Manage Reviews
                    </Nav.Link>

                    <Navbar.Text onClick={logout}>
                      <span style={{ cursor: "pointer " }}>LogOut</span>
                    </Navbar.Text>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Dashboard;
