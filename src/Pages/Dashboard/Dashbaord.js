import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Dashboard.css";
import AddReview from "./MyOrders/AddReview/AddReview";
import MyOrders from "./MyOrders/MyOrders";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
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
                <Nav.Link as={HashLink} to="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link as={HashLink} to={`${url}`} className="">
                  My Orders
                </Nav.Link>

                <Nav.Link as={HashLink} to={`${url}/addReview`} className="">
                  Add Review
                </Nav.Link>
                {/* admin */}
                <Nav.Link as={HashLink} to="/home" className="">
                  Make Admin
                </Nav.Link>
                <Nav.Link as={HashLink} to="/home" className="">
                  Manage Orders
                </Nav.Link>
                <Nav.Link as={HashLink} to="/home" className="">
                  Manage Services
                </Nav.Link>
                <Nav.Link as={HashLink} to="/home" className="">
                  Add Services
                </Nav.Link>
                <Nav.Link as={HashLink} to="/home" className="">
                  Manage Reviews
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route exact path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>

        <Route exact path={`${path}/makePayment`}>
          {/* <MakePayment></MakePayment> */}
        </Route>
        <Route exact path={`${path}/addReview`}>
          <AddReview></AddReview>
        </Route>

        {/* <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageCars`}>
            <ManageCars></ManageCars>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addCars`}>
            <AddCars></AddCars>
          </AdminRoute> */}
      </Switch>
    </>
  );
};

export default Dashboard;
